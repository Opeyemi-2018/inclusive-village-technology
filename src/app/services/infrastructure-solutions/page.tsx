"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        title: "Cloud Services (DevOps)",
        description: "CI/CD pipelines, containerization, infrastructure as code, cloud cost optimization, and automated deployments.",
        image: "/men.avif",
    },

];

const Integration = () => {
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        sectionRefs.current.forEach((ref, index) => {
            if (ref) {
                gsap.from(ref, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ref,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                    delay: index * 0.1,
                });
            }
        });
    }, []);

    return (
        <div className="lg:px-10 px-3 pt-36 pb-12 text-[#0b0b0b]">
            <div className="space-y-4">
                <h1 className="lg:text-[40px] font-bold uppercase text-3xl font-unbounded">
                    Infrastructure Solutions
                </h1>
                <p className="font-inter text-[20px]">We help you build cloud-native systems and optimize infrastructure for speed, reliability, and scale.</p>
            </div>

            <div className="space-y-36 pt-28 max-w-4xl mx-auto">
                {data.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) sectionRefs.current[index] = el;
                        }}
                        className={`flex flex-col-reverse ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                            } lg:items-center gap-10`}
                    >



                        <div className="lg:w-1/2 w-full">
                            {index === 0 ? (
                                <div className="grid grid-cols-2 grid-rows-2 gap-3">

                                    <div className="row-span-1 col-span-1">
                                        <Image
                                            src={item.image}
                                            alt={`${item.title} 1`}
                                            width={500}
                                            height={400}
                                            className="w-full h-[160px] object-cover rounded-lg"
                                        />
                                    </div>

                                    <div className="row-span-1 col-span-1">
                                        <Image
                                            src={item.image}
                                            alt={`${item.title} 2`}
                                            width={500}
                                            height={400}
                                            className="w-full h-[100px] object-cover rounded-lg"
                                        />
                                    </div>

                                    <div className="row-span-1 col-span-1">
                                        <Image
                                            src={item.image}
                                            alt={`${item.title} 3`}
                                            width={500}
                                            height={400}
                                            className="w-full h-[100px] object-cover rounded-lg"
                                        />
                                    </div>

                                    <div className="row-span-1 col-span-1">
                                        <Image
                                            src={item.image}
                                            alt={`${item.title} 4`}
                                            width={500}
                                            height={400}
                                            className="w-full h-[200px] object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="overflow-hidden rounded-lg group">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={400}
                                        className="w-full h-[250px] lg:h-[200px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="lg:w-1/2 w-full space-y-4 text-left">
                            <div>
                                <h1 className="lg:text-[27px] text-2xl font-bold uppercase font-unbounded">
                                    {item.title}
                                </h1>
                                <div className="h-1 w-16 bg-orange-600 mt-2 rounded"></div>
                            </div>
                            <p className="text-[#0b0b0b] font-inter text-[18px]">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Integration;
