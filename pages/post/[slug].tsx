import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { sanityClient, urlFor } from "../../Sanity";
import { Post } from "../../typing";
import { GetStaticProps } from 'next';
import PortableText from 'react-portable-text';

interface Props {
    post: Post
}

const Post = ({ post }: Props) => {
    return (
        <div>
            <Header />
            {/* main Image */}
            <div className='flex flex-wrap py-4 justify-center '>
                <img
                    className='h-auto max-w-sm shadow-lg dark:shadow-black/30'
                    src={urlFor(post.mainImage).url()!} alt="coverimg" />
            </div>

            {/* Article */}

            <div className='max-w-3xl mx-auto'>
            <article className='w-full mx-auto p-5 bg-secondaryColor/10'>
                <h1 className='font-titleFont font-medium text-[32px] text-primary border-b-[1px] border-b-cyan-800 mt-10 mb-3'>
                    {post.title}
                </h1>
                <h2 className='font-bodyFont text-[18px] text-gray-500 mb-2'>
                    {post.description}
                </h2>
                <div className='mt-10'>
                    <PortableText 
                    dataset = {process.env.NEXT_PUBLIC_SANITY_DATASET}
                    projectId ={
                        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                    content={post.body}
                    serializers={{
                        h1: (props: any) => (
                            <h1 className='text-3xl font-bold my-5 font-titleFont'
                            {...props}/>
                        ),
                        h2: (props: any) => (
                            <h2 className='text-2xl font-bold my-5 font-titleFont'
                            {...props}/>
                        ),
                        h3: (props: any) => (
                            <h3 className='text-2xl font-bold my-5 font-titleFont'
                            {...props}/>
                        ),
                        li: ({children}:any) => (
                            <li className='ml-4 list-disc'>{children}</li>
                        ),
                        link:({href, children}:any)=>(
                            <a href={href} className='text-cyan-500 hover: underline'>
                                {children}
                            </a>
                        ),
                    }}
                    />
                </div>
            </article>


            </div>

            <div className='py-20'>
                <Footer />
            </div>

        </div>
    )
}

export default Post

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug{
            current
        }
    }`
    const posts = await sanityClient.fetch(query);
    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current,
        },
    }))
    return {
        paths,
        fallback: "blocking",
    };
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        description,
        mainImage,
        slug,
        body
    }`;

    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    });
    if (!post) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            post,
        }
    };
};