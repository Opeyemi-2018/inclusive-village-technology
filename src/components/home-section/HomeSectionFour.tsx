'use client';

import gsap from "gsap";
import { useState, useEffect, useRef } from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

type Service = {
    name: string;
    description: string;
};

const services: Service[] = [
    { name: 'Strategy', description: 'Business & Tech Consulting • Roadmapping • System Architecture' },
    { name: 'UI/UX Design', description: 'Wireframes • Prototyping • Interaction Design • User Research.' },
    { name: 'Web Development', description: 'Corporate Websites • SaaS Platforms • CMS.' },
    { name: 'Mobile App Development', description: 'Cross-Platform (Flutter, React Native) • Native iOS & Android.' },
    { name: 'Enterprise Software Development', description: 'Custom Software • ERP Solutions • Internal Tools.' },
    { name: 'Cloud & DevOps', description: 'Infrastructure Setup • CI/CD Pipelines • AWS, Azure, GCP.' },
    { name: 'Fintech Solutions', description: 'Digital Wallets • Payment Gateways • Core Banking Systems.' },
    { name: 'Cybersecurity', description: 'Risk Assessment • Data Protection • Compliance & Governance.' },
];

const HomeSectionFour = () => {
    const marqueeRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                duration: 6,
                ease: "linear",
                repeat: -1,
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="lg:px-10 px-3 pt-40 md:pb-28 bg-white">
            {/* Marquee */}
            <div className="overflow-hidden w-[200px] h-6 relative mb-6">
                <div
                    ref={marqueeRef}
                    className="flex whitespace-nowrap w-max"
                    style={{ willChange: 'transform' }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3 pr-10">
                            <p className="text-lg font-semibold">Our Services</p>
                            <span className="w-4 h-4 bg-orange-600 rounded-full inline-block"></span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Heading */}
            <div className="flex flex-col lg:flex-row md:justify-end items-start lg:items-center gap-6 lg:mb-12 mb-2">
                <h1 className="flex-1 lg:text-7xl text-4xl uppercase font-unbounded font-bold max-w-2xl">
                    top-notch <br /> services
                </h1>
            </div>

            {/* Services */}
            <div className="pt-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`transition-all duration-300 cursor-pointer md:py-16 py-10 
                            ${hoveredIndex === index ? 'md:bg-orange-600 px-3 rounded-lg md:text-white' : ''}
                            md:border-b md:border-gray-200
                            md:hover:bg-orange-600 md:hover:text-white
                            bg-white`}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <h2 className="text-3xl md:text-4xl font-medium">{service.name}</h2>

                            <AnimatePresence>
                                {(hoveredIndex === index || isMobile) && (
                                    <motion.p
                                        className="flex-1 text-left md:text-center text-2xl"
                                        initial={{ y: 40 }}
                                        animate={{ y: 0 }}
                                        exit={{ y: 40 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {service.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>

                            {!isMobile && (
                                <div className="hidden md:block">
                                    {hoveredIndex === index ? <HiOutlineMinus size={30} /> : <FiPlus size={30} />}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HomeSectionFour;
