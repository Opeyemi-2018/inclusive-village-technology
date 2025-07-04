'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import LinkWithArrow from "../contactButton"
import gsap from "gsap"

const recentWorks = [
    {
        id: 3,
        name: "AfriPay+",
        type: "Gateway System",
        info: "A fast, secure, and developer-friendly payment gateway.",
        image: "/afripay.png"
    },
    {
        id: 4,
        name: "Inclusive Remittance",
        info: "A compliant, multi-channel remittance platform .",
        type: "Gateway System",
        image: "/remittance.webp"
    },
    {
        id: 5,
        name: "Afripay Learn",
        info: "A full-featured learning management system for schools.",
        type: "Gateway System",
        image: "/afripay-learn.png"
    },
    {
        id: 6,
        name: "Eazybiller",
        info: "An invoicing and billing automation solution that simplifies finances for SMEs.",
        type: "Gateway System",
        image: "/easybiller.png"
    }
]

const HomeSectionThree = () => {
    const marqueeRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                duration: 6,
                ease: "linear",
                repeat: -1,
            })
        }, marqueeRef)

        return () => ctx.revert()
    }, [])


    return (
        <div className="max-w-[80rem] mx-auto lg:px-10 px-3">
            {/* 🔁 Scrolling Recent Works */}
            <div className="overflow-hidden w-[180px] h-6">
                <div
                    ref={marqueeRef}
                    className="flex whitespace-nowrap w-max"
                    style={{ willChange: 'transform' }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center gap-2.5 mr-3">
                            <p className="text-lg capitalize font-medium">Recent Works</p>
                            <span className="w-2 h-2 bg-orange-600 rounded-full inline-block"></span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-end items-start gap-6 lg:mb-8 mb-2">
                <h1 className="md:text-7xl md:w-auto w-[50px] text-4xl font-bold mb-20 flex lg:justify-end font-unbounded uppercase">
                    Recent Work
                </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {recentWorks.map(({ id, name, type, info, image }) => (
                    <div key={id} className="space-y-6 font-inter">
                        <div className="w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden group">
                            <Image
                                src={image}
                                alt={name}
                                fill
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <p className="capitalize text-[#0b0b0b] lg:text-3xl font-medium tracking-tight">{name}</p>
                                <p className="text-[#0b0b0bd7] text-[16px] whitespace-nowrap">{type}</p>
                            </div>
                            <p className="text-[#0b0b0b] text-[16px] capitalize max-w-md">{info}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center pt-20">
                <LinkWithArrow
                    href="/contact"
                    label="view more work"
                    underlineColor="bg-black"
                    iconColor="text-orange-600"
                />
            </div>
        </div>
    )
}

export default HomeSectionThree
