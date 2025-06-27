// import Link from "next/link";
// import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import LinkWithArrow from "../contactButton";

const HomeSectionOne = () => {
    return (
        <div>
            <div className=" lg:px-10 px-3 lg:pt-0 pt-4 flex flex-col space-y-20">
                <div className="flex flex-col items-center justify-center w-full font-bold ">
                    <h1 className="w-full text-[21vw] text-center leading-none  whitespace-nowrap overflow-hidden">
                        inclusive
                    </h1>
                    <h2 className="lg:text-5xl text-3xl">village technology</h2>
                </div>
                <div className="flex md:items-center md:gap-0 gap-14 justify-between md:flex-row flex-col">
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
            <Image src={'/banner.jpg'}
                width={1000} height={1000} alt="hero image"
                className="w-full object-cover rounded-2xl pt-4" />
        </div>
    )
}

export default HomeSectionOne