import React from 'react'

const AboutSectionTwo = () => {
    return (
        <div className="lg:px-10 px-3">
            <div className="max-w-7xl mx-auto">
                {/* Top section indicator */}
                <div className="flex items-center gap-3 pb-14">
                    <p className="text-lg font-semibold">Our Mission/Vission</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* OUR VISION Section */}
                    <div className="flex flex-col">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                            OUR VISION
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Bond started by defining a clear profile of the type of partners
                            Cloudbeds was looking for. Once the profile was agreed upon,
                            Bond started the outreach on Linkedin, Hospitality
                            communities and other online platforms.
                        </p>
                    </div>

                    {/* OUR MISSION Section */}
                    <div className="flex flex-col">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                OUR MISSION
                            </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Bond started by defining a clear profile of the type of partners
                            Cloudbeds was looking for. Once the profile was agreed upon,
                            Bond started the outreach on Linkedin, Hospitality
                            communities and other online platforms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSectionTwo