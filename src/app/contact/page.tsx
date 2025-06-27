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
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <div className='flex items-center flex-col gap-0 md:gap-2 md:flex-row'>
                    <h1 className="flex-1 pt-2 lg:text-8xl text-5xl capitalize font-bold flex items-center">
                        LET&apos;S CONNECT
                    </h1>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col lg:gap-0 gap-7 justify-between lg:items-center pt-32'>
                <div className='space-y-8'>
                    <div>
                        <p className='text-[20px] text-gray-700'>+1 (800) 123-4567</p>
                        <p className='text-[30px] font-medium'>contact@pixelhive.com</p>
                    </div>
                    <div>
                        <h2 className='text-[20px] font-semibold'>Find us</h2>
                    </div>
                    <div className='text-gray-800 text-[18px]'>
                        <h2>
                            1701 Pine Street, San Francisco,
                        </h2>
                        <h2>CA 94115, US</h2>
                    </div>

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


            {/* faq section */}
            <section className="max-w-7xl mx-auto  pt-36 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className=" space-y-10 max-w-[300px]">
                    <h1 className="md:text-7xl text-4xl md:font-extrabold font-bold">FAQ</h1>
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

                {/* Right section */}
                <div className="md:col-span-2 space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                {openIndex === index ? <FiMinus className="text-2xl" /> : <FiPlus className="text-2xl" />}
                            </button>
                            {openIndex === index && (
                                <p className="text-gray-600 pb-4">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Contact