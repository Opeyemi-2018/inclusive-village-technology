import Image from 'next/image'
import React from 'react'

const AboutSectionThree = () => {
    return (
        <div className="lg:px-10 px-3 text-[#0b0b0b]">
            <div className="flex flex-col lg:flex-row  justify-between items-start lg:items-center gap-6 py-32 mb-2">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Our Performance</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="flex-1 lg:text-7xl text-4xl font-unbounded uppercase font-bold max-w-2xl">
                    Our Impact in Numbers

                </h1>
            </div>
            <div className="grid grid-cols-1   lg:grid-cols-3 md:grid-cols-2 gap-6">
                <div className="relative md:h-[380px] h-[360px] w-full bg-gray-100 rounded-2xl overflow-hidden ">
                    <Image
                        src={'/agency-5.avif'}
                        alt="Team working"
                        className="absolute inset-0 w-full h-full object-cover"
                        fill
                    />
                </div>

                <div className="bg-gray-100 p-6  rounded-2xl flex flex-col justify-between md:h-[380px] h-[340px]">
                    <div className='flex items-center md:text-[34px] text-4xl font-unbounded  font-bold'>
                        <h3 className=" ">200</h3>
                        <span className='text-orange-600'>+</span>
                    </div>
                    <div className='space-y-3'>
                        <h4 className="text-md:[20px] text-2xl font-bold font-unbounded uppercase mb-3">Successful Projects</h4>
                        <p className=" text-[#0b0b0b]  text-[20px]">
                            Showcases our vast expertise and unwavering provision of top-tier results.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-100 p-6  rounded-2xl flex flex-col justify-between md:h-[380px] h-[340px]">
                    <div className='flex items-center md:text-[34px] text-4xl font-unbounded  font-bold'>
                        <h3 className=" ">200</h3>
                        <span className='text-orange-600'>+</span>
                    </div>
                    <div className='space-y-3'>
                        <h4 className="text-md:[20px] text-2xl font-bold font-unbounded uppercase mb-3">Successful Projects</h4>
                        <p className=" text-[#0b0b0b]  text-[20px]">
                            Showcases our vast expertise and unwavering provision of top-tier results.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-100 p-6  rounded-2xl flex flex-col justify-between md:h-[380px] h-[340px]">
                    <div className='flex items-center md:text-[34px] text-4xl font-unbounded  font-bold'>
                        <h3 className=" ">200</h3>
                        <span className='text-orange-600'>+</span>
                    </div>
                    <div className='space-y-3'>
                        <h4 className="text-md:[20px] text-2xl font-bold font-unbounded uppercase mb-3">Successful Projects</h4>
                        <p className=" text-[#0b0b0b]  text-[20px]">
                            Showcases our vast expertise and unwavering provision of top-tier results.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-100 p-6  rounded-2xl flex flex-col justify-between md:h-[380px] h-[340px]">
                    <div className='flex items-center md:text-[34px] text-4xl font-unbounded  font-bold'>
                        <h3 className=" ">200</h3>
                        <span className='text-orange-600'>+</span>
                    </div>
                    <div className='space-y-3'>
                        <h4 className="text-md:[20px] text-2xl font-bold font-unbounded uppercase mb-3">Successful Projects</h4>
                        <p className=" text-[#0b0b0b]  text-[20px]">
                            Showcases our vast expertise and unwavering provision of top-tier results.
                        </p>
                    </div>
                </div>

                <div className="relative md:h-[380px] h-[360px] w-full bg-gray-200 rounded-2xl overflow-hidden ">
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