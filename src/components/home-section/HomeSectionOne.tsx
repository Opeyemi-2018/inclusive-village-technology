
import Image from "next/image";
import LinkWithArrow from "../contactButton";

const HomeSectionOne = () => {
    return (
        <div>
            <div className=" lg:px-10  lg:pt-0 pt-2 flex flex-col space-y-12 relative">
                <div className="flex flex-col px-2 items-center justify-center w-full font-bold ">
                    <h1 className="w-full text-[22vw] text-center leading-none  whitespace-nowrap overflow-hidden">
                        inclusive
                    </h1>
                    <h2 className="lg:text-5xl text-3xl">village technology</h2>
                </div>

                {/* <div className="flex justify-center relative lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
                    <Image
                        src="/frame.avif"
                        width={100}
                        height={100}
                        alt="hero image"
                        className="object-cover lg:h-96 h-56 lg:w-80 w-56"
                    />
                </div> */}


                <div className="flex px-3 md:items-center md:gap-0 gap-14 justify-between md:flex-row flex-col">
                    <p className="max-w-[500px] text-[19px] text-gray-800 leading-relaxed">At pixelHive, our expertise lies in web design, ui/ux, creating a brand identity, and enhancing your online visibility. </p>
                    <div>
                        <LinkWithArrow
                            href="/contact"
                            label="get in touch"
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