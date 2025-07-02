"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        title: "Remittance System",
        description:
            "Multi-channel remittance solutions with compliance, audit trails, and global reach.",
        image: "/men.avif",
    },
    {
        title: "Payment Gateway System",
        description:
            "Seamless integration for local and international payments (cards, wallets, USSD, etc.).",
        image: "/table.avif",
    },
    {
        title: "Banking Software Solution",
        description:
            "Modular digital banking systems designed for scalability and regulatory alignment.",
        image: "/table.avif",
    },
    {
        title: "Point of Sales (POS) System",
        description:
            "Hardware and cloud-based POS systems for fast, reliable retail and merchant transactions.",
        image: "/table.avif",
    },
];

const FinancialInfra = () => {
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
        <div className="lg:px-10 px-3 pt-36 pb-20 text-[#0b0b0b]">
            <div>
                <div className="flex items-center gap-3">
                    <h1 className="lg:text-[40px] font-bold uppercase text-3xl font-unbounded">
                        Financial Services
                    </h1>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
            </div>

            <div className="space-y-20 pt-28 max-w-4xl mx-auto">
                {data.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) sectionRefs.current[index] = el;
                        }} className={`flex flex-col-reverse ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                            } lg:items-center gap-10`}
                    >
                       
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

                        {/* IMAGE */}
                        <div className="lg:w-1/2 w-full lg:inline hidden">
                            <div className="overflow-hidden rounded-lg group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={400}
                                    className="w-full h-[250px] lg:h-[200px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FinancialInfra;
