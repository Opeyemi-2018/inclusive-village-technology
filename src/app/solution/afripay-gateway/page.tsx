'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HiOutlineMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const whyChoose = [
  {
    title: "Integrated Payment Processing",
    description:
      "Accept online payments via card, bank transfer, or direct debit—securely and in real time."
  },
  {
    title: "Automated Reconciliations",
    description:
      "Eliminate manual work with built-in bank reconciliations, batch reporting, and automated journal entries."
  },
  {
    title: "General Ledger Integration",
    description:
      "Sync payments and deposits directly with your accounting or ERP system for clean books and easy auditing."
  },
  {
    title: "Scalable & Global Ready",
    description:
      "Process cross-border payments with support for multiple currencies and global payment providers."
  },
  {
    title: " Seamless Experience",
    description:
      "Deliver a frictionless user journey from checkout to confirmation across web and mobile platforms."
  },

];

const supportedPayment = [
  {
    number: 1,
    name: 'Stripe',
    description: 'Create or connect your Stripe account easily to process credit/debit card payments and ACH transfers. Benefit from features like automatic card updates and fraud protection.',
  },
  {
    number: 2,
    name: 'GoCardless',
    description: 'Accept direct debit payments effortlessly—ideal for both recurring and one-time billing scenarios..',
  },
  {
    number: 3,
    name: 'PayPal',
    description: 'Enable secure payments through PayPal and its suite of global payment methods—all from a single integration.',
  },
  {
    number: 4,
    name: 'BlueSnap',
    description: 'Support global currencies and alternative payment methods via this all-in-one global payment platform.',
  },
  {
    number: 5,
    name: 'CSG Forte',
    description: 'Scale your business with Forte’s enterprise-grade payment infrastructure—trusted by some of the biggest names in fintech.',
  },
  {
    number: 6,
    name: ' Authorize.Net',
    description: 'Securely process payments via cards or ACH. Supports existing merchant accounts and custom provider setups.',
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


const AfripayGateway = () => {
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
          backgroundImage: `url('/afripay-2.jpg')`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white"></div>


        <div className="flex items-center gap-2.5 z-10">
          <p className="text-lg capitalize font-medium ">AfriPay+ </p>
          <span className="w-2 h-2 bg-orange-600 rounded-full inline-block"></span>
        </div>
        <h1 className="md:text-[34px] max-w-3xl mx-auto text-4xl font-bold font-unbounded uppercase text-black  leading-snug z-10">
          AfriPay+ Gateway System
        </h1>
      </div>


      <div className="space-y-40  lg:px-10 px-3 pt-24">
        <div className=" w-full max-w-[80rem]  mx-auto flex flex-wrap lg:flex-nowrap  lg:gap-32 gap-20">
          <div className="w-full lg:w-[55%]  space-y-7" >
            <div>
              <h1 className="text-2xl lg:text-[27px] uppercase font-unbounded font-bold">Simplify, Streamline & Take Control of Your Payments Infrastructure</h1>
              <div className="h-1 w-16 bg-orange-600 mt-2 rounded"></div>
            </div>
            <p className="text-[18px] ">
              AfriPay+ is a comprehensive Payment Gateway Solution built to empower businesses with full control over their payment lifecycle—from checkout to settlement. Designed to bridge the gap between invoice generation and revenue reconciliation, AfriPay+ enables you to manage payment processing, automate accounting entries, and gain full visibility into how your customers pay.</p>
            <p className="text-[18px] hidden lg:inline">Say goodbye to fragmented systems and manual reconciliations. With AfriPay+, your payment stack becomes seamless, automated, and scalable..</p>
          </div>

          <div className="w-full lg:w-[50%] overflow-hidden">
            <Image
              src="/afripay-1.jpg"
              alt="banking"
              width={600}
              height={600}
              className="rounded-2xl object-cover h-80 w-full"
            />
          </div>

        </div>


        <div className="">
          <div className="w-full flex justify-end">
            <h1 className="md:text-5xl text-3xl font-bold mb-20 font-unbounded uppercase text-left">
              Why Choose AfriPay+?
            </h1>
          </div>
          {whyChoose.map((feature, index) => (
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
              Supported Payment Gateways & Methods
            </h1>
          </div>

          <p className="text-[18px] py-16">AfriPay+ integrates with a wide range of trusted payment providers, giving you the flexibility to choose what works best for your market and customers.</p>

          <div className="flex flex-col items-center gap-10 pb-6">
            {supportedPayment.map((step) => (
              <div
                key={step.number}
                className="bg-gray-200 text-black rounded-2xl p-7 flex flex-col md:gap-8 gap-6 max-w-md w-full"
              >
                <h2 className="text-7xl mb-4 text-orange-600 font-bold font-unbounded">
                  {step.number}
                </h2>
                <h3 className="text-3xl md:text-4xl uppercase font-bold font-unbounded leading-tight mb-2">
                  {step.name}
                </h3>
                <p className="text-[22px] font-semibold text-gray-500 mb-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>





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

export default AfripayGateway