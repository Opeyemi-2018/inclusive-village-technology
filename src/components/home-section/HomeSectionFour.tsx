'use client';

import { useState, useEffect } from 'react';
import { HiOutlineMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

type Service = {
    name: string;
    description: string;
};

const services: Service[] = [
    {
        name: 'Branding',
        description: 'We create strong brand identities that are memorable and effective.',
    },
    {
        name: 'UI/UX Design',
        description: 'Designing intuitive interfaces and seamless user experiences.',
    },
    {
        name: 'Web Development',
        description: 'Building responsive and scalable websites and web apps.',
    },
];

const HomeSectionFour = () => {
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

    return (
        <div className="lg:px-10 px-3 py-40 bg-white">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:mb-12 mb-2">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Our Services</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="flex-1 lg:text-7xl text-5xl capitalize font-bold max-w-2xl">
                    top-notch <br /> services
                </h1>
            </div>

            <div className="pt-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-300 cursor-pointer px-4 py-10 
                        ${hoveredIndex === index ? 'md:bg-orange-600 rounded-lg md:text-white' : ''}
                        ${hoveredIndex === index ? 'md:rounded-lg' : ''}
                        md:border-b md:border-gray-200
                        md:hover:bg-orange-600 md:hover:text-white
                        bg-white
                        `}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <h2 className="text-3xl md:text-4xl font-medium md:w-1/3">{service.name}</h2>

                            {(hoveredIndex === index || isMobile) && (
                                <p className="text-base flex-1 text-left md:text-center text-[20px]">
                                    {service.description}
                                </p>
                            )}

                            {!isMobile && (
                                <div className="hidden md:block">
                                    {hoveredIndex === index ? <HiOutlineMinus size={30} /> : <FiPlus size={30} />}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeSectionFour;
