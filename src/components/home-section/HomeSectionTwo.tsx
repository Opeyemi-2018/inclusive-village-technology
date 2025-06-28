import Image from "next/image";

const HomeSectionTwo = () => {
    const clientLogos = [
        "/sayswitch.jpg", "/sayswitch.jpg", "/sayswitch.jpg", "/sayswitch.jpg", "/sayswitch.jpg",
        "/sayswitch.jpg", "/sayswitch.jpg", "/sayswitch.jpg", "/sayswitch.jpg", "/sayswitch.jpg"
    ];
    const logos = [...clientLogos, ...clientLogos];

    return (
        <div className="lg:px-10 px-3 py-48">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-20 gap-4">
                <div className="w-full lg:w-auto">
                    <Image
                        src={'/man.avif'}
                        alt="man"
                        width={1000}
                        height={600}
                        className="rounded-lg w-[600px] h-[400px] "
                    />
                </div>

                <div className="max-w-[750px] mt-4 lg:mt-0 lg:inline hidden space-y-10">
                    <p className="text-3xl font-semibold leading-relaxed">
                        Pixelhive studio creates compelling brand identities with distinctive logos, typography, and visuals that resonate. We craft seamless digital experiences that elevate brands, foster connections, and drive results.
                    </p>

                    <div className="flex items-center justify-between pt-5">
                        <div className="flex flex-col">
                            <h1 className="text-orange-600 text-5xl font-extrabold">200 +</h1>
                            <p className="text-gray-700 text-[18px]">Projects delivered</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-orange-600 text-5xl font-extrabold">95%</h1>
                            <p className="text-gray-700 text-[18px]">Client satisfaction</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-orange-600 text-5xl font-extrabold">12 +</h1>
                            <p className="text-gray-700 text-[18px]">Years of experience</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden pt-20 bg-white">
                <div className="whitespace-nowrap animate-slide">
                    {logos.map((logo, index) => (
                        <Image
                            key={index}
                            src={logo}
                            alt={`Client ${index}`}
                            width={100}
                            height={100}
                            className="inline-block mx-6 grayscale hover:grayscale-0 transition duration-300"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeSectionTwo;
