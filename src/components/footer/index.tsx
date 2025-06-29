import Image from "next/image"
import Link from "next/link"
import { RiTwitterXLine } from "react-icons/ri"


const Footer = () => {
    return (
        <div className="lg:px-10 px-3 py-16 bg-gray-100 rounded-tr-3xl rounded-tl-3xl">
            <div className=" flex flex-col justify-center gap-10">
                <div className="flex items-center justify-center flex-col gap-5">
                    <Image src={'/iv-logo-no-bg.png'} alt="iv logo" width={100} height={100} />
                    <Link href={'/#'} className="font-semibold md:text-4xl text-2xl"> Contact@inclusive.com</Link>
                </div>
                <div className="flex items-center flex-col gap-4 pt-7 justify-center">
                    <h1 className="text-[20px] font-semibold">Menu links</h1>
                    <nav className="flex items-center lg:gap-7 gap-3 lg:flex-row flex-col">
                        <Link href={'/#'} >Home</Link>
                        <Link href={'/#'}>About</Link>
                        <Link href={'/#'}>Work</Link>
                        <Link href={'/#'}>Blog</Link>
                        <Link href={'/#'}>Contact</Link>
                    </nav>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 items-center justify-between pt-14">
                <div className="text-[20px] flex flex-col lg:items-start items-center gap-3">
                    <h2>Contact</h2>
                    <p className="text-gray-700">+1 (800) 123-4567</p>
                    <p className="text-gray-700 text-center">1701 Pine Street, San Francisco, CA 94115, US</p>
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

            {/* <div className="max-w-7xl"> */}
            <div className="flex md:flex-row flex-col gap-4 justify-center md:justify-start items-center md:gap-80 pt-6 text-[20px] text-gray-900">
                <p>© {new Date().getFullYear()} All rights reserved</p>

                <p>powered by inclusive</p>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Footer