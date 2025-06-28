import Image from "next/image"
const Blog = () => {
    return (
        <div className="lg:px-10 px-3 pt-36">
            <div className="flex flex-col justify-center items-center ">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Ideas & Tips</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <div className='flex items-center flex-col gap-0 md:gap-20 uppercase md:flex-row'>
                    <h1 className="flex-1 pt-2 lg:text-8xl text-5xl  font-bold max-w-[300px] mx-auto flex items-center">
                        Latest

                    </h1>
                    <h1 className="flex-1 pt-2 lg:text-8xl text-5xl  font-bold max-w-[300px] mx-auto flex items-center">
                        Articles
                    </h1>
                </div>
            </div>

            <div className="grid lg:grid-cols-3  gap-10 pt-20">
                <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex  flex-col">
                        <Image src={'/developer.avif'} alt="ipad" width={1000} height={1000} className="rounded-lg" />
                        <div className="pt-6">
                            <div className="flex items-center gap-3 pb-2">
                                <span className="w-4 h-4 bg-black rounded-full inline-block"></span>
                                <p className="text-sm text-gray-700">UI / UX Design</p>
                            </div>
                            <p className="text-2xl">
                                Boosting Engagement with Smart UX Design
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex  flex-col">
                        <Image src={'/developer.avif'} alt="ipad" width={1000} height={1000} className="rounded-lg" />
                        <div className="pt-6">
                            <div className="flex items-center gap-3 pb-2">
                                <span className="w-4 h-4 bg-black rounded-full inline-block"></span>
                                <p className="text-sm text-gray-700">UI / UX Design</p>
                            </div>
                            <p className="text-2xl">
                                Boosting Engagement with Smart UX Design
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex  flex-col">
                        <Image src={'/developer.avif'} alt="ipad" width={1000} height={1000} className="rounded-lg" />
                        <div className="pt-6">
                            <div className="flex items-center gap-3 pb-2">
                                <span className="w-4 h-4 bg-black rounded-full inline-block"></span>
                                <p className="text-sm text-gray-700">UI / UX Design</p>
                            </div>
                            <p className="text-2xl">
                                Boosting Engagement with Smart UX Design
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex  flex-col">
                        <Image src={'/developer.avif'} alt="ipad" width={1000} height={1000} className="rounded-lg" />
                        <div className="pt-6">
                            <div className="flex items-center gap-3 pb-2">
                                <span className="w-4 h-4 bg-black rounded-full inline-block"></span>
                                <p className="text-sm text-gray-700">UI / UX Design</p>
                            </div>
                            <p className="text-2xl">
                                Boosting Engagement with Smart UX Design
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex  flex-col">
                        <Image src={'/developer.avif'} alt="ipad" width={1000} height={1000} className="rounded-lg" />
                        <div className="pt-6">
                            <div className="flex items-center gap-3 pb-2">
                                <span className="w-4 h-4 bg-black rounded-full inline-block"></span>
                                <p className="text-sm text-gray-700">UI / UX Design</p>
                            </div>
                            <p className="text-2xl">
                                Boosting Engagement with Smart UX Design
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex  flex-col">
                        <Image src={'/developer.avif'} alt="ipad" width={1000} height={1000} className="rounded-lg" />
                        <div className="pt-6">
                            <div className="flex items-center gap-3 pb-2">
                                <span className="w-4 h-4 bg-black rounded-full inline-block"></span>
                                <p className="text-sm text-gray-700">UI / UX Design</p>
                            </div>
                            <p className="text-2xl">
                                Boosting Engagement with Smart UX Design
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog