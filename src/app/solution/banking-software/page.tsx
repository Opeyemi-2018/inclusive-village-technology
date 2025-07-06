'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HiOutlineMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const keyAdvantages = [
    {
        title: "Light Speed Processing",
        description:
            "Execute millions of transactions reliably and in real time — optimized for scale and speed."
    },
    {
        title: "Business Intelligence",
        description:
            "Access deep financial insights and customer data dashboards to guide strategic decisions."
    },
    {
        title: "Be in Control",
        description:
            "Manage configurations, workflows, and reporting with a flexible admin experience."
    },
    {
        title: "Self-Onboarding Corebanking",
        description:
            "Reduce onboarding time with self-service banking workflows for retail and SME customers."
    },
    {
        title: " Affordability",
        description:
            "Built to reduce operational costs by automating critical processes and eliminating technical debt."
    },
    {
        title: "Unrivalled Banking Experience",
        description:
            "Offer seamless user journeys across digital and branch banking channels — backed by multi-device, multilingual access."
    },

];

const ourSolution =
    [
        {
            number: 1,
            description: 'Serve retail, SME, and institutional clients with ease',
        },
        {
            number: 2,
            description: 'Digitize banking workflows across branches and online channels',
        },
        {
            number: 3,
            description: 'Collaborate seamlessly with fintech partners, mobile money, and payment providers',
        },
        {
            number: 4,
            description: 'Reduce operational overhead while increasing service quality',
        },
    ];



// const customizationFeatures = [
//     {
//         title: "Multi-Language & RTL Support",
//         description: "Serve diverse estates with support for both Left-to-Right and Right-to-Left text orientations.",
//     },
//     {
//         title: "Visual Customization",
//         description: "Apply your estate’s branding with custom themes, fonts, and dark/light mode options.",
//     },
//     {
//         title: "Two-Factor Authentication (2FA)",
//         description: "Add a second layer of security for all user accounts.",
//     },
//     {
//         title: "Custom Settings",
//         description: "Configure platform behavior with flexible modules: automated emails, access roles, and company branding.",
//     },
//     {
//         title: "Impersonation Tool",
//         description: "Admins can log in as any user for debugging or support purposes—without exposing sensitive information.",
//     },
//     {
//         title: "SEO-Ready Landing Page with CMS",
//         description: "Edit and manage your estate’s public-facing web portal with SEO features and a built-in CMS.",
//     },
//     {
//         title: "Google reCAPTCHA",
//         description: "Protect login and contact forms from spam or bots using Google’s security tools.",
//     },
// ];

const whatYouGet = [
    {
        description: "Full core banking engine (accounts, ledger, KYC, transactions)",
    },
    {
        description: "Real-time reporting and BI tools",
    },
    {
        description: "Scalable API infrastructure",
    },
    {
        description: "Customer self-service portals",
    },
    {
        description: "Integration with NIBSS, POS, mobile money, and payment gateways",
    },
    {
        description: "Regulatory & compliance-ready modules",
    },
];

const BankingSoftware = () => {
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


    return (
        <div className="  text-[#0b0b0b] font-inter">
            <div
                className="relative bg-center bg-cover bg-no-repeat flex flex-col gap-3 items-center justify-center text-center h-[80vh] md:h-screen "
                style={{
                    backgroundImage: `url('/banking.jpg')`,
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                }}
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white"></div>


                <div className="flex items-center gap-2.5 z-10">
                    <p className="text-lg capitalize font-medium ">banking software</p>
                    <span className="w-2 h-2 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="md:text-6xl max-w-6xl mx-auto text-4xl font-bold font-unbounded uppercase  z-10 leading-snug">
                    Inclusive Banking Software Solution

                </h1>
            </div>


            <div className="space-y-44 pt-36 lg:px-10 px-3">
                <div className=" w-full max-w-[80rem]  mx-auto flex flex-wrap lg:flex-nowrap  lg:gap-32 gap-20">
                    <div className="w-full lg:w-[55%]  space-y-7" >
                        <div>
                            <h1 className="text-2xl lg:text-[27px] uppercase font-unbounded">Truly Digital Core Banking for the Future of Finance</h1>
                            <div className="h-1 w-16 bg-orange-600 mt-2 rounded"></div>
                        </div>
                        <p className="text-[18px] ">
                            The banking landscape in Africa is transforming rapidly — driven by technology, digital expectations, and the growing demand for financial inclusion. Traditional systems are no longer enough. Financial institutions need a flexible, cloud-based, and scalable solution to stay ahead.</p>
                        <p className="text-[18px] hidden lg:inline">Inclusive Banking Software Solution is a truly digital core banking platform built on modern microservice architecture. Designed in-house by Inclusive Village, it helps financial institutions break free from rigid legacy systems and embrace a fast, secure, API-ready future.</p>
                    </div>

                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image
                            src="/banking.jpg"
                            alt="banking"
                            width={600}
                            height={600}
                            className="rounded-2xl object-cover h-80 w-full"
                        />
                    </div>

                </div>


                <div className="lg:px-10 px-3">
                    <div className="w-full flex justify-end">
                        <h1 className="md:text-5xl text-3xl font-bold mb-20 font-unbounded uppercase text-left">
                            Key Advantages
                        </h1>
                    </div>
                    {keyAdvantages.map((feature, index) => (
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


                <div className="lg:px-10 px-3">
                    <div className="w-full flex justify-end">
                        <h1 className="md:text-5xl text-3xl font-bold mb-20 font-unbounded uppercase text-right">
                            Our Solution
                        </h1>
                    </div>

                    <p className="text-[18px] py-16">Inclusive offers a next-generation banking software that empowers banks, digital lenders, MFIs, cooperatives, and neobanks to thrive in the digital economy.

                        Built for agility, security, and performance, our solution helps you:</p>

                    <div className="flex flex-col items-center gap-10 pb-6">
                        {ourSolution.map((step) => (
                            <div
                                key={step.number}
                                className="bg-gray-200  rounded-2xl p-7 flex flex-col md:gap-8 gap-6 max-w-md w-full"
                            >
                                <h2 className="text-7xl mb-4 text-orange-600 font-bold font-unbounded">
                                    {step.number}
                                </h2>
                                <p className="text-[22px] font-semibold  mb-10">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* <section className="py-28">

                    <div className="w-full flex justify-end px-3">
                        <h1 className="md:text-5xl text-3xl font-bold mb-20 font-unbounded uppercase text-right">
                            Customization, Security & Accessibility
                        </h1>
                    </div>

                    <div className="flex flex-col gap-10">
                        {customizationFeatures.map(({ title, description }) => (
                            <div
                                key={title}
                                className={`max-w-5xl flex flex-col md:flex-row items-center bg-gray-200 rounded-tr-full rounded-br-full overflow-hidden`}
                            >

                                <div className="p-6 md:p-10 w-full md:w-3/4">
                                    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                                    <p className=" text-[18px]">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section> */}

                <section className="lg:px-10 px-3  bg-white">
                    <h2 className="text-3xl md:text-5xl font-unbounded font-bold uppercase pb-28">
                        What You Get
                    </h2>
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <ul className="space-y-4 text-lg font-medium">
                                {whatYouGet.map((reason, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-orange-600 text-xl mt-1">•</span>
                                        <span>
                                            {reason.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
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


            </div>

        </div>
    )
}

export default BankingSoftware