import Image from "next/image";
import LinkWithArrow from "../contactButton";

const recentWorks = [

    {
        id: 3,
        name: "AfriPay+",
        type: "Gateway System",
        info: "A fast, secure, and developer-friendly payment gateway transforming how businesses collect payments across Africa.",
        image: "/optimization.jpg"
    },
    {
        id: 4,
        name: "Inclusive Remittance",
        info: "A compliant, multi-channel remittance platform enabling global money transfer with local payout efficiency.",
        type: "Gateway System",
        image: "/optimization.jpg"
    },
    {
        id: 5,
        name: "Afripay Learn",
        info: "A full-featured learning management system for schools and institutions.",
        type: "Gateway System",
        image: "/optimization.jpg"
    },
    {
        id: 6,
        name: "Eazybiller",
        info: "An invoicing and billing automation solution that simplifies finances for SMEs.",
        type: "Gateway System",
        image: "/optimization.jpg"
    }
];

const HomeSectionThree = () => {
    return (
        <div className=" lg:px-10 px-3">
            <div className="flex flex-col lg:flex-row justify-between items-start  gap-6 lg:mb-12 mb-2">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold ">Recent Works</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="md:text-7xl md:w-auto w-[50px] text-4xl font-bold mb-20 flex lg:justify-end font-unbounded uppercase">Recent Work</h1>
            </div>
            <div className="grid gap-14 lg:grid-cols-2">
                {recentWorks.map(({ id, name, type, info, image }) => (
                    <div key={id}>
                        <div className="w-full h-[300px] md:h-[400px]  relative rounded-lg overflow-hidden">
                            <Image
                                src={image}
                                alt={name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <p className="capitalize md:text-3xl text-2xl ">{name}</p>
                                <p className="text-gray-500 text-[20px]">{type}</p>
                            </div>
                            <p className="text-gray-800 pt-3 text-[20px]">{info}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center pt-20">
                <LinkWithArrow
                    href="/contact"
                    label="view more work"
                    underlineColor="bg-black"
                    iconColor="text-orange-600"
                />
            </div>
        </div>
    );
};

export default HomeSectionThree;
