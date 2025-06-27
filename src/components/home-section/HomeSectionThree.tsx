import Image from "next/image";

const recentWorks = [

    {
        id: 3,
        name: "TravelEase",
        type: "Web",
        year: "December 10, 2024",
        image: "/optimization.jpg"
    },
    {
        id: 4,
        name: "Fintrack",
        type: "App",
        year: "December 10, 2024",
        image: "/optimization.jpg"
    },
    {
        id: 5,
        name: "EduConnect",
        type: "Web",
        year: "December 10, 2024",
        image: "/optimization.jpg"
    },
    {
        id: 6,
        name: "Eventio",
        type: "App",
        year: "December 10, 2024",
        image: "/optimization.jpg"
    }
];

const HomeSectionThree = () => {
    return (
        <div className=" lg:px-10 px-3">
            <h1 className="text-8xl font-bold mb-10 flex lg:justify-end">Recent Work</h1>
            <div className="grid gap-10 lg:grid-cols-2">
                {recentWorks.map(({ id, name, type, year, image }) => (
                    <div key={id}>
                        <div className="w-full h-[300px] md:h-[400px] relative rounded-lg overflow-hidden">
                            <Image
                                src={image}
                                alt={name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-between text-lg font-medium">
                            <div>
                                <p className="capitalize text-2xl">{name}</p>
                                <p className="text-gray-500 text-sm">{type}</p>
                            </div>
                            <p className="text-gray-800">{year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeSectionThree;
