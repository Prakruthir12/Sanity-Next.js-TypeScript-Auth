import React from 'react'


const About = () => {
  return (
    <div>
        <div className="flex space-x-5 bg-gray-200 mx-auto" id="about">
          <div className="container flex flex-col items-center py-16 md:py-20">
            <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
              <h2 className="font-header text-4xl px-4 font-semibold uppercase text-primary sm:text-5xl lg:text-6xl text-secondaryColor">
                Who are we?
              </h2>
              <h4 className="pt-6 font-header text-xl px-4 font-medium text-black sm:text-2xl lg:text-3xl">
                Fitness Cube is a tool.
              </h4>
              <div className="pt-6 font-body px-4 leading-relaxed text-gray-400">
                The Fitness Cube aims to promote healthy lifestyles by making it
                easy for individuals to track their BMI, Calories and make informed decisions about
                their diet and exercise. The website is user-friendly interface and personalized
                results make it easy for users to understand their BMI status and take the necessary
                steps to achieve their fitness goals.

              </div>

            </div>
            <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            </div>
          </div>
        </div>
      </div>
  )
}


export default About;
