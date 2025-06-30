import React from 'react';
import { PiFireLight } from "react-icons/pi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";

type FeatureStatus = 'included' | 'not-included';

interface Feature {
    name: string;
    status: FeatureStatus;
}

interface Plan {
    name: string;
    price: number;
    description: string;
    isPopular: boolean;
    features: Feature[];
}

const pricingPlans: Plan[] = [
    {
        name: "Basic",
        price: 499,
        description: "Our primary pricing strategy strives to deliver superior value and features.",
        isPopular: false,
        features: [
            { name: "Unlimited requests", status: "included" },
            { name: "Unlimited revisions", status: "included" },
            { name: "Project management", status: "not-included" },
            { name: "Access to all services", status: "not-included" },
            { name: "Pause or cancel anytime", status: "not-included" },
        ],
    },
    {
        name: "Growth",
        price: 799,
        description: "Growth plan is outlined for enterprises that need advanced features.",
        isPopular: true,
        features: [
            { name: "Unlimited requests", status: "included" },
            { name: "Unlimited revisions", status: "included" },
            { name: "Project management", status: "not-included" }, // Corrected based on image
            { name: "Access to all services", status: "not-included" }, // Corrected based on image
            { name: "Pause or cancel anytime", status: "not-included" }, // Corrected based on image
        ],
    },
    {
        name: "Premium Plan",
        price: 1299,
        description: "Our Premium pricing plan is designed for a corporate with premium support.",
        isPopular: false,
        features: [
            { name: "Unlimited requests", status: "included" },
            { name: "Unlimited revisions", status: "included" },
            { name: "Project management", status: "included" },
            { name: "Access to all services", status: "included" },
            { name: "Pause or cancel anytime", status: "included" },
        ],
    },
];

const PricingSection: React.FC = () => {
    return (
        <section className='px-3 pt-36 pb-20 lg:px-8'>
            <div className="flex flex-col  items-center md:gap-4 gap-7 lg:mb-36 mb-16">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">pricing</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className=" lg:text-6xl md:max-w-4xl mx-auto max-w-5xl text-4xl uppercase text-center font-unbounded font-bold ">
                    Simple Plans, Powerful Results
                </h1>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1  gap-6">
                {pricingPlans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative flex flex-col  rounded-lg  p-6 
                ${plan.isPopular ? 'bg-gray-100' : 'border border-gray-200'}`}
                    >

                        <div className='flex items-center justify-between'>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h2>
                            {plan.isPopular && (
                                <div className=" bg-orange-600  font-semibold p-2 flex items-center gap-2 rounded-full uppercase">
                                    <PiFireLight /><span> Most popular</span>
                                </div>
                            )}
                        </div>
                        <div className='flex items-center py-5'>
                            <p className="md:text-5xl text-3xl font-unbounded font-bold">
                                ${plan.price}
                            </p>
                            <span className="text-[21px] font-normal">/month</span>
                        </div>

                        <p className="text-[20px] text-gray-600 mb-6 flex-grow flex">{plan.description}</p>
                        <button className={`w-full text-[20px] ${plan.isPopular ? "bg-orange-600" : "border border-gray-200"}   py-3 rounded-md font-semibold hover:bg-orange-600 transition duration-300`}>
                            GET STARTED NOW
                        </button>
                        <div className="mt-6 border-t border-orange-600 border-dashed pt-6">
                            <h3 className="text-[20px] font-semibold text-gray-900 mb-4">What&apos;s included:</h3>
                            <ul className="space-y-3">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature.name}
                                        className="flex items-center"
                                    >
                                        <span className="bg-orange-100 text-orange-600 rounded-full p-1 mr-2">
                                            {feature.status === "included" ? (
                                                <IoCheckmarkSharp className="w-5 h-5" />
                                            ) : (
                                                <LiaTimesSolid className="w-5 h-5" />
                                            )}
                                        </span>
                                        <p className='text-gray-800 text-[19px]'>{feature.name}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricingSection;