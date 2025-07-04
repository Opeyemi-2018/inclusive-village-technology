import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const solutionData = [
    {
        title: "Inclusive Remittance Management System",
        description: "A powerful, multi-channel remittance...",
        image: "/remittance.webp",
        slug: "inclusive-remittance",
    },
    {
        title: "Estate Management System",
        description: "Digitize the way you manage properties...",
        image: "/estate.jpg",
        slug: "estate-management",
    },
    {
        title: "Banking Software Solution",
        description: "From microfinance to...",
        image: "/banking.jpg",
        slug: "banking-software",
    },
    {
        title: "Enterprise Software Development",
        description: "Custom enterprise systems...",
        image: "/developer.avif",
        slug: "enterprise-software",
    },
    {
        title: "AfriPay+ Gateway System",
        description: "Your all-in-one payment gateway...",
        image: "/developer.avif",
        slug: "afripay-gateway",
    },
    {
        title: "Afripay Learn",
        description: "A complete education suite...",
        image: "/developer.avif",
        slug: "afripay-learn",
    },
];

const Solution = () => {
    return (
        <div className="lg:px-10 px-3 pt-36">
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Ideas & Tips</p>
                    <span className="w-5 h-5 pt-2 bg-orange-600 rounded-full inline-block"></span>
                </div>

                <h1 className="pt-10 uppercase font-unbounded md:text-6xl text-4xl font-bold">
                    Our solution
                </h1>
            </div>

            <div>
                <h1 className="lg:text-[27px] text-2xl md:pt-36 pt-24 font-bold uppercase font-unbounded">
                    Built to Solve. Designed to Scale.
                </h1>
                <div className="h-1 w-16 bg-orange-600 mt-2 rounded"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 pt-20">
                {solutionData.map((item, index) => (
                    <Link
                        key={index}
                        href={`/solution/${item.slug}`}
                        className=" border border-gray-200 font-inter rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
                    >
                        <div className="flex flex-col">
                            <div className="relative overflow-hidden ">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={1000}
                                    height={1000}
                                    className="h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                            </div>
                            <div className="pt-6 px-3">
                                <p className="text-[20px]">{item.title}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-[16px]">{item.description}</p>
                                    <FaArrowRightLong size={20} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Solution;