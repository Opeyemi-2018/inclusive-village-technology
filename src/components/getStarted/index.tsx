import React from 'react'
import LinkWithArrow from '../contactButton'
import { MdOutlineArrowOutward } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'


const GetStarted = () => {
    return (
        <div>
            <div className="lg:px-10 px-3 pt-40 pb-10 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-5 overflow-x-auto scrollbar-hide">
                        <Image src={'/work-1.avif'} alt="work" width={250} height={250} className="rounded-lg" />
                        <Image src={'/art.avif'} alt="work" width={400} height={400} className="rounded-lg" />
                        <Image src={'/work-2.avif'} alt="work" width={250} height={250} className="rounded-lg" />
                    </div>

                    <div>
                        <h1 className="w-full text-[16vw] font-bold text-center leading-none whitespace-nowrap overflow-hidden">
                            let’s work together
                        </h1>
                    </div>

                    <div className='flex items-center justify-center pt-18'>
                        <Link
                            href={'/contact'}
                            className="uppercase flex flex-col items-start gap-1 font-semibold group"
                        >
                            <div className="flex items-center gap-3 text-gray-700">
                                get started today
                                <MdOutlineArrowOutward className="text-orange-600" size={30} />
                            </div>
                            <span className="w-10 h-[1px] bg-black"></span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden w-full pt-10">
                <div className="flex whitespace-nowrap scroll-animation">
                    {['/ipad.avif', '/mochup.avif', '/phone.avif', '/mac.avif', '/ipad.avif'].map((src, idx) => (
                        <Image
                            key={idx}
                            src={src}
                            alt="scrolling"
                            width={300}
                            height={300}
                            className="w-[300px] h-[300px] object-cover shrink-0"
                        />
                    ))}
                    {/* Duplicate for seamless loop */}
                    {['/ipad.avif', '/mochup.avif', '/phone.avif', '/mac.avif', '/ipad.avif'].map((src, idx) => (
                        <Image
                            key={`dup-${idx}`}
                            src={src}
                            alt="scrolling"
                            width={300}
                            height={300}
                            className="w-[300px] h-[300px] object-cover shrink-0"
                        />
                    ))}
                </div>
            </div>

            <div className="lg:px-10 px-3 flex lg:flex-row flex-col justify-between pt-24 pb-20">
                <h1 className="font-bold md:text-6xl text-4xl max-w-3xl">
                    Your vision, our expertise. Let’s build something incredible.
                </h1>
                <div className='flex items-center  pt-18'>
                    <LinkWithArrow
                        href="/contact"
                        label="get in touch"
                        underlineColor="bg-black"
                        iconColor="text-orange-600"
                    />
                </div>
            </div>

        </div>
    )
}

export default GetStarted