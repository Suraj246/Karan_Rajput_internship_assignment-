import Image from 'next/image'

const DownloadAd = () => {
    return (
        <div className="w-full bg-[#F3F3F3] px-6 md:px-16 py-6 md:py-8 lg:py-0 ">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                <div className="max-w-xl space-y-6 text-center lg:text-left">
                    <h2 className="text-xl md:text-2xl text-[#0546D2] font-semibold">Lorem Ipsum</h2>
                    <h1 className="text-2xl md:text-4xl font-bold">Lorem Ipsum Dolor Sit Amet</h1>
                    <p className="text-gray-700 text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis.
                        Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
                    </p>

                    <div className="flex md:flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                        <div>
                            <Image
                                src="/downloadad/playstore.png"
                                alt="Phone Mockup"
                                width={200}
                                height={200}
                                className="object-contain "
                            />
                        </div>
                        <div>
                            <Image
                                src="/downloadad/apple.png"
                                alt="Phone Mockup"
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className=" hidden lg:block lg:w-7xl  ">
                    <Image
                        src="/downloadad/phone.png"
                        alt="Phone"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default DownloadAd

