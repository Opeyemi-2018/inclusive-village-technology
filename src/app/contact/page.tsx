"use client"
import LinkWithArrow from '@/components/contactButton';
import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri'


interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: 'What services does PixelHive offer?',
        answer: 'We offer web design, branding, and development services.',
    },
    {
        question: 'Can I customize the templates to fit my brand?',
        answer: 'Absolutely. All templates are customizable to fit your brand.',
    },
    {
        question: 'Do you provide post-launch support?',
        answer: 'Yes, we offer maintenance and support after launch.',
    },
    {
        question: 'What platforms do you support?',
        answer: 'We support Web, iOS, Android, and major CMS platforms.',
    },
];


const Contact = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="lg:px-10 px-3 pt-36">
            <div className="flex flex-col justify-center items-center ">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Reach Out</p>
                    <span className="w-3 h-3 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="flex-1 pt-8 lg:text-[42px] text-[#0b0b0b] text-4xl uppercase font-unbounded font-bold flex items-center">
                    Let’s Get Your Project Started
                </h1>
            </div>

            <div className='flex lg:flex-row flex-col lg:gap-0 gap-7 justify-between lg:items-start pt-32'>
                <div className='space-y-8 text-[#0b0b0b] font-inter'>
                    <p className='text-[#0b0b0b] text-[20px] font-inter lg:max-w-[400px]'>We’re excited to work with forward-thinking brands, teams, and businesses. Whether you’re looking to build a fintech platform, streamline your estate management, or create an education system that scales—we’re ready when you are.</p>
                    <div>
                        <p className='text-[20px] '>+234 (0) 903 822 4418</p>
                        <p className='text-[24px]'> info@ivillagetech.com</p>
                    </div>
                    <div>
                        <h2 className='text-[20px] font-semibold'>Find us</h2>
                    </div>
                    <h2 className='text-[20px] lg:max-w-[400px]'>
                        Eko Atlantic, Victoria Island, Lagos, Nigeria.
                        Banana Island, Ikoyi, Lagos, Nigeria.
                    </h2>

                    <div className="flex items-center gap-3 text-orange-600">
                        <RiTwitterXLine size={25} />
                        <RiTwitterXLine size={25} />
                        <RiTwitterXLine size={25} />
                        <RiTwitterXLine size={25} />
                    </div>
                </div>

                <div className='bg-gray-100 max-w-[600px] lg:p-10 p-5 rounded-lg w-full'>
                    <form className='space-y-4'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px]'>Name</label>
                            <input type="text" className='p-3 rounded-lg border border-gray-400' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px]'>Name</label>
                            <input type="text" className='p-3 rounded-lg border border-gray-400' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px]'>Name</label>
                            <input type="text" className='p-3 rounded-lg border border-gray-400' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[20px]'>Name</label>
                            <input type="text" className='p-3 rounded-lg border border-gray-400' />
                        </div>

                        <div className='flex flex-col pt-4 gap-3'>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-6 w-6 rounded border border-gray-800 appearance-none checked:bg-orange-600 focus:ring-gray-800 cursor-pointer"

                                />
                                <label
                                    className="ml-3 text-lg font-medium text-gray-700 cursor-pointer"
                                >
                                    Branding
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-6 w-6 rounded border border-gray-800 appearance-none checked:bg-orange-600 focus:ring-gray-800 cursor-pointer"

                                />
                                <label
                                    className="ml-3 text-lg font-medium text-gray-700 cursor-pointer"
                                >
                                    Branding
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-6 w-6 rounded border border-gray-800 appearance-none checked:bg-orange-600 focus:ring-gray-800 cursor-pointer"

                                />
                                <label
                                    className="ml-3 text-lg font-medium text-gray-700 cursor-pointer"
                                >
                                    Branding
                                </label>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 pb-3'>
                            <label className='text-[20px]'>More Information</label>
                            <textarea name="" id="" className='border-gray-400 p-3 rounded-lg border ' placeholder='tell us about it' />
                        </div>

                        <button className='p-3 w-full bg-orange-600 rounded-full text-white'>Submit</button>
                    </form>
                </div>
            </div>


            <section className="max-w-7xl mx-auto  pt-36 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className=" space-y-14 max-w-[300px]">
                    <h1 className="md:text-7xl text-4xl font-unbounded font-bold">FAQ</h1>
                    <p className="text-[20px]">
                        We&apos;ve witnessed it all. <br />
                        Here’s your essential guide before collaborating with us.
                    </p>
                    <div>
                        <LinkWithArrow
                            href="/contact"
                            label="MORE QUESTION"
                            underlineColor="bg-black"
                            iconColor="text-orange-600"
                        />
                    </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <span className="text-lg font-medium md:mr-0 mr-4">{faq.question}</span>
                                {openIndex === index ? <FiMinus className="text-3xl" /> : <FiPlus className="text-3xl" />}
                            </button>
                            {openIndex === index && (
                                <p className="text-gray-600 pb-4 md:mr-0 mr-6">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Contact