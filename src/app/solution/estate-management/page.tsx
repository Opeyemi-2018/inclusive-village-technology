'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HiOutlineMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const coreFeatures = [
    {
        title: "Centralized Dashboard",
        description:
            "Get real-time visibility into performance metrics, tenant stats, maintenance logs, gate access records, and financial summaries—all from one intuitive dashboard.",
    },
    {
        title: "Advanced User Management",
        description:
            "Create and manage unlimited users: staff, security, tenants, property owners. Assign roles, track activities, and enforce accountability.",
    },
    {
        title: "Role-Based Access Control",
        description:
            "Define granular permissions for different user types to restrict or enable access to sensitive modules.",
    },
    {
        title: "Property & Unit Management",
        description:
            "Manage single units or entire portfolios. Track lease history, amenities, occupancy status, and documentation.",
    },
    {
        title: "Tenant & Dependent Management",
        description:
            "Digitally onboard tenants and their family members or dependents. Maintain unique access levels for each.",
    },
    {
        title: "Gate Access Tokens",
        description:
            "Generate scannable digital or physical access tokens for tenants, visitors, staff, and vendors. Maintain logs of every entry/exit for added security.",
    },
    {
        title: "Maintenance Requests",
        description:
            "Tenants can log repair/maintenance issues via the portal. Assign requests to staff or vendors, monitor progress, and resolve quickly.",
    },
    {
        title: "Contractor Oversight",
        description:
            "Track estate contractors, vendors, and their task histories. Assign duties and verify delivery status and payment cycles.",
    },
    {
        title: "In-App Support System",
        description:
            "Built-in helpdesk for tickets and service inquiries from tenants and staff—ensuring smooth internal communications.",
    },
    {
        title: "Contact Directory",
        description:
            "Maintain a searchable directory of key contacts—emergency numbers, utility companies, vendors, and more.",
    },
];

const financialFeatures = [
    {
        title: "Utility Bill Payment Integration",
        description:
            "Enable tenants to pay for electricity, waste disposal, water, and service charges directly on the platform.",
    },
    {
        title: "Income & Expense Tracking",
        description:
            "Automatically record payments, fees, expenses, and revenue. Categorize transactions and monitor balances.",
    },
    {
        title: "Real-Time Transaction Logs",
        description:
            "Track and export all financial activity for transparency and auditing. Issue digital receipts to tenants.",
    },
    {
        title: "Payment Gateway Integration",
        description:
            "Support flexible payments via Bank Transfers, PayPal, Stripe, Flutterwave, and more.",
    },
];

const reasonsToChoose = [
    {
        title: "All-in-One Platform",
        description: "Unify management, billing, security, and communication.",
    },
    {
        title: "Cloud-Based & Mobile Ready",
        description: "Manage your estate from any device, securely.",
    },
    {
        title: "Scalable Architecture",
        description: "Suitable for estates with 10 or 10,000+ units.",
    },
    {
        title: "Flexible Configuration",
        description: "Customize everything—from permissions to page layouts.",
    },
    {
        title: "Security First",
        description: "Encrypted, authenticated, and audit-ready platform.",
    },
    {
        title: "Real-Time Decision Making",
        description: "Stay informed and act faster with live insights.",
    },
];

const EstateManagement = () => {
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
        <div className="text-[#0b0b0b] font-inter">
            <div
                className="relative bg-center bg-cover bg-no-repeat flex flex-col gap-3 items-center justify-center text-center h-[80vh] md:h-screen "
                style={{
                    backgroundImage: `url('/estate.jpg')`,
                    backgroundBlendMode: 'overlay',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                }}
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white"></div>

                <div className="flex items-center gap-2.5 z-10">
                    <p className="text-lg capitalize font-medium text-black">estate management</p>
                    <span className="w-2 h-2 bg-orange-600 rounded-full inline-block"></span>
                </div>                
                <h1 className="md:text-[34px] max-w-3xl mx-auto text-4xl font-bold font-unbounded uppercase text-black  leading-snug z-10">
                    Estate Management System
                </h1>
            </div>



            <div className="space-y-40 lg:px-10 px-3  pt-24">
                <div className=" w-full max-w-[80rem]  mx-auto flex flex-wrap lg:flex-nowrap  lg:gap-36 gap-20">
                    <div className="w-full lg:w-[60%]  space-y-7" >
                        <div>
                            <h1 className="text-2xl lg:text-[27px] uppercase font-unbounded font-bold">Revolutionizing Modern Estate & Property Administration</h1>
                            <div className="h-1 w-16 bg-orange-600 mt-2 rounded"></div>
                        </div>
                        <p className="text-[18px] ">Estate Management System is a powerful, all-inclusive digital platform engineered to redefine how residential estates, gated communities, and commercial properties are managed. It empowers estate managers, landlords, and facility operators with smart tools to streamline operations—covering everything from tenant onboarding and maintenance to financials and security access.</p>
                        <p className="text-[18px] hidden lg:inline">No more spreadsheets or scattered tools—Estate Management System consolidates all core functions into a unified, cloud-based experience.</p>
                    </div>

                    <div className="w-full lg:w-[60%]  overflow-hidden ">
                        <Image src={'/estate.jpg'} alt="estate" width={600} height={600} className="rounded-2xl" />
                    </div>
                </div>


                <div className="">
                    <div className="w-full flex justify-end">
                        <h1 className="md:text-5xl text-3xl font-bold mb-20 font-unbounded uppercase text-left">
                            Core Capabilities & Feature Highlights
                        </h1>
                    </div>
                    {coreFeatures.map((feature, index) => (
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


                <div className="">
                    <div className="w-full flex justify-end">
                        <h1 className="md:text-5xl text-3xl font-bold mb-20 font-unbounded uppercase text-right">
                            Financial & Billing Tools
                        </h1>
                    </div>

                    <div className="flex flex-col items-center gap-10 pb-6">
                        {financialFeatures.map((financial, index) => (
                            <div
                                key={index}
                                className="bg-gray-200 text-black rounded-2xl p-7 flex flex-col md:gap-8 gap-6 max-w-md w-full"
                            >

                                <h3 className="text-3xl md:text-[34px] uppercase font-bold font-unbounded leading-tight mb-2">
                                    {financial.title}
                                </h3>
                                <p className="text-[24px] font-semibold text-gray-400 mb-10">
                                    {financial.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                <section className="  bg-white">
                    <h2 className="text-3xl md:text-5xl font-unbounded font-bold uppercase pb-28">
                        Why Choose <br /> Estate Management System?
                    </h2>
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <ul className="space-y-4 text-lg font-medium">
                                {reasonsToChoose.map((reason, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-orange-600 text-xl mt-1">•</span>
                                        <span>
                                            <strong>{reason.title}</strong>: {reason.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                            <Image
                                src="/estate.jpg"
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

export default EstateManagement