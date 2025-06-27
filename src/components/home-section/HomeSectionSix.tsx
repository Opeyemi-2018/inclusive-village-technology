'use client';

import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';

type Testimonial = {
    quote: string;
    name: string;
    title: string;
    avatar: string;
};

const testimonials: Testimonial[] = [
    {
        quote: 'PixelHive exceeded our expectations! The design was sleek, modern, and incredibly easy to customize. Highly recommend their templates!',
        name: 'Tawhid A.',
        title: 'Design Lead @WFC',
        avatar: '/bio.webp',
    },
    {
        quote: 'Working with PixelHive was a game-changer for our brand. The UI/UX design is top-notch, and the no-code flexibility made it simple for us to make changes.',
        name: 'Aziz H.',
        title: 'Founder @WFC',
        avatar: '/bio.webp',
    },
    {
        quote: 'Finally Found PixelHive was a game-changer for our brand. The UI/UX design is top-notch, and the no-code flexibility made it simple for us to make changes.',
        name: 'Arif I.',
        title: 'Developer @WFC',
        avatar: '/bio.webp',
    },
    {
        quote: 'The quality of their work is exceptional. PixelHive delivered exactly what we needed and more. Will definitely work with them again!',
        name: 'Sarah K.',
        title: 'Marketing Director @ABC Corp',
        avatar: '/bio.webp',
    },
];

const HomeSectionSix = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3); 

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else {
                setItemsToShow(3);
            }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

   

    // Calculate visible testimonials
    const visibleTestimonials = [];
    for (let i = 0; i < itemsToShow; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visibleTestimonials.push(testimonials[index]);
    }

    return (
        <div className="lg:px-10 px-3 pt-40 pb-10 bg-white">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:mb-12 mb-2">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Testimonials</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="flex-1 lg:text-7xl text-5xl capitalize font-bold max-w-2xl">
                    What Our Customers Say
                </h1>
            </div>

            <div className="py-20 bg-white relative">
                {/* Carousel container */}
                <div className="relative overflow-hidden">
                    <div className="flex transition-transform duration-300 ease-in-out">
                        {visibleTestimonials.map((item, index) => (
                            <div
                                key={`${currentIndex}-${index}`}
                                className="w-full md:w-1/3 px-4 flex-shrink-0"
                            >
                                <div className="bg-white border border-gray-200 rounded-xl p-10 flex flex-col gap-6 justify-between shadow-sm h-full">
                                    <FaQuoteLeft size={50} className="text-orange-600 mb-4 font-extrabold" />
                                    <p className="text-[22px] font-medium text-gray-900 mb-6">{item.quote}</p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <Image
                                            src={item.avatar}
                                            alt={item.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-[20px] text-orange-600">{item.name}</p>
                                            <p className="text-gray-400 text-1xl font-semibold">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

               

                {/* Dots pagination */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-orange-600' : 'bg-orange-300'}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeSectionSix;