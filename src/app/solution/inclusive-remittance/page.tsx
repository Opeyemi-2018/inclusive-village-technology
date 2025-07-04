"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineMinus } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const mainInclusiveData = [
    {
        title: "Business Challenges We Solve",
        description: [
            "Receiving orders via phone, email, and fragmented channels.",
            "Inability to handle bulk orders during peak seasons.",
            "Risk of unprocessed off-hours orders.",
            "Infrastructure strain during high traffic.",
            "Loss of transactions due to market volatility.",
            "Delays in booking and processing orders immediately.",
            "Inclusive Remittance tackles these issues, allowing your business to operate securely, efficiently, and profitably 24/7."
        ],
        image: "/remittance.jpg",
    },
    {
        title: "The Solution",
        description: [
            "Built on advanced, modern technology.",
            "Fully customizable to fit your business model.",
            "Ready for online and mobile use — anytime, anywhere.",
            "Integrated with auto funds-in, real-time FX, and payment gateways.",
            "Equipped with back-office tools for complete customer and order management.",
            "Designed for 24/7 uptime and low-risk, high-volume handling."
        ],
        image: "/remittance.jpg",
    },
    { // This is now logically the THIRD main item, even if "Key Features" is displayed before it.
        title: "Why Choose Inclusive?",
        description: `
- Trusted by growing remittance businesses
- Built to handle high volumes and off-hour demand
- Fully customizable to your market and region
- Ready to integrate, expand, and scale with your growth
        `,
        image: "/remittance.jpg",
    },
];

const keyFeaturesData = [
    { name: 'Compliance (KYC/AML)', description: 'KYC, AML safeguards (blacklisting, risk tagging), and full audit trail for compliance.' },
    { name: 'Enterprise-Grade Security', description: 'Role-based access, end-to-end encryption, and fraud prevention measures.' },
    { name: 'FX Rates & Charges', description: 'Real-time/custom FX rates, dynamic control, and customizable transaction fees.' },
    { name: 'Multi-Currency Support', description: 'Manage multiple currencies with admin controls to enable/disable easily.' },
    { name: 'Order & User Management', description: 'Quick setup, clean transaction history, payment gateway integrations, and real-time notifications.' },
    { name: 'Real-Time Profit Monitoring', description: 'Track profits per transaction, daily, or across channels for full business visibility.' },
    { name: 'Modern User Experience', description: 'Responsive UI for web, tablet, and mobile with multilingual interface options.' },
    { name: 'Smart Reporting & Analytics', description: 'Generate filtered reports (PDF, CSV), visual dashboards, and transaction insights.' },
];

const Inclusive = () => {
    const sectionRefs = useRef<HTMLDivElement[]>([]);
    const [hoveredFeatureIndex, setHoveredFeatureIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

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

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="lg:px-10 px-3 pt-36 pb-32 text-[#0b0b0b]">
            <div className="space-y-5">
                <h1 className="lg:text-[40px] text-3xl font-bold max-w-4xl uppercase font-unbounded">
                    Inclusive Remittance Management System (MTS)
                </h1>
                <p className="font-inter text-[20px]">
                    Tailored B2B money transfer for startups, SMEs, and providers. Built for compliance, automation, and growth.
                </p>
            </div>

            <div className="space-y-36 pt-28 ">
                {/* Render "Business Challenges We Solve" and "The Solution" */}
                {mainInclusiveData.slice(0, 2).map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) sectionRefs.current[index] = el;
                        }}
                        className={`flex flex-col-reverse ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                            } lg:items-center gap-10`}
                    >
                        <div className="lg:w-1/2 w-full space-y-4 text-left">
                            <div>
                                <h2 className="lg:text-[27px] text-2xl font-bold uppercase font-unbounded">
                                    {item.title}
                                </h2>
                                <div className="h-1 w-16 bg-orange-600 mt-2 rounded"></div>
                            </div>
                            {Array.isArray(item.description) ? (
                                <ul className="text-[#0b0b0b] font-inter text-[18px] space-y-2">
                                    {item.title === "Business Challenges We Solve" ? (
                                        item.description.map((line, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="w-2 h-2 mt-2 bg-orange-600 rounded-full flex-shrink-0"></span>
                                                <span>{line}</span>
                                            </li>
                                        ))
                                    ) : (
                                        item.description.map((line, i) => (
                                            <li key={i} className="flex items-start">
                                                <span>{line}</span>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            ) : (
                                <p className="text-[#0b0b0b] font-inter text-[18px] whitespace-pre-line">
                                    {item.description}
                                </p>
                            )}
                        </div>

                        <div className="lg:w-1/2 w-full lg:inline hidden">
                            <div className="overflow-hidden rounded-lg group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={500}
                                    className="w-full h-[350px] lg:h-[350px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                {/* --- Key Features Section --- */}
                <div className="pt-28"> {/* Maintain your existing padding */}
                    <h2 className="lg:text-[40px] text-3xl font-bold uppercase font-unbounded text-center mb-16">
                        Key Features
                    </h2>
                    <div className="pt-10">
                        {keyFeaturesData.map((feature, index) => (
                            <motion.div
                                key={index}
                                onMouseEnter={() => setHoveredFeatureIndex(index)}
                                onMouseLeave={() => setHoveredFeatureIndex(null)}
                                className={`transition-all duration-300 cursor-pointer md:py-16 py-10
                                    ${hoveredFeatureIndex === index ? 'md:bg-orange-600 px-12 rounded-2xl md:text-white' : ''}
                                    md:border-b md:border-gray-200
                                    md:hover:bg-orange-600 md:hover:text-white
                                    bg-white`}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <h2 className="text-3xl md:text-4xl font-medium">{feature.name}</h2>

                                    <AnimatePresence>
                                        {(hoveredFeatureIndex === index || isMobile) && (
                                            <motion.p
                                                className="flex-1 text-left md:max-w-[450px] text-2xl"
                                                initial={{ y: 40 }}
                                                animate={{ y: 0 }}
                                                exit={{ y: 40 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {feature.description}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>

                                    {!isMobile && (
                                        <div className="hidden md:block">
                                            {hoveredFeatureIndex === index ? <HiOutlineMinus size={30} /> : <FiPlus size={30} />}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {mainInclusiveData.slice(2, 3).map((item, index) => ( 
                     <div
                        key={index + 2} 
                        ref={(el) => {
                            if (el) sectionRefs.current[index + 2] = el;
                        }}
                        className={`flex flex-col-reverse ${ (index + 2) % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row" // Adjust index for conditional class
                            } lg:items-center gap-10`}
                    >
                        <div className="lg:w-1/2 w-full space-y-4 text-left">
                            <div>
                                <h2 className="lg:text-[27px] text-2xl font-bold uppercase font-unbounded">
                                    {item.title}
                                </h2>
                                <div className="h-1 w-16 bg-orange-600 mt-2 rounded"></div>
                            </div>
                            {Array.isArray(item.description) ? (
                                <ul className="text-[#0b0b0b] font-inter text-[18px] space-y-2">
                                    {item.title === "Business Challenges We Solve" ? (
                                        item.description.map((line, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="w-2 h-2 mt-2 bg-orange-600 rounded-full flex-shrink-0"></span>
                                                <span>{line}</span>
                                            </li>
                                        ))
                                    ) : (
                                        item.description.map((line, i) => (
                                            <li key={i} className="flex items-start">
                                                <span>{line}</span>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            ) : (
                                <p className="text-[#0b0b0b] font-inter text-[18px] whitespace-pre-line">
                                    {item.description}
                                </p>
                            )}
                        </div>

                        <div className="lg:w-1/2 w-full lg:inline hidden">
                            <div className="overflow-hidden rounded-lg group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={500}
                                    className="w-full h-[350px] lg:h-[350px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Inclusive;