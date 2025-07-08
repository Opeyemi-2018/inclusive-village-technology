"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

const whatWeBuild = [
    {
        title: "Customer Relationship Management (CRM)",
        description:
            "Manage leads, automate sales workflows, track customer interactions, and improve retention with intelligent CRM solutions.",
    },
    {
        title: "Enterprise Resource Planning (ERP)",
        description:
            "End-to-end platforms that unify operations across finance, inventory, HR, procurement, and logistics—centralized for control and transparency.",
    },
    {
        title: "Human Resource Management Systems (HRMS)",
        description:
            "Streamline hiring, payroll, leave management, performance reviews, and employee engagement—all in one intuitive system.",
    },
    {
        title: "Custom Dashboards & Reporting Tools",
        description:
            "Unlock powerful insights with business intelligence dashboards, KPIs, and real-time reports tailored to your data.",
    },
    {
        title: "Workflow Automation & Business Tools",
        description:
            "Automate repetitive tasks, approvals, document generation, and inter-departmental collaboration—designed to boost productivity.",
    },
];

const keyBenefits = [
    {
        title: "Tailored to Fit",
        description:
            "Every solution is uniquely crafted based on your processes, not a generic template.",
    },
    {
        title: "Modular & Scalable",
        description:
            "Start small or go big—our modular systems grow with your business.",
    },
    {
        title: "Secure Architecture",
        description:
            "Built with enterprise-grade security and best practices in authentication, data protection, and compliance.",
    },
    {
        title: "Cloud or On-Prem Deployment",
        description:
            "Flexible infrastructure options to suit your IT environment and security policies.",
    },
    {
        title: "Third-Party Integrations",
        description:
            "Seamless integration with your existing tools, APIs, and third-party platforms.",
    },
];

const ourProcess = [
    {
        number: 1,
        title: "Discovery & Workflow Mapping",
        description:
            "We begin by understanding your current processes, goals, and pain points.",
    },
    {
        number: 2,
        title: "Design & Prototyping",
        description:
            "We translate your workflows into intuitive user experiences and system flows.",
    },
    {
        number: 3,
        title: "Agile Development",
        description:
            "Using modern stacks and best practices, we build in sprints with your feedback at every milestone.",
    },
    {
        number: 4,
        title: "BlueSnap",
        description:
            "Support global currencies and alternative payment methods via this all-in-one global payment platform.",
    },
    {
        number: 5,
        title: "Deployment & Training",
        description:
            "We ensure a smooth rollout, provide team onboarding, and offer detailed documentation.",
    },
    {
        number: 6,
        title: "Support & Evolution",
        description:
            "Get long-term support, upgrades, and feature expansion as your business scales..",
    },
];


const EnterpriseSoftware = () => {
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
        <div>
            <div className="relative bg-center bg-cover bg-no-repeat flex flex-col gap-3 items-center justify-center text-center h-[80vh] md:h-screen "
                style={{
                    backgroundImage: `url('/agency-1.jpg')`,
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
                                <p className="text-lg capitalize font-medium">software development</p>
                                <span className="w-2 h-2 bg-orange-600 rounded-full inline-block"></span>
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className="md:text-[34px] max-w-3xl mx-auto text-4xl font-bold font-unbounded uppercase   leading-snug z-10">
                    Enterprise Software Development

                </h1>

            </div>
            <div className="space-y-40 lg:px-10 px-3  pt-24 font-inter text-[#0b0b0b]">
                <div className=" w-full max-w-[80rem]  mx-auto flex flex-wrap lg:flex-nowrap  lg:gap-32 gap-20">
                    <div className="w-full lg:w-[55%]  space-y-7" >
                        <div>
                            <h1 className="text-2xl lg:text-[27px] uppercase font-unbounded font-bold">Truly Digital Core Banking for the Future of Finance</h1>
                            <div className="h-1 w-16 bg-orange-600 mt-2 rounded"></div>
                        </div>
                        <p className="text-[18px] ">
                            We design and develop enterprise-grade software tailored specifically to your business workflows, goals, and growth strategy. From custom ERP systems to HRMS platforms, CRMs, and other internal business tools—our approach focuses on clean architecture, scalability, and user-centric design.
                        </p>
                        {/* <p className="text-[18px] hidden lg:inline">Whether you&apos;re looking to optimize internal operations, enhance team collaboration, or unlock real-time insights across departments, we build tools that work the way your business works.</p> */}
                    </div>

                    <div className="w-full lg:w-[50%] overflow-hidden">
                        <Image
                            src="/agency-1.jpg"
                            alt="banking"
                            width={600}
                            height={600}
                            className="rounded-2xl object-cover h-80 w-full"
                        />
                    </div>

                </div>

                <section className=" ">
                    <div className="w-full flex justify-end">
                        <h2 className="text-4xl sm:text-5xl font-unbounded font-bold uppercase mb-6 relative inline-block">
                            What We Build
                            <span className="absolute left-0 bottom-0 w-20 h-1 bg-orange-600"></span>
                        </h2>
                    </div>

                    <div className="w-full lg:w-1/2 max-w-5xl  mx-auto">
                        <div className="space-y-24 mt-10">
                            {whatWeBuild.map((item, index) => (
                                <div key={index} className="">
                                    <h3 className="text-xl font-semibold mb-1 font-unbounded">
                                        {item.title}
                                    </h3>
                                    <p className=" text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                <div className="">
                    <div className="w-full flex justify-end">
                        <h1 className="md:text-5xl text-3xl font-bold mb-20 font-unbounded uppercase text-left">
                            Key Benefits
                        </h1>
                    </div>
                    {keyBenefits.map((feature, index) => (
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
                    <div className="flex flex-col items-center md:gap-4 gap-7 lg:mb-36 mb-16">
                        <h1 className="lg:text-7xl text-5xl uppercase text-center font-unbounded font-bold">
                            OUR PROCESS
                        </h1>
                    </div>

                    <div className="flex flex-col items-center gap-10 pb-6">
                        {ourProcess.map((step) => (
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

            </div>



        </div>

    );
};

export default EnterpriseSoftware;
