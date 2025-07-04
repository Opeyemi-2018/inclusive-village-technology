'use client'
import Image from "next/image"
import LinkWithArrow from "../contactButton"

const HomeSectionOne = () => {
    return (
        <div>
            <div className="lg:px-10 px-3 lg:pt-0 pt-2 flex flex-col space-y-12 relative">
                <div className="flex flex-col items-center justify-center w-full font-semibold font-inter">
                    <h1 className="w-full tracking-tighter text-[18vw] capitalize text-center font-unbounded leading-none whitespace-nowrap">
                        inclusive
                    </h1>

                    <h2 className="lg:text-4xl text-xl font-unbounded uppercase">village technology</h2>
                </div>

                {/* <div className="flex justify-center relative lg:static animate-up">
                    <div
                        className="w-56 h-56 lg:w-80 lg:h-96 relative lg:absolute lg:inset-1/2 lg:-translate-x-1/2 lg:-translate-y-[60%] perspective z-10"
                        id="flipCard"
                    >
                        <div className="w-full h-full preserve-3d" id="flipInner">
                            <div className="absolute w-full h-full backface-hidden">
                                <Image
                                    src="/work-2.avif"
                                    fill
                                    alt="Front Image"
                                    className="object-cover"
                                />
                            </div>
                            
                            <div className="absolute w-full h-full backface-hidden rotate-y-180">
                                <Image
                                    src="/work-1.avif"
                                    fill
                                    alt="Back Image"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div> */}


                <div className="flex flex-col lg:flex-row justify-between gap-12 pt-14">
                    <p className="text-[19px] text-gray-800 leading-relaxed max-w-md">
                        At Inclusive Village, we&apos;re more than a tech company we&apos;re your strategic partner in digital transformation.
                    </p>
                    <div>
                        <LinkWithArrow
                            href="/contact"
                            label="Let's Talk"
                            underlineColor="bg-black"
                            iconColor="text-orange-600"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full md:h-[40rem] h-72 overflow-hidden rounded-3xl mt-20">
                <Image
                    src="/space.jpg"
                    width={1000}
                    height={1000}
                    alt="hero image"
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>
        </div>
    )
}

export default HomeSectionOne
