import Image from "next/image"
import Link from "next/link"
import { RiTwitterXLine } from "react-icons/ri"


const Footer = () => {
    return (
        <div className="lg:px-10 px-3 py-16 bg-gray-100 font-inter text-[#0b0b0b] rounded-tr-3xl rounded-tl-3xl">
            <div className=" flex flex-col justify-center gap-10">
                <div className="flex items-center justify-center flex-col gap-5">
                    <Image src={'/iv-logo-no-bg.png'} alt="iv logo" width={100} height={100} />
                    <Link href={'/#'} className=" md:text-[32px] text-2xl">info@ivillagetech.com</Link>
                </div>
                <div className="flex items-center flex-col gap-4 pt-7 justify-center">
                    <h1 className="text-[20px] ">Menu links</h1>
                    <nav className="flex items-center lg:gap-7 gap-3 lg:flex-row flex-col">
                        <Link href={'/home'} className="text-[16px]" >Home</Link>
                        <Link href={'/about'} className="text-[16px]">About</Link>
                        <Link href={'/services'} className="text-[16px]">Service</Link>
                        <Link href={'/solution'} className="text-[16px]">Solution</Link>
                        <Link href={'/contact'} className="text-[16px]">Contact</Link>
                    </nav>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 items-center justify-between pt-14">
                <div className="text-[20px] flex flex-col lg:items-start items-center gap-3">
                    <h2>Contact</h2>
                    <p className="text-[20px]">+234 (0) 903 822 4418</p>
                    <p className="text-gray-700 text-center">Eko Atlantic, Victoria Island, Lagos, Nigeria.
                        Banana Island, Ikoyi, Lagos, Nigeria.</p>
                </div>
                <div className="flex items-center gap-3 text-orange-600">
                    <RiTwitterXLine size={25} />
                    <RiTwitterXLine size={25} />
                    <RiTwitterXLine size={25} />
                    <RiTwitterXLine size={25} />
                </div>
            </div>

            <h1 className="w-full text-[17vw] capitalize text-center font-bold font-unbounded pt-6 leading-none  whitespace-nowrap">
                inclusive
            </h1>
            <p className="text-[20px] md:inline hidden py-8 text-center text-gray-800">Crafting human-centered digital products that empower businesses and communities.</p>

            <div className="flex md:flex-row flex-col gap-4 justify-center md:justify-start items-center md:gap-80 pt-6 text-[20px] text-gray-900">
                <p>© {new Date().getFullYear()} Inclusive Village </p>

                <p>All rights reserved</p>
            </div>
            
        </div>
    )
}

export default Footer