'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"
import LinkWithArrow from "../contactButton"

const HomeSectionOne = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".animate-up", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
            })

            
            gsap.to("#flipInner", {
                rotateY: "+=360",
                duration: 6,
                repeat: -1,
                ease: "linear",
                transformOrigin: "center center",
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={sectionRef}>
            <div className="lg:px-10 px-3 lg:pt-0 pt-2 flex flex-col space-y-12 relative">
                <div className="flex flex-col items-center justify-center w-full font-bold font-unbounded animate-up">
                    <h1 className="w-full text-[17vw] capitalize text-center leading-none whitespace-nowrap bg-gradient-to-r from-blue-800 to-orange-600 bg-clip-text text-transparent">
                        inclusive
                    </h1>
                    <h2 className="lg:text-3xl text-1xl uppercase">village technology</h2>
                </div>

                <div className="flex justify-center relative lg:static animate-up">
                    <div
                        className="w-56 h-56 lg:w-80 lg:h-96 relative lg:absolute lg:inset-1/2 lg:-translate-x-1/2 lg:-translate-y-[60%] perspective z-10"
                        id="flipCard"
                    >
                        <div className="w-full h-full preserve-3d" id="flipInner">
                            {/* Front Image */}
                            <div className="absolute w-full h-full backface-hidden">
                                <Image
                                    src="/work-2.avif"
                                    fill
                                    alt="Front Image"
                                    className="object-cover"
                                />
                            </div>
                            {/* Back Image */}
                            <div className="absolute w-full h-full backface-hidden rotate-y-180">
                                <Image
                                    src="/work-1.avif"
                                    fill
                                    alt="Back Image"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex md:items-center md:gap-0 gap-14 justify-between md:flex-row flex-col animate-up">
                    <p className="max-w-[500px] text-[19px] text-gray-800 leading-relaxed">
                        At Inclusive Village, we’re more than a tech company—we’re your strategic partner in digital transformation. From fintech to education, our tailored software solutions are crafted to scale, secure, and simplify how you do business.
                    </p>
                    <div>
                        <LinkWithArrow
                            href="/contact"
                            label="Let's Talk"
                            underlineColor="bg-black"
                            iconColor="text-orange-600"
                        />
                    </div>
                </div>
            </div>

            {/* Banner Image */}
            <div className="pt-16 animate-up">
                <Image
                    src="/banner.jpg"
                    width={1000}
                    height={1000}
                    alt="hero image"
                    className="w-full object-cover md:h-auto h-72 rounded-3xl"
                />
            </div>
        </div>
    )
}

export default HomeSectionOne
