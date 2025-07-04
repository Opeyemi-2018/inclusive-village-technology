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
            <div className="flex flex-col">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Reach Out</p>
                    <span className="w-3 h-3 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="flex-1 pt-8 lg:text-[42px] text-[#0b0b0b] text-4xl uppercase font-unbounded font-bold flex items-center">
                    Let’s Get Your Project Started
                </h1>
            </div>

            <div className="lg:flex lg:gap-16 pt-32 flex-col lg:flex-row items-start">
                <div className="lg:w-5/12 w-full space-y-8 text-[#0b0b0b] text-[18px] font-inter">
                    <div className='space-y-3'>
                        <p className="text-[18px] leading-relaxed">
                            We’re excited to work with forward-thinking brands, teams, and businesses. </p>
                        <p className='lg:inline hidden'>Whether you’re looking to build a fintech platform, streamline your estate management, or create an education system that scales, we’re ready when you are.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-[18px]">+234 (0) 903 822 4418</p>
                        <p className="text-[24px]">info@ivillagetech.com</p>
                    </div>

                    <div className='font-inter text-[#0b0b0b]'>
                        <h2 className="text-[20px] font-semibold">Find us</h2>
                        <p className="text-[18px]  leading-relaxed">
                            Eko Atlantic, Victoria Island, Lagos, Nigeria. <br />
                            Banana Island, Ikoyi, Lagos, Nigeria.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-orange-600">
                        <RiTwitterXLine size={22} />
                        <RiTwitterXLine size={22} />
                        <RiTwitterXLine size={22} />
                        <RiTwitterXLine size={22} />
                    </div>
                </div>

                <div className="lg:w-7/12 w-full mt-10 lg:mt-0 bg-[#9797974d] p-8 rounded-2xl shadow-sm">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1 text-[18px] text-[#0b0b0b]">First Name</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className="w-full p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-[18px] text-[#0b0b0b]">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="doe"
                                    className="w-full p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-[18px] text-[#0b0b0b]">Email</label>
                                <input
                                    type="email"
                                    placeholder="johndoe@gmail.com"
                                    className="w-full p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-[18px] text-[#0b0b0b]">Phone(Optional)</label>
                                <input
                                    type="number"
                                    placeholder="+234..."
                                    className="w-full p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 bg-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 text-[18px] text-[#0b0b0b]">Services Interested In</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["Financial Services", "Integration Services", "Development Services", "Infrastructure Services", "Management Systems"].map((service, i) => (
                                    <label key={i} className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            className="h-5 w-5 rounded border border-gray-400 appearance-none checked:bg-orange-600 cursor-pointer"
                                        />
                                        <span className="text-[18px]">{service}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-semibold">Message</label>
                            <textarea
                                placeholder="Tell us about your project"
                                className="w-full min-h-[120px] p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 bg-transparent"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition"
                        >
                            Submit
                        </button>
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
                        <div key={index} className="border-b font-inter border-gray-300">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <span className="text-lg font-medium md:mr-0 mr-4">{faq.question}</span>
                                {openIndex === index ? <FiMinus className="text-3xl" /> : <FiPlus className="text-3xl" />}
                            </button>
                            {openIndex === index && (
                                <p className="text-[#0b0b0b]  pb-4 md:mr-0 mr-6">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Contact