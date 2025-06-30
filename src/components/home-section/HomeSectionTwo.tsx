'use client'

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"

const HomeSectionTwo = () => {
    const marqueeRef = useRef(null)

    const clientLogos = Array(10).fill("/sayswitch.jpg")
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
            <div className="overflow-hidden w-[180px] h-6 relative mb-6 mx-auto">
                <div
                    ref={marqueeRef}
                    className="flex whitespace-nowrap w-max"
                    style={{ willChange: 'transform' }}
                >
                    {/* Duplicate content for seamless scroll */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-3">
                            <div className="flex items-center gap-3 pr-8">
                                <p className="text-lg font-semibold">About us</p>
                                <span className="w-4 h-4 bg-orange-600 rounded-full inline-block"></span>
                            </div>
                            <div className="flex items-center gap-3 pr-8">
                                <p className="text-lg font-semibold">About us</p>
                                <span className="w-4 h-4 bg-orange-600 rounded-full inline-block"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center md:gap-4 gap-7 lg:mb-36 mb-16">
                <h1 className="lg:text-7xl text-5xl uppercase text-center font-unbounded font-bold">
                    Who We Are
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-20 gap-4">
                <div className="w-full lg:w-auto">
                    <Image
                        src={'/hero-men.jpg'}
                        alt="man"
                        width={1000}
                        height={600}
                        className="rounded-lg lg:w-[600px] w-full lg:h-[400px] h-[300px] object-cover"
                    />
                </div>

                <div className="max-w-[750px] mt-4 lg:mt-0 lg:inline hidden space-y-10">
                    <p className="md:text-3xl text-2xl font-semibold leading-relaxed">
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
                <div className="whitespace-nowrap animate-slide">
                    {logos.map((logo, index) => (
                        <Image
                            key={index}
                            src={logo}
                            alt={`Client ${index}`}
                            width={100}
                            height={100}
                            className="inline-block mx-6 grayscale hover:grayscale-0 transition duration-300"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeSectionTwo
