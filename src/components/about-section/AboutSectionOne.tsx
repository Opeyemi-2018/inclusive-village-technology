import Image from "next/image";
import LinkWithArrow from "../contactButton";

const AboutSectionOne = () => {
    return (
        <div className="lg:px-10 px-3 py-36">
            <div>
                <div className="flex items-center gap-3 pb-14">
                    <p className="text-lg font-semibold">Get To Know Us</p>
                    <span className="w-3 h-3 bg-orange-600 rounded-full inline-block"></span>
                </div>

                <div className='space-y-1 font-unbounded text-[#0b0b0b]'>
                    <h1 className='lg:text-[34px] font-bold uppercase text-3xl'>About Inclusive</h1>
                    <h1 className='lg:text-[34px] font-bold uppercase text-3xl'>Village Technologies</h1>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row  justify-between gap-6 pt-20">
                <div className="w-full lg:flex lg:items-center lg:pt-24">
                    <Image
                        src={'/man-2.avif'}
                        alt="man"
                        width={500}
                        height={400}
                        className="w-full  lg:h-[450px] h-[300px] object-cover rounded-lg"
                    />
                </div>
                <div className="w-full">
                    <Image
                        src={'/men.avif'}
                        alt="man"
                        width={500}
                        height={400}
                        className="w-full  lg:h-[450px] h-[300px] object-cover rounded-lg"
                    />
                </div>
                <div className="w-full  flex flex-col md:gap-20 gap-10">
                    <p className="text-[#0b0b0b] font-inter text-[18px] order-1 lg:order-2">
                        Empowering innovation. Delivering value. Creating systems that scale.

                        At Inclusive Village Technologies, we’re more than a software company — we’re a
                         business-first technology consulting firm committed to transforming operations 
                         through scalable digital systems
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
                        className="w-full  h-[300px] object-cover rounded-lg order-3 lg:order-1"
                    />
                </div>

            </div>
        </div>
    );
};

export default AboutSectionOne;
