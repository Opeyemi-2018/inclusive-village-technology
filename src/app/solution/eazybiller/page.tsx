'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HiOutlineMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Accessibilities = [
    {
        title: "Web Platform",
        description:
            "Access full functionality via any modern browser with a responsive dashboard for real-time financial control."
    },
    {
        title: "Mobile Apps (iOS & Android)",
        description:
            "Manage operations on the go—issue invoices, accept payments, get alerts."
    },
    {
        title: "Admin Control Panel",
        description:
            "Central hub for monitoring financial data, managing users, and enforcing compliance."
    },
    {
        title: "RESTful API",
        description:
            "Connect seamlessly to ERPs, CRMs, and custom systems for automation and workflow integration."
    },

];

const Technologies =
    [
        {
            number: 1,
            title: "Flutter ",
            description: 'for unified cross-platform development',
        },
        {
            number: 2,
            title: "Laravel (PHP) ",
            description: ' for secure, scalable backend services',
        },
        {
            number: 3,
            title: "Native Modules ",
            description: 'for mobile-specific optimization',
        },
        {
            number: 4,
            title: "CDN & Modular Architecture ",
            description: ' for ultra-fast performance and stability',
        },
    ];

const securityAndCompliance = [
    {
        title: "Security & Compliance",
        description: "AfriPay+ is built with enterprise-grade protection in mind:",
        features: [
            "PCI-DSS Compliant",
            "Data Encryption at Rest and in Transit",
            "Two-Factor Authentication (2FA)",
            "Fraud Detection & Prevention Tools"
        ]
    }
];


const Features = [
    {
        description: " Invoicing & Billing",
    },
    {
        description: "Payments & Collections",
    },
    {
        description: "Transaction & Fund Management",
    },
    {
        description: "Cross-Border Capabilities",
    },
];

const EazyBiller = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [hoveredFeatureIndex, setHoveredFeatureIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const marquee = marqueeRef.current;

            gsap.to(marquee, {
                xPercent: -50,
                duration: 6,
                ease: "linear",
                repeat: -1,
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, []);

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
            })
        }, marqueeRef)

        return () => ctx.revert()
    }, [])




    return (
        <div className="  text-[#0b0b0b] font-inter">
            <div
                className="relative bg-center bg-cover bg-no-repeat flex flex-col gap-3 items-center justify-center text-center h-[80vh] md:h-screen "
                style={{
                    backgroundImage: `url('/biller-1.jpg')`,
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                }}
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white"></div>

                <div className="overflow-hidden w-[180px] h-6">
                    <div
                        ref={marqueeRef}
                        className="flex whitespace-nowrap w-max"
                        style={{ willChange: 'transform' }}
                    >
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex items-center gap-2.5 mr-3">
                                <p className="text-lg capitalize font-medium">Eazybiller</p>
                                <span className="w-2 h-2 bg-orange-600 rounded-full inline-block"></span>
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className="md:text-[34px] max-w-3xl mx-auto text-4xl font-bold font-unbounded uppercase text-black  leading-snug z-10">
                    Eazybiller (Invoicing)
                </h1>
            </div>


            <div className="space-y-40 lg:px-10 px-3  pt-24">
                <div className=" w-full max-w-[80rem]  mx-auto flex flex-wrap lg:flex-nowrap  lg:gap-32 gap-20">
                    <div className="w-full lg:w-[55%]  space-y-7" >
                        <div>
                            <h1 className="text-2xl lg:text-[27px] uppercase font-unbounded font-bold">Eazy Biller — Complete Financial Operations Suite for Modern Businesses</h1>
                            <div className="h-1 w-16 bg-orange-600 mt-2 rounded"></div>
                        </div>
                        <p className="text-[18px] ">
                            Eazy Biller is a next-generation, all-in-one financial management platform that transforms how businesses, freelancers, and enterprises handle invoicing, payment collection, and financial automation.
                            From sleek invoice creation to global payment integration, Eazy Biller empowers your organization to simplify complex workflows, improve cash flow, and deliver a modern billing experience—securely and at scale.</p>
                        {/* <p className="text-[18px] hidden lg:inline">Inclusive Banking Software Solution is a truly digital core banking platform built on modern microservice architecture. Designed in-house by Inclusive Village, it helps financial institutions break free from rigid legacy systems and embrace a fast, secure, API-ready future.</p> */}
                    </div>

                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image
                            src="/biller-2.jpg"
                            alt="banking"
                            width={600}
                            height={600}
                            className="rounded-2xl object-cover h-80 w-full"
                        />
                    </div>

                </div>


                <div className="">
                    <div className="w-full flex justify-end">
                        <h1 className="md:text-5xl text-3xl max-w-4xl font-bold mb-20 font-unbounded uppercase text-left">
                            Multi-Platform Accessibility
                        </h1>
                    </div>
                    {Accessibilities.map((feature, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredFeatureIndex(index)}
                            onMouseLeave={() => setHoveredFeatureIndex(null)}
                            className={`transition-all duration-300 cursor-pointer py-10 text-[#0b0b0b]
                                    ${hoveredFeatureIndex === index ? 'md:bg-orange-600 px-8 rounded-2xl ' : ''}
                                    md:border-b md:border-gray-200
                                    md:hover:bg-orange-600 
                                    bg-white`}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <h2 className="text-3xl md:text-4xl font-medium md:max-w-[30rem]">{feature.title}</h2>

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


                <div className="">
                    <div className="w-full flex justify-end">
                        <h1 className="md:text-5xl text-3xl font-bold mb-20 font-unbounded uppercase text-right">
                            Powered by Leading Technologies
                        </h1>
                    </div>

                    <div className="flex flex-col items-center gap-10 pb-6">
                        {Technologies.map((step) => (
                            <div
                                key={step.number}
                                className="bg-gray-200 text-black rounded-2xl p-7 flex flex-col md:gap-8 gap-6 max-w-md w-full"
                            >
                                <h2 className="text-7xl mb-4 text-orange-600 font-bold font-unbounded">
                                    {step.number}
                                </h2>
                                <h3 className="text-3xl md:text-4xl uppercase font-bold font-unbounded leading-tight mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-[22px] font-semibold text-gray-500 mb-10">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <section className="  bg-white">
                    <h2 className="text-3xl md:text-5xl font-unbounded font-bold uppercase pb-28">
                        Core Feature Suite
                    </h2>
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                        <div className="w-full lg:w-1/2 space-y-6">
                            <ul className="space-y-4 text-lg font-medium">
                                {Features.map((reason, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-orange-600 text-xl mt-1">•</span>
                                        <span>
                                            {reason.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <Image
                                src="/managements.jpg"
                                alt="Estate illustration"
                                width={600}
                                height={600}
                                className="rounded-xl w-full h-auto object-cover shadow-md"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="w-full flex justify-end">
                        <h1 className="md:text-5xl text-3xl font-bold mb-20 font-unbounded uppercase text-right">
                            Security & Compliance
                        </h1>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/security.jpg"
                                alt="Security"
                                width={600}
                                height={600}
                                className="rounded-xl w-full h-72 object-cover "
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            {securityAndCompliance.map((item, index) => (
                                <div key={index}>
                                    <p className="text-gray-700 mb-6 text-lg">{item.description}</p>
                                    <ul className="space-y-4">
                                        {item.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="text-orange-600 mt-1">•</span>
                                                <span className="text-base text-gray-800">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default EazyBiller