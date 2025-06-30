import Image from 'next/image';
import React from 'react';

const Products = [
    {
        name: 'Inclusive Remittance System',
        imageUrl: '/remittance.webp',
    },
    {
        name: 'AfriPay+ Payment Gateway',
        imageUrl: '/afripay.png',
    },
    {
        name: 'Afripay Learn (Education Management)',
        imageUrl: '/afripay-learn.png',
    },
    {
        name: 'Banking Software Suite',
        imageUrl: '/banking.webp',
    },
    {
        name: 'Estate360 (Estate Management System)',
        imageUrl: '/estate.webp',
    },
    {
        name: 'Eazybiller (Invoicing & Billing)',
        imageUrl: '/invoice.webp',
    },
    {
        name: 'Enterprise Tools & APIs',
        imageUrl: '/api.webp',
    }
];

const HomeSectionNine = () => {
    return (
        <div className="lg:px-10 px-3">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 py-44 mb-2">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Product</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="flex-1 lg:text-7xl text-5xl uppercase font-unbounded font-bold max-w-2xl">
                    Our Products
                </h1>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {Products.map((person, index) => (
                    <div
                        key={index}
                        className="relative  bg-white rounded-xl shadow-lg
                       overflow-hidden flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
                    >
                        <div className="relative w-full h-[350px]">
                            <Image
                                src={person.imageUrl}
                                alt={person.name}
                                fill
                                className="object-cover"
                            />
                        </div>


                        <div
                            className="absolute bottom-0 left-0 w-full h-full
                         bg-gradient-to-t from-orange-600 via-orange-600/50 to-transparent
                         flex flex-col justify-end items-center p-4 pb-2"
                        >
                            <p className="text-white text-center  text-1xl md:text-2xl font-unbounded font-bold uppercase mb-1">
                                {person.name}
                            </p>
                            {/* <p className="text-white text-md">
                                {person.post}
                            </p> */}
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default HomeSectionNine;
