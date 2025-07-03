"use client";
import Image from 'next/image';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// const imageData = [
//     {
//         name: 'ALEX JOHNSON',
//         post: 'Chief Executive Officer (CEO)',
//         imageUrl: '/team-man.avif', 
//     },
//     {
//         name: 'JOHN DOE',
//         post: 'Chief Marketing Officer (CMO)',
//         imageUrl: '/team-man.avif', 
//     },
//     {
//         name: 'JANE SMITH',
//         post: 'Chief Financial Officer (CFO)',
//         imageUrl: '/team-man.avif', 
//     },
//     {
//         name: 'PETER JONES',
//         post: 'Head of Sales',
//         imageUrl: '/team-man.avif', 
//     },
//     {
//         name: 'SARAH LEE',
//         post: 'HR Director',
//         imageUrl: '/team-man.avif', 
//     },
// ];

const AboutSectionFour = () => {


    gsap.registerPlugin(ScrollTrigger);

    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".fade-up", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);
    return (
        <div className="lg:px-10 px-3 pt-36 pb-16">


            <section
                ref={containerRef}
                className="px-4 lg:px-16 py-24 text-[#0b0b0b] font-inter bg-white"
            >
                <div className="flex flex-col lg:flex-row gap-10 items-start fade-up">

                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold font-unbounded uppercase">
                            Work Policy
                        </h2>
                        <p className="text-1xl leading-relaxed font-inter">
                            In accomplishing our mission, we focus on our client’s requirements
                            to evolve a                                 functional and economically completed project

                            <span className="font-semibold text-orange-600">
                            </span>
                            .
                        </p>
                        <p className="text-1xl leading-relaxed font-inter">
                            Our company considers ideas from and cooperates with professionals
                            in other fields to ensure the client’s ultimate satisfaction

                            .
                        </p>
                        <p className="text-1xl leading-relaxed">
                            Key personnel  are selected to match the scope and requirements of the project.
                        </p>
                    </div>


                    <div className="lg:w-1/2 w-full grid grid-cols-2 grid-rows-2 gap-4">
                        <div className="row-span-2 col-span-1">
                            <Image
                                src="/men.avif"
                                alt="Team work"
                                width={500}
                                height={600}
                                className="w-full h-64 object-cover rounded-xl"
                            />
                        </div>
                        <div className="row-span-1 col-span-1">
                            <Image
                                src="/men.avif"
                                alt="Collaboration"
                                width={500}
                                height={300}
                                className="w-full h-[150px] object-cover rounded-xl"
                            />
                        </div>
                        <div className="row-span-1 col-span-1">
                            <Image
                                src="/men.avif"
                                alt="Innovation"
                                width={500}
                                height={300}
                                className="w-full h-[200px] object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>


                <div className="pt-36 fade-up">
                    <div className="flex flex-col lg:flex-row items-start gap-10 text-[#0b0b0b]">
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-bold font-unbounded uppercase ">
                                Our Team
                            </h2>
                            <p className="text-lg leading-relaxed ">
                                We invest in{" "}
                                continuous education and reform

                                to stay ahead of industry changes and ensure we deliver{" "}
                                sustainable, future-ready systems
                                that meet our clients&apos; goals.
                            </p>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-gray-100  p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
                                <h3 className="text-xl font-semibold font-unbounded">Well-trained</h3>
                                <p className="text-sm  mt-2">
                                    Our members are equipped with up-to-date skills and proven competence.
                                </p>
                            </div>
                            <div className="bg-gray-100  p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
                                <h3 className="text-xl font-semibold font-unbounded">Dedicated</h3>
                                <p className="text-sm  mt-2">
                                    We’re committed to excellence and delivering with purpose.
                                </p>
                            </div>
                            <div className="bg-gray-100  p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 sm:col-span-2">
                                <h3 className="text-xl font-semibold font-unbounded">
                                    Continuously Developing
                                </h3>
                                <p className="text-sm  mt-2">
                                    We foster a culture of constant learning to adapt and grow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>









            {/* <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 py-44 mb-2">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Our Team</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="flex-1 lg:text-[60px] text-[#0b0b0b] text-5xl uppercase font-unbounded font-bold max-w-2xl">
                    meet the <br /> expert
                </h1>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                {imageData.map((person, index) => (
                    <div
                        key={index}
                        className="relative  bg-white rounded-xl shadow-lg
                       overflow-hidden flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
                    >
                        <Image
                            src={person.imageUrl}
                            alt={person.name} width={1500} height={1500}
                            className=" object-cover"
                        />

                        <div
                            className="absolute bottom-0 left-0 w-full h-full
                         bg-gradient-to-t from-orange-600 via-orange-600/50 to-transparent
                         flex flex-col justify-end items-center p-4 pb-2" 
                        >
                            <p className="text-white text-2xl md:text-[20px] font-unbounded font-bold uppercase mb-1">
                                {person.name}
                            </p>
                            <p className="text-white text-[16px] font-inter">
                                {person.post}
                            </p>
                        </div>
                    </div>
                ))}

                <div
                    className="bg-orange-600 text-white rounded-xl shadow-lg p-6
                     flex flex-col justify-center gap-5 items-center text-center flex-shrink-0
                     transform transition-transform duration-300 hover:scale-105"
                >
                    <div className='flex items-center flex-col gap-2'>
                        <h1 className="text-2xl md:text-[20px]  font-bold font-unbounded uppercase">
                            you can be here
                        </h1>
                        <p className="text-[16px] font-inter leading-relaxed mb-4">
                            We prize inquisitiveness, teamwork, and a solution-oriented mindset. Yes, and caffeine—plenty of caffeine. Become part of a group that values your distinct talents and aids you in realizing your utmost capabilities.
                        </p>
                    </div>
                    <h2 className="text-2xl md:text-[20px] font-unbounded font-bold uppercase">
                        join our team
                    </h2>
                </div>
            </div> */}
        </div>
    );
};

export default AboutSectionFour;
