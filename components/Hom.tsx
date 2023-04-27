import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router'
import firstimg from '../public/images/firstimg.jpg'

const Hom = () => {
  const router = useRouter()
  return (
    <div>
      <div className="flex space-x-5 bg-white" id="home">
        <div className="container flex flex-col items-center md:py-15 lg:flex-row">
          <div className="w-full text-center text sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl px-4 font-semibold uppercase text-primary sm:text-5xl text-center lg:text-6xl text-secondaryColor">
              Fitness Cube
            </h2>
            <h4 className="pt-6 font-header text-xl px-4 font-medium text-center text-black sm:text-2xl lg:text-3xl">
              Each day is new opportunity!
            </h4>
            <div className="pt-6 font-body px-4 leading-relaxed text-center text-black">
              <h3>To start fresh, to eat right, to train hard and to live healthy</h3>
            </div>

            <div className="flex py-7 justify-center space-x-2">
            <button type="button" onClick={()=>router.push('/welcome')}
            className="bg-purple-400 hover:bg-purple-800 text-white font-bold py-2 px-4 border border-purple-950 rounded">
              Get started
            </button>
            </div>

          </div>

          <div className="flex flex-wrap py-4 justify-center">
            <Image
              src={firstimg}
              className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}


export default Hom;
