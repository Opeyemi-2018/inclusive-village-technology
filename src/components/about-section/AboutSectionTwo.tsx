import React from 'react'

const AboutSectionTwo = () => {
    return (
        <div className="lg:px-10 px-3 pb-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 pb-14">
                    <p className="text-lg font-semibold">Our Mission/Vission</p>
                    <span className="w-3 h-3 bg-orange-600 rounded-full inline-block"></span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 font-inter text-[#0b0b0b]">
                    <div className="flex flex-col">
                        <h2 className="text-[34px] sm:text-5xl lg:text-6xl font-bold font-unbounded mb-6 tracking-tight">
                            OUR VISION
                        </h2>
                        <p className="text-lg text-[18px] leading-relaxed">
                            Our Vision is to bring to services delivery a rare standard of quality output and professionalism that would guarantee the organization an unassailable competitive edge against the best in the technology industry, and by doing maintain a brand that inspires great confidence in prospective clients.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-unbounded mb-6 tracking-tight">
                            OUR MISSION
                        </h2>
                        <p className="text-lg text-[18px] leading-relaxed">
                            Our Mission is to deliver to our client’s exceptional quality service within the time and budget schedules, in order to earn new clients while retaining the old ones with satisfactory services delivery.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSectionTwo