import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Hom from "../components/Hom";
import Features from "../components/Features";
import { sanityClient, urlFor } from "../Sanity";
import { Post } from "../typing";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";
import { useSession } from "next-auth/react"

interface Props {
  posts: [Post]
}


type Input = {
  name: string;
  email: string;
  message: string;
}

export default function Home({ posts }: Props) {
  const { data: session } = useSession();

  const [userErr, setUserErr] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    fetch("/api/createContact", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => {
      console.log(data);
      setSubmitted(true);
    }).catch((err) => {
      console.log(err);
      setSubmitted(false);
    })
  }
  const handleError = () => {
    if(!session){
      setUserErr("You must be logged in to contact us");
    }else{
      setUserErr("");
    }
  }
  return (
    <div>
      <Head>
        <title>Fitness Cube</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>

      <main className="font-bodyFont">

        <Header />

        <div className="py-20">
          <Hom />
        </div>

        <div className="py-20">
          <About />
        </div>

        {/* Pages */}

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6 px-4" id="pages">
          {
            posts.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className="border-[1px] border-secondaryColor border-opacity-40 h-[450px] group flex flex-col justify-center">
                  <div className="h-3/5 w-full overflow-hidden">
                    <Image
                      width={280}
                      height={250}
                      src={urlFor(post.mainImage).url()!}
                      alt="image"
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="h-2/5 w-full flex flex-col justify-center">
                    <div className="flex justify-between items-center px-4 py-1 border-b-[1px] border-b-gray-500 font-semibold uppercase">
                      <p>
                        {post.title}
                      </p>
                    </div>
                    <p className="py-2 px-4 text-base">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>

        {/* Features */}

        <div className="py-20">
          <Features />
        </div>

        {/* Contact Us  */}
        <div id="contact" className="py-10"></div>
        <div className="flex space-x-5 bg-gray-100">
          <div className='max-w-3xl mx-auto py-16'>
            <hr className="max-w-lg my-5 mx-auto border[1px] border-secondaryColor" />

            {submitted ? (
                <div className="flex flex-col items-center my-5 gap-2 max-w-2xl mx-auto text-gray-400">
                  <h3 className="text-3xl font-bold">
                    Thank you for sending us details!
                  </h3>
                  <p>We will Contact you soon!</p>
                </div>
              ) : (
            <div>
              <p className="font-header text-4xl px-4 font-semibold uppercase text-primary sm:text-5xl text-center lg:text-6xl text-secondaryColor">
                Wanna contact us?
              </p>
              <h3 className="pt-6 font-header text-xl px-4 font-medium text-center text-black sm:text-2xl lg:text-3xl">
                Leave a details below!
              </h3>
              <hr className="py-3 mt-3" />              
                <form onSubmit={handleSubmit(onSubmit)} className="mt-7 flex flex-col gap-5">
                  <label className="flex flex-col">
                    <span className="font-titleFont font-semibold text-base">
                      Name
                    </span>
                    <input {...register("name", { required: true })}
                      className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
                      type="text"
                      placeholder="Enter your name" />
                  </label>
                  <label className="flex flex-col">
                    <span className="font-titleFont font-semibold text-base">
                      Email
                    </span>
                    <input {...register("email", { required: true })}
                      className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
                      type="email"
                      placeholder="Enter your Email" />
                  </label>
                  <label className="flex flex-col">
                    <span className="font-titleFont font-semibold text-base">
                      Message
                    </span>
                    <textarea {...register("message", { required: true })}
                      className="text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor"
                      placeholder="Type your Message..."
                      rows={6} />
                  </label>

                  {session && (
                    <button
                      type="submit"
                      className="w-full bg-purple-400 text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-purple-800 duration-300">
                      Send
                    </button>
                  )}

                  <div className="flex flex-col p-5">
                    {errors.name && (
                      <span className="text-red-400">-The Name Field is required</span>
                    )}
                    {errors.email && (
                      <span className="text-red-400">-The Email Field is required</span>
                    )}
                    {errors.message && (
                      <span className="text-red-400">-The Message Field is required</span>
                    )}
                  </div>
                </form>
                </div>
              )}

              {!session && (
                <button onClick={handleError}
                  type="submit"
                  className="w-full bg-purple-400 text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-purple-800 duration-300">
                  Send
                </button>
              )}

              {
                userErr && (
                  <p className="text-sm font-titleFont text-center font-semibold text-red-500 underline underline-offset-2 my-1 px-4 animate-bounce">
                    {" "}
                    <span className="text-base font-bold italic mr-2">!</span>
                    {userErr}</p>
                )
              }

            
          </div>
        </div>

        <Footer />

      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
    _id,
    title,
    description,
    mainImage,
    slug
  }`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    }
  }
};


