'use client'

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"

const HomeSectionTwo = () => {
    const marqueeRef = useRef(null)

    const clientLogos = Array(10).fill("/sayswitch-no-bg.png")
    const logos = [...clientLogos, ...clientLogos]

    useEffect(() => {
        const ctx = gsap.context(() => {
            const marquee = marqueeRef.current

            gsap.to(marquee, {
                xPercent: -50,
                duration: 6,
                ease: "linear",
                repeat: -1,
            })
        }, marqueeRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="lg:px-10 px-3 py-48">
            <div className="overflow-hidden w-[180px] h-6 pb-24">
                <div
                    ref={marqueeRef}
                    className="flex whitespace-nowrap w-max"
                    style={{ willChange: 'transform' }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-3">
                            <div className="flex items-center gap-2 justify-start">
                                <p className="text-lg capitalize font-semibold">About us</p>
                                <span className="w-2 h-2 bg-orange-600 rounded-full inline-block"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-20 gap-4">
                <div className="w-full lg:w-96">
                    <Image
                        src={'/agency-9.jpg'}
                        alt="man"
                        width={1000}
                        height={600}
                        className="rounded-lg lg:w-[600px] w-full lg:h-[400px] h-[300px] object-cover"
                    />
                </div>

                <div className="max-w-[750px] mt-4 lg:mt-0 lg:inline hidden space-y-10">
                    <p className="md:text-3xl text-2xl font-medium leading-loose">
                        We are a software innovation agency with a mission to empower organizations through reliable, cutting-edge digital solutions. With a team of passionate engineers, designers, and strategists. Inclusive Village helps startups, enterprises, and institutions across Africa and beyond achieve their business goals.
                    </p>

                    <div className="flex items-center justify-between pt-5">
                        <div className="flex flex-col">
                            <h1 className="text-orange-600 text-5xl font-extrabold">200 +</h1>
                            <p className="text-gray-700 text-[18px]">Projects delivered</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-orange-600 text-5xl font-extrabold">99%</h1>
                            <p className="text-gray-700 text-[18px]">Client Retention</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-orange-600 text-5xl font-extrabold">12 +</h1>
                            <p className="text-gray-700 text-[18px]">Industry Verticals</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden pt-20 bg-white">
                <div className="whitespace-nowrap animate-slide flex items-center gap-20">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <span className="text-gray-400 font-bold text-1xl">Sayswitch</span>
                            <div className="w-10 h-10">
                                <Image
                                    src={logo}
                                    alt={`Client ${index}`}
                                    width={70}
                                    height={70}
                                    className="filter grayscale brightness-[1.8]"
                                />
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </div>
    )
}

export default HomeSectionTwo
