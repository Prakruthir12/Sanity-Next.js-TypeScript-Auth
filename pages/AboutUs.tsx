import React from 'react'
import Header from "../components/Header";
import { sanityClient, urlFor } from "../Sanity";
import { Author } from "../typing";
import Image from "next/image";
import Link from "next/link";
import _document from "../pages/_document"

interface Props {
  authors: [Author]
}

const AboutPage = ({ authors }: Props) => {
  <_document/>
  return (
    <div>
    <Header />

    <div>
      <p className=" font-titleFont pt-6 font-header text-2xl font-semibold px-4 text-center uppercase text-secondaryColor sm:text-2xl lg:text-3xl">
        Team members
      </p>
      <div className="pt-6 font-bodyFont font-header text-center px-4 py-20 font-body leading-relaxed text-gray-600">
        <h1>Four members in a group</h1>
      </div>
      <div className='container mx-auto px-20'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {
            authors.map((author) => (
              <Link key={author._id} href={`/author/${author.slug.current}`}>
                <Image
                  width={280}
                  height={250}
                  src={urlFor(author.image).url()!}
                  alt="image"
                  className="mx-auto mb-4 w-32 rounded-full"
                />
                <div className="font-bodyFont justify-center mb-2 text-center text-lg leading-tight text-gray-800">
                  <p>
                    {author.name}
                  </p>
                  <div className="font-bodyFont text-lg text-neutral-500 dark:text-neutral-500">
                    <p>
                    {author.bio}
                    </p>
                  </div>

                </div>

              </Link>
            ))
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutPage;

export const getServerSideProps = async () => {
  const query = `*[_type=="author"]{
    _id,
    name,
    image,
    slug,
    bio
  }`;
  const authors = await sanityClient.fetch(query);
  return {
    props: {
      authors,
    }
  }
};