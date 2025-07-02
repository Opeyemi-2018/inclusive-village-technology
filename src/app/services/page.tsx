import Image from "next/image"
import Link from "next/link"

const services = [
    {
        image: '/ipad.avif',
        title: 'Financial Services',
        type: '(e.g. POS, Banking Systems)',
    },
    {
        image: '/black-case.avif',
        title: 'Integration Services',
        type: '(e.g. NIBSS, USSD, Mastercard)',
    },
    {
        image: '/ipad.avif',
        title: 'Management Systems',
        type: '(e.g. Education, Estate)',
    },
    {
        image: '/black-case.avif',
        title: 'Infrastructure Solutions',
        type: '(Cloud, DevOps)',
    }
]

const Work = () => {
    return (
        <div className="lg:px-10 px-3 pt-36">
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">what we do</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <div className="flex items-center lg:text-6xl text-4xl pt-4 flex-col font-unbounded uppercase text-center md:gap-0 gap-2">
                    <h1 className="flex-1 pt-2  font-bold flex items-center">
                        Our
                    </h1>
                    <h1 className="flex-1 pt-2  font-bold flex items-center">
                        services
                    </h1>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 pt-20">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg"
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                        />

                        <div
                            className="absolute bottom-0 left-0 w-full h-full 
                        bg-gradient-to-t from-orange-600 via-orange-600/50 to-transparent 
                        opacity-100 md:opacity-0 md:group-hover:opacity-100 
                        transition-opacity duration-500"
                        />

                        <div
                            className="absolute w-full px-6 pb-6 text-white 
                        bottom-0 md:bottom-[-100%] 
                        md:group-hover:bottom-0 
                        transition-all duration-500"
                        >
                            <div className="space-y-4">
                                <div>
                                    <h1 className="text-2xl font-bold">{service.title}</h1>
                                    <p className="text-sm">{service.type}</p>
                                </div>

                                <Link
                                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-sm underline text-white text-nowrap hover:text-orange-200 transition"
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work
