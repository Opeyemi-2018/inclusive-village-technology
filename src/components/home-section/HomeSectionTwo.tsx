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
        <div className="lg:px-10 px-3 py-40">
            <div className="overflow-hidden w-[180px] h-6 pb-20">
                <div
                    ref={marqueeRef}
                    className="flex whitespace-nowrap w-max"
                    style={{ willChange: 'transform' }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center gap-2.5 mr-3">
                            <p className="text-lg capitalize font-medium">About us</p>
                            <span className="w-2 h-2 bg-orange-600 rounded-full inline-block"></span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-[80rem mx-auto flex items-center gap-36">
                <div className="w-[40%] h-[30rem] overflow-hidden rounded-2xl">
                    <Image
                        src={'/agency-9.jpg'}
                        alt="man"
                        width={1000}
                        height={600}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                </div>

                <div className="w-[60%]">
                    <p className="text-2xl lg:text-4xl font-medium font-inter">
                        We are a software agency empowering organizations with innovative digital solutions. Our passionate team helps clients achieve their goals across Africa and beyond.
                    </p>

                    <div className="flex items-center justify-between mt-20">
                        <div className="flex flex-col">
                            <h1 className="text-orange-600 tracking-tight text-4xl font-bold font-unbounded">200+</h1>
                            <p className="text-gray-700">Projects delivered</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-orange-600 tracking-tight text-4xl font-bold font-unbounded">99%</h1>
                            <p className="text-gray-700">Client Retention</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-orange-600 tracking-tight text-4xl font-bold font-unbounded">12+</h1>
                            <p className="text-gray-700">Industry Verticals</p>
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
