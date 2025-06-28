import Image from 'next/image'
import React from 'react'

const AboutSectionThree = () => {
    return (
        <div className="lg:px-10 px-3">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 py-32 mb-2">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Our Performance</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="flex-1 lg:text-8xl text-5xl capitalize font-bold max-w-2xl">
                    Our Impact in Numbers

                </h1>
            </div>
            <div className="grid grid-cols-1  2xl:grid-cols-3 lg:grid-cols-2 gap-6">
                <div className="relative h-[350px] w-full bg-gray-100 rounded-2xl overflow-hidden ">
                    <Image
                        src={'/man-2.avif'}
                        alt="Team working"
                        className="absolute inset-0 w-full h-full object-cover"
                        fill
                    />
                </div>

                <div className="bg-gray-100 p-6  rounded-2xl flex flex-col justify-between h-[350px]">
                    <div className='flex flex-col  md:gap-28 gap-16'>
                        <div className='flex items-center md:text-5xl text-4xl  font-bold'>
                            <h3 className="  mb-2">200</h3>
                            <span className='text-orange-600'>+</span>
                        </div>
                        <div className='space-y-4'>
                            <h4 className="text-md:3xl text-2xl font-extrabold uppercase mb-3">Successful Projects</h4>
                            <p className=" text-gray-800 leading-relaxed text-[20px]">
                                Showcases our vast expertise and unwavering provision of top-tier results.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-2xl    flex flex-col justify-between h-[350px]">
                    <div className='flex flex-col md:gap-28 gap-16'>
                        <div className='flex items-center md:text-5xl text-4xl  font-bold'>
                            <h3 className="  mb-2">200</h3>
                            <span className='text-orange-600'>+</span>
                        </div>
                        <div className='space-y-4'>
                            <h4 className="text-md:3xl text-2xl font-extrabold uppercase mb-3">Successful Projects</h4>
                            <p className=" text-gray-800 leading-relaxed text-[20px]">
                                Showcases our vast expertise and unwavering provision of top-tier results.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-2xl    flex flex-col justify-between h-[350px]">
                    <div className='flex flex-col md:gap-28 gap-16'>
                        <div className='flex items-center md:text-5xl text-4xl  font-bold'>
                            <h3 className="  mb-2">200</h3>
                            <span className='text-orange-600'>+</span>
                        </div>
                        <div className='space-y-4'>
                            <h4 className="text-md:3xl text-2xl font-extrabold uppercase mb-3">Successful Projects</h4>
                            <p className=" text-gray-800 leading-relaxed text-[20px]">
                                Showcases our vast expertise and unwavering provision of top-tier results.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-2xl    flex flex-col justify-between h-[350px]">
                    <div className='flex flex-col md:gap-28 gap-16'>
                        <div className='flex items-center md:text-5xl text-4xl  font-bold'>
                            <h3 className="  mb-2">200</h3>
                            <span className='text-orange-600'>+</span>
                        </div>
                        <div className='space-y-4'>
                            <h4 className="text-md:3xl text-2xl font-extrabold uppercase mb-3">Successful Projects</h4>
                            <p className=" text-gray-800 leading-relaxed text-[20px]">
                                Showcases our vast expertise and unwavering provision of top-tier results.
                            </p>
                        </div>
                    </div>
                </div>

                

                <div className="relative h-[350px] w-full bg-gray-200 rounded-2xl overflow-hidden ">
                    <Image
                        src={'/red-men.avif'}
                        alt="Team working"
                        className="absolute inset-0 w-full h-full object-cover"
                        fill
                    />
                </div>
            </div>


        </div>
    )
}

export default AboutSectionThree