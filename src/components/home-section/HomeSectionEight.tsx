'use client';
import Image from 'next/image';

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
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:mb-12 mb-2">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Latest Blog</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <h1 className="flex-1 lg:text-7xl text-5xl capitalize font-bold max-w-2xl">
                    Our blog <br /> insights
                </h1>
            </div>

            <div className="flex flex-wrap justify-between gap-6">
                {blogs.map((blog: BlogPost) => (
                    <div
                        key={blog.id}
                        className="w-full sm:w-[48%] lg:w-[30%] border border-gray-200 rounded-lg p-4 flex flex-col justify-between"
                    >
                        <div className="relative w-full h-56 mb-4">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>

                        <h3 className="text-sm  text-gray-600">
                            {blog.title}
                        </h3>
                        <p className="text-[22px]  text-gray-900 ">
                            {blog.description}
                        </p>
                    </div>
                ))}
            </div>



        </div>
    );
};

export default HomeSectionEight;