import Image from "next/image";
import LinkWithArrow from "../contactButton";

const AboutSectionOne = () => {
    return (
        <div className="lg:px-10 px-3 py-36">
            <div>
                <div className="flex items-center gap-3 pb-14">
                    <p className="text-lg font-semibold">Get To Know Us</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>

                <div className='space-y-1 font-unbounded'>
                    <h1 className='lg:text-4xl font-bold uppercase text-3xl'>Establishing online</h1>
                    <h1 className='lg:text-4xl font-bold uppercase text-3xl'>brilliance from 2025</h1>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 pt-20">
                <div className="w-full lg:w-auto">
                    <Image
                        src={'/man-2.avif'}
                        alt="man"
                        width={500}
                        height={400}
                        className="w-full lg:w-[400px] h-[300px] object-cover rounded-lg"
                    />
                </div>
                <div className="w-full lg:w-auto">
                    <Image
                        src={'/men.avif'}
                        alt="man"
                        width={500}
                        height={400}
                        className="w-full lg:w-[400px] h-[300px] object-cover rounded-lg"
                    />
                </div>
                <div className="w-full lg:w-auto max-w-md flex flex-col md:gap-16 gap-10">
                    <p className="text-gray-700 order-1 lg:order-2">
                        At PixelHive, we aren&apos;t simply a virtual organization — we&apos;re a
                        collective of inventive troubleshooters who trust in the potential of mindful
                        virtual answers to revolutionize businesses.
                    </p>

                    <LinkWithArrow
                        href="/contact"
                        label="get in touch"
                        underlineColor="bg-black"
                        iconColor="text-orange-600"
                        className="order-2 lg:order-3"
                    />

                    <Image
                        src={'/table.avif'}
                        alt="table"
                        width={500}
                        height={400}
                        className="w-full lg:w-[400px] h-[300px] object-cover rounded-lg order-3 lg:order-1"
                    />
                </div>

            </div>
        </div>
    );
};

export default AboutSectionOne;
