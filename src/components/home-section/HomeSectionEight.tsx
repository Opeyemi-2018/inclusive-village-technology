'use client';
import Image from 'next/image';
// import Link from 'next/link';
// import { MdOutlineArrowOutward } from 'react-icons/md';
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
        title: "backend engineering",
        image: "/man.avif",
        description: "from code to launch web development"
    },
    {
        id: 2,
        title: "software engineering",
        image: "/man.avif",
        description: "from code to launch web development"

    },
    {
        id: 3,
        title: "technical writing",
        image: "/man.avif",
        description: "from code to launch web development"

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
                            <span className="w-5 h-5 bg-black  rounded-full inline-block"></span>
                            <h3 className="capitalize">
                                {blog.title}
                            </h3>
                        </div>
                        <p className="text-[24px] capitalize">
                            {blog.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className='flex items-center justify-center pt-16'>
                 <LinkWithArrow
                            href="/contact"
                            label="get in touch"
                            underlineColor="bg-black"
                            iconColor="text-orange-600"
                        />
            </div>



        </div>
    );
};

export default HomeSectionEight;