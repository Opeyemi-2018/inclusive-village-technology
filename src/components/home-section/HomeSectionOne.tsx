
import Image from "next/image";
import LinkWithArrow from "../contactButton";

const HomeSectionOne = () => {
    return (
        <div>
            <div className=" px-3  lg:pt-0 pt-2 flex flex-col space-y-12 relative">
                <div className="flex flex-col  items-center justify-center w-full font-bold font-unbounded">
                    <h1
                        className="w-full text-[17vw] capitalize text-center leading-none whitespace-nowrap bg-gradient-to-r from-blue-800 to-orange-600 bg-clip-text text-transparent"
                    >
                        inclusive
                    </h1>

                    <h2 className="lg:text-3xl text-1xl uppercase">village technology</h2>
                </div>


                <div className="lg:hidden flex justify-center relative lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
                    <Image
                        src="/frame.avif"
                        width={100}
                        height={100}
                        alt="hero image"
                        className="object-cover lg:h-96 h-56 lg:w-80 w-56"
                    />
                </div>


                <div className="flex px-3 md:items-center md:gap-0 gap-14 justify-between md:flex-row flex-col">
                    <p className="max-w-[500px] text-[19px] text-gray-800 leading-relaxed">At Inclusive Village, we’re more than a tech company—we’re your strategic partner in digital transformation. From fintech to education, our tailored software solutions are crafted to scale, secure, and simplify how you do business. </p>
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

            <div className="pt-16">
                <Image
                    src="/banner.jpg"
                    width={1000}
                    height={1000}
                    alt="hero image"
                    className="w-full object-cover md:h-auto h-64 rounded-3xl"
                />
            </div>
        </div>
    )
}

export default HomeSectionOne