import Image from 'next/image';
import React from 'react';

const imageData = [
    {
        name: 'ALEX JOHNSON',
        post: 'Chief Executive Officer (CEO)',
        imageUrl: '/team-man.avif', 
    },
    {
        name: 'JOHN DOE',
        post: 'Chief Marketing Officer (CMO)',
        imageUrl: '/team-man.avif', 
    },
    {
        name: 'JANE SMITH',
        post: 'Chief Financial Officer (CFO)',
        imageUrl: '/team-man.avif', 
    },
    {
        name: 'PETER JONES',
        post: 'Head of Sales',
        imageUrl: '/team-man.avif', 
    },
    {
        name: 'SARAH LEE',
        post: 'HR Director',
        imageUrl: '/team-man.avif', 
    },
];

const AboutSectionFour = () => {
    return (
        <div className="lg:px-10 px-3">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 py-44 mb-2">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Our Team</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="flex-1 lg:text-7xl text-5xl capitalize font-bold max-w-2xl">
                    meet the <br /> expert
                </h1>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:justify-start lg:justify-center">
                {/* Map through the imageData array to render 5 image cards */}
                {imageData.map((person, index) => (
                    <div
                        key={index}
                        className="relative w-full max-w-[400px] bg-white rounded-xl shadow-lg
                       overflow-hidden flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
                    >
                        {/* Image element */}
                        <Image
                            src={person.imageUrl}
                            alt={person.name} width={1500} height={1500}
                            className=" object-cover"
                        />

                        {/* Overlay for orange blend and text */}
                        <div
                            className="absolute bottom-0 left-0 w-full h-full
                         bg-gradient-to-t from-orange-600 via-orange-600/50 to-transparent
                         flex flex-col justify-end items-center p-4 pb-2" 
                        >
                            <p className="text-white text-2xl md:text-3xl  font-bold uppercase mb-1">
                                {person.name}
                            </p>
                            <p className="text-white text-md">
                                {person.post}
                            </p>
                        </div>
                    </div>
                ))}

                {/* The 6th item: a dummy div */}
                <div
                    className=" w-full max-w-[400px] bg-orange-600 text-white rounded-xl shadow-lg p-6
                     flex flex-col justify-center gap-5 items-center text-center flex-shrink-0
                     transform transition-transform duration-300 hover:scale-105"
                >
                    <div className='flex items-center flex-col gap-2'>
                        <h1 className="text-2xl md:text-3xl  font-bold  uppercase">
                            you can be here
                        </h1>
                        <p className="text-base leading-relaxed mb-4">
                            We prize inquisitiveness, teamwork, and a solution-oriented mindset. Yes, and caffeine—plenty of caffeine. Become part of a group that values your distinct talents and aids you in realizing your utmost capabilities.
                        </p>
                    </div>
                    <h2 className="text-2xl md:text-3xl  font-bold uppercase">
                        join our team
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionFour;
