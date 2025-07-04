"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineMinus } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const sectionContent = [
  {
    title: "AfriPay+ Gateway System",
    description: [
      "AfriPay+ is a comprehensive Payment Gateway Solution built to empower businesses with full control over their payment lifecycle—from checkout to settlement.",
      "Say goodbye to fragmented systems and manual reconciliations. With AfriPay+, your payment stack becomes seamless, automated, and scalable."
    ],
    image: "/payment-gateway-1.jpg",
  },
  {
    title: "Why Choose AfriPay+?",
    description: [
      "Integrated Payment Processing — Accept online payments via card, bank transfer, or direct debit—securely and in real time.",
      "Automated Reconciliations — Eliminate manual work with built-in bank reconciliations, batch reporting, and automated journal entries.",
      "General Ledger Integration — Sync payments and deposits directly with your accounting or ERP system for clean books and easy auditing.",
      "Scalable & Global Ready — Process cross-border payments with support for multiple currencies and global payment providers.",
      "Seamless Experience — Deliver a frictionless user journey from checkout to confirmation across web and mobile platforms."
    ],
    image: "/payment-gateway-2.jpg",
  },
  {
    title: "Security & Compliance",
    description: [
      "PCI-DSS Compliant",
      "Data Encryption at Rest and in Transit",
      "Two-Factor Authentication (2FA)",
      "Fraud Detection & Prevention Tools"
    ],
    image: "/payment-security.jpg",
  },
];

const keyFeatures = [
  "Stripe",
  "GoCardless",
  "PayPal",
  "BlueSnap",
  "CSG Forte",
  "Authorize.Net",
];

const extraGateways = [
  "Braintree", "Adyen", "Chase Paymentech", "Cybersource (Visa Solution)", "Elavon",
  "Eway", "ModusLink", "Moneris", "NMI", "Pin Payments", "Square", "Stax",
  "TrustCommerce", "Windcave", "Worldline", "Worldpay"
];

const useCases = [
  "E-commerce Platforms",
  "SaaS Subscription Billing",
  "Utility Payment Collections",
  "NGO & Donation Gateways",
  "Financial Services",
];

const Afripay = () => {
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
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="lg:px-10 px-3 pt-36 pb-32 text-[#0b0b0b]">
      <div className="space-y-5">
        <h1 className="lg:text-[40px] text-3xl font-bold max-w-4xl uppercase font-unbounded">
          AfriPay+ Gateway System
        </h1>
        <p className="font-inter text-[20px]">
          Simplify, Streamline & Take Control of Your Payments Infrastructure
        </p>
      </div>

      <div className="space-y-36 pt-28">
        {sectionContent.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (sectionRefs.current[index] = el)}
            className={`flex flex-col-reverse ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center gap-10`}
          >
            <div className="lg:w-1/2 w-full space-y-4 text-left">
              <div>
                <h2 className="lg:text-[27px] text-2xl font-bold uppercase font-unbounded">{item.title}</h2>
                <div className="h-1 w-16 bg-orange-600 mt-2 rounded"></div>
              </div>
              <ul className="text-[#0b0b0b] font-inter text-[18px] space-y-2">
                {item.description.map((line, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-orange-600 rounded-full flex-shrink-0"></span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
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

        <div className="pt-28">
          <h2 className="lg:text-[40px] text-3xl font-bold uppercase font-unbounded text-center mb-16">
            Supported Gateways
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {keyFeatures.map((name, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredFeatureIndex(index)}
                onMouseLeave={() => setHoveredFeatureIndex(null)}
                className={`transition-all duration-300 cursor-pointer p-6 bg-white shadow hover:shadow-lg rounded-xl ${hoveredFeatureIndex === index ? "bg-orange-600 text-white" : ""}`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              >
                <h3 className="text-lg font-semibold">{name}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pt-20">
          <h2 className="text-2xl font-bold uppercase font-unbounded mb-6">Additional Integrations</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-700 list-disc pl-6">
            {extraGateways.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pt-20">
          <h2 className="text-2xl font-bold uppercase font-unbounded mb-6">Use Cases</h2>
          <div className="flex flex-wrap gap-4 text-gray-700">
            {useCases.map((item, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center pt-20">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            📈 Ready to Transform Your Payment Flow?
          </h3>
          <p className="text-gray-600 mb-6">
            Let AfriPay+ power your growth with intelligent, automated, and secure payment solutions.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg">
              📩 Request a Demo
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg">
              🔗 Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Afripay;