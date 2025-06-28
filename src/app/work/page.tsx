import Image from "next/image"
const Work = () => {
    return (
        <div className="lg:px-10 px-3 pt-36">
            <div className="flex flex-col justify-center items-center ">
                <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold">Recent Work</p>
                    <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
                </div>
                <div className='flex items-center md:flex-col uppercase text-center md:gap-0 gap-2 flex-row'>
                    <h1 className="flex-1 pt-2 lg:text-9xl  text-6xl capitalize font-bold flex items-center">
                        Recent
                    </h1>
                    <h1 className="flex-1 pt-2 lg:text-9xl  text-6xl capitalize font-bold flex items-center">
                        work
                    </h1>
                </div>
            </div>

            <div className="grid lg:grid-cols-2  gap-10 pt-20">
                <div className="flex  flex-col">
                    <Image src={'/ipad.avif'} alt="ipad" width={1000} height={1000} className="rounded-lg" />
                    <div className="flex items-center justify-between pt-8">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-semibold text-gray-900">Inova Site</h1>
                            <p className="text-[18px] text-gray-700">Ui design</p>
                        </div>
                        <p className="text-[18px] text-gray-700">Dec 10, 2024</p>
                    </div>
                </div>
                <div className="flex  flex-col">
                    <Image src={'/black-case.avif'} alt="ipad" width={1000} height={1000} className="rounded-lg" />
                    <div className="flex items-center justify-between pt-8">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-semibold text-gray-900">Inova Site</h1>
                            <p className="text-[18px] text-gray-700">Ui design</p>
                        </div>
                        <p className="text-[18px] text-gray-700">Dec 10, 2024</p>
                    </div>
                </div>
                <div className="flex  flex-col">
                    <Image src={'/ipad.avif'} alt="ipad" width={1000} height={1000} className="rounded-lg" />
                    <div className="flex items-center justify-between pt-8">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-semibold text-gray-900">Inova Site</h1>
                            <p className="text-[18px] text-gray-700">Ui design</p>
                        </div>
                        <p className="text-[18px] text-gray-700">Dec 10, 2024</p>
                    </div>
                </div>
                <div className="flex  flex-col">
                    <Image src={'/black-case.avif'} alt="ipad" width={1000} height={1000} className="rounded-lg" />
                    <div className="flex items-center justify-between pt-8">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-semibold text-gray-900">Inova Site</h1>
                            <p className="text-[18px] text-gray-700">Ui design</p>
                        </div>
                        <p className="text-[18px] text-gray-700">Dec 10, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work