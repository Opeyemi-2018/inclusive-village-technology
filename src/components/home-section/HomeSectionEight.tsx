'use client';
import Image from 'next/image';

import LinkWithArrow from '../contactButton';

interface BlogPost {
    id: number;
    title: string;
    image: string;
    description: string;
}

const blogs: BlogPost[] = [
    {
        id: 1,
        title: "software engineering",
        image: "/integration.jpg",
        description: "from code to launch Dominating 2025"
    },
    {
        id: 2,
        title: "cloud computting",
        image: "/red-men.avif",
        description: "How We Built a Cloud-Ready Remittance System"

    },
    {
        id: 3,
        title: "Design",
        image: "/designer.jpg",
        description: "Why UX Is the Missing Link in Africa’s Tech Boom"

    }
];
const HomeSectionEight = () => {
    return (
        <div className="lg:px-10 px-3 pt-40 pb-10 bg-white">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:mb-16 mb-5">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Latest Blog</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="flex-1 lg:text-7xl uppercase text-4xl font-unbounded font-bold max-w-2xl">
                    Our blog <br /> insights
                </h1>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-5 pt-6">
                {blogs.map((blog: BlogPost) => (
                    <div
                        key={blog.id}
                        className="w-full  border border-gray-200 rounded-lg gap-4 p-4 flex flex-col justify-between"
                    >
                        <div className="relative w-full h-64 mb-4">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className="w-3 h-3 bg-black  rounded-full inline-block"></span>
                            <h3 className="capitalize font-medium text-[14px] text-[#0b0b0b] font-inter">
                                {blog.title}
                            </h3>
                        </div>
                        <p className="text-[24px]  text-[#0b0b0b] font-inter capitalize">
                            {blog.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className='flex items-center justify-center pt-16'>
                <LinkWithArrow
                    href="/contact"
                    label="Let’s Talk"
                    underlineColor="bg-black"
                    iconColor="text-orange-600"
                />
            </div>



        </div>
    );
};

export default HomeSectionEight;