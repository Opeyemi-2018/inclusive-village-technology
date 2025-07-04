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
                    <div className="flex items-center gap-5 overflow-x-auto scrollbar-hide pb-4">
                        <Image src={'/work-1.avif'} alt="work" width={250} height={250} className="rounded-lg" />
                        <Image src={'/art.avif'} alt="work" width={400} height={400} className="rounded-lg" />
                        <Image src={'/work-2.avif'} alt="work" width={250} height={250} className="rounded-lg" />
                    </div>

                    <div>
                        <h1 className="lg:text-6xl md:text-3xl text-[21px] uppercase font-unbounded font-bold text-center leading-none whitespace-nowrap overflow-hidden">
                            Let’s Build Something <br /> Incredible
                        </h1>
                        <p className='text-center py-4 text-[20px] text-gray-800'>Whether you&apos;re building from scratch, scaling what exists, or transforming legacy tools — we’re ready.</p>
                    </div>

                    <div className='flex items-center justify-center pt-16'>
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
                    {['/3d.jpg', '/integration.jpg', '/phone.avif', '/mac.avif', '/agency-6.webp'].map((src, idx) => (
                        <Image
                            key={idx}
                            src={src}
                            alt="scrolling"
                            width={300}
                            height={300}
                            className="w-[300px] h-[300px] object-cover shrink-0"
                        />
                    ))}
                    {['/agency-5.avif', '/3d-2.jpg', '/phone.avif', '/mac.avif', '/3d-3.jpg'].map((src, idx) => (
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
                <h1 className="font-unbounded font-semibold uppercase md:text-4xl text-2xl leading-relaxed max-w-3xl">
                    Let’s collaborate on scalable technology that drives real business results.
                </h1>
                <div className='flex items-center  pt-10'>
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