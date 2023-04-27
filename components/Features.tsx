import React from 'react'
import Image from 'next/image';
import bmiImg from '../public/images/bmiImg.jpg'
import calorieImg from '../public/images/calorieImg.png'
import fitnessImg from "../public/images/fitness.jpg"


const Features = () => {
    return (
        <div id="features">
            <p className="pt-6 font-header text-2xl font-semibold px-4 text-center uppercase text-secondaryColor sm:text-2xl lg:text-3xl">
                A ideal toolkit for your requirements
            </p>
            <div className="pt-6 font-header text-center px-4 py-20 font-body leading-relaxed text-gray-600">
                <h1>Trying to improve your physique, lower your BMI, lose weight, or make health-related investments? </h1>
                <h2>We provide you with the necessary tools to get there</h2>
            </div>
            <div className='flex space-x-5 text-center bg-white'>
                <div className='container mx-auto px-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6'>
                        <div>
                            <Image
                                src={bmiImg}
                                width={800}
                                height={800}
                                className="mx-auto mb-4 w-32 rounded-lg shadow-lg dark:shadow-black/20"
                                alt="bmi" />
                            <h5 className="mb-2 text-xl font-medium leading-tight text-secondaryColor">Want to know your BMI</h5>
                            <p className="text-neutral-600 dark:text-neutral-500">Get to know your body better with our accurate BMI Caluclator</p>
                        </div>
                        <div>
                            <Image
                                src={calorieImg}
                                width={800}
                                height={800}
                                className="mx-auto mb-4 w-32 rounded-lg shadow-lg dark:shadow-black/20"
                                alt="bmi" />
                            <h5 className="mb-2 text-xl font-medium leading-tight text-secondaryColor">Want to know your Calories</h5>
                            <p className="text-neutral-600 dark:text-neutral-500">Count your calories effortlessly with our advanced Caluclator</p>
                        </div>
                        <div>
                        <Image
                                src={fitnessImg}
                                width={800}
                                height={800}
                                className="mx-auto mb-4 w-32 rounded-lg shadow-lg dark:shadow-black/20"
                                alt="bmi" />
                            <h5 className="mb-2 text-xl font-medium leading-tight text-secondaryColor">Fitness time</h5>
                            <p className="text-neutral-600 dark:text-neutral-500">Transform your body from home with our curated YouTube workout playlists</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Features;
