'use client'

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomeSectionTwo = () => {
    // Ref for the "About us" marquee animation
    const marqueeRef = useRef<HTMLDivElement>(null);

    // Ref for the section containing the counting numbers, used as a ScrollTrigger
    const numbersSectionRef = useRef<HTMLDivElement>(null);

    // Refs for each individual counting number element
    const projectsCountRef = useRef<HTMLHeadingElement>(null);
    const clientRetentionCountRef = useRef<HTMLHeadingElement>(null);
    const industryVerticalsCountRef = useRef<HTMLHeadingElement>(null);

    // State to track if the counting animation has been triggered by scrolling
    const [animationTriggered, setAnimationTriggered] = useState(false);

    // Prepare client logos for the second marquee
    const clientLogos = Array(10).fill("/sayswitch-no-bg.png");
    const logos = [...clientLogos, ...clientLogos]; // Duplicate to ensure continuous loop

    // Effect for the "About us" marquee animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const marquee = marqueeRef.current;

            gsap.to(marquee, {
                xPercent: -50, // Move 50% to the left to loop seamlessly
                duration: 6, // Animation duration
                ease: "linear", // Constant speed
                repeat: -1, // Repeat indefinitely
            });
        }, marqueeRef); // Scope the GSAP context to marqueeRef

        // Cleanup function for GSAP context
        return () => ctx.revert();
    }, []); // Run once on component mount

    // Effect to set up the ScrollTrigger for the numbers section
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (numbersSectionRef.current) {
                ScrollTrigger.create({
                    trigger: numbersSectionRef.current,
                    start: "top 80%", // Animation starts when the top of the section is 80% down from the viewport top
                    once: true, // Trigger the animation only once
                    onEnter: () => setAnimationTriggered(true), // Set state to true when the section enters view
                });
            }
        }, numbersSectionRef); // Scope the GSAP context to numbersSectionRef

        // Cleanup function for ScrollTrigger
        return () => ctx.revert();
    }, []); // Run once on component mount

    // Effect for the counting animation, dependent on 'animationTriggered' state
    useEffect(() => {
        if (animationTriggered) {
            // Define an object to hold the animated values
            const targets = {
                projects: 0,
                clientRetention: 0,
                industryVerticals: 0,
            };

            // Animate 'Projects delivered'
            gsap.to(targets, {
                projects: 200,
                duration: 2,
                ease: "power1.out",
                onUpdate: () => {
                    // Update the innerText of the corresponding H1 element
                    if (projectsCountRef.current) {
                        projectsCountRef.current.innerText = Math.round(targets.projects) + '+';
                    }
                }
            });

            // Animate 'Client Retention' with a slight delay
            gsap.to(targets, {
                clientRetention: 99,
                duration: 2,
                ease: "power1.out",
                onUpdate: () => {
                    if (clientRetentionCountRef.current) {
                        clientRetentionCountRef.current.innerText = Math.round(targets.clientRetention) + '%';
                    }
                },
                delay: 0.2
            });

            // Animate 'Industry Verticals' with a further delay
            gsap.to(targets, {
                industryVerticals: 12,
                duration: 2,
                ease: "power1.out",
                onUpdate: () => {
                    if (industryVerticalsCountRef.current) {
                        industryVerticalsCountRef.current.innerText = Math.round(targets.industryVerticals) + '+';
                    }
                },
                delay: 0.4
            });
        }
    }, [animationTriggered]); // This effect runs only when 'animationTriggered' changes to true

    return (
        <div className="lg:px-10 px-3 py-40">
            {/* "About us" Marquee Section */}
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

            <div className="w-full max-w-[80rem] mx-auto flex flex-wrap lg:flex-nowrap items-center lg:gap-36 gap-20">
                {/* Image Column */}
                <div className="w-full lg:w-[40%] h-[30rem] overflow-hidden rounded-2xl">
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

                <div className="w-full lg:w-[60%]" ref={numbersSectionRef}>
                    <p className="text-2xl lg:text-4xl font-medium font-inter">
                        We are a software agency empowering organizations with innovative digital solutions. Our passionate team helps clients achieve their goals across Africa and beyond.
                    </p>

                    <div className="flex items-center md:text-start text-center flex-col md:gap-0 gap-20 md:flex-row justify-between mt-20">
                        <div className="flex flex-col">
                            <h1 ref={projectsCountRef} className="text-orange-600 tracking-tight text-4xl font-bold font-unbounded">0+</h1>
                            <p className="text-gray-700">Projects delivered</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 ref={clientRetentionCountRef} className="text-orange-600 tracking-tight text-4xl font-bold font-unbounded">0%</h1>
                            <p className="text-gray-700">Client Retention</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 ref={industryVerticalsCountRef} className="text-orange-600 tracking-tight text-4xl font-bold font-unbounded">0+</h1>
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