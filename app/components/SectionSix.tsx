"use client"

import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { motion } from "framer-motion";

// interface ImageData {
//     middle: string;
//     rightGrid: string[];
//     bottom: string[];
// }
const SectionSix = () => {

    // const images: ImageData = {
    //     middle: "/section6-images/img-middle.jpg",

    //     rightGrid: [
    //         "/section6-images/img1.jpg",
    //         "/section6-images/img2.jpg",
    //         "/section6-images/img3.jpg",
    //         "/section6-images/img4.jpg",
    //     ],

    //     bottom: [
    //         "/section6-images/img5.jpg",
    //         "/section6-images/img6.jpg",
    //     ],
    // };
    return (

        <div
            className="w-full min-h-screen bg-no-repeat overflow-hidden"
            style={{
                backgroundImage: "url('/section4-images/Capa 1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: "scaleX(-1)",
            }}
        >
            <div style={{ transform: "scaleX(-1)" }}>

                <div className="w-full">

                    <div className=" mt-30 md:p-20 bg-[#F1F5F9] flex flex-col md:flex-row justify-between items-start gap-10  mx-auto">


                        <div className="flex flex-col gap-12">
                            <div className="flex flex-col sm:flex-row gap-5">

                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ ease: "easeOut", duration: .5 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="flex flex-col gap-4">
                                    <span className="text-[20px]">NO LIMITS</span>

                                    <h4 className="text-2xl lg:text-4xl font-bold leading-tight">
                                        LOREM IPSUM DOLOR SIT <br /> AMET
                                    </h4>

                                    <p className="text-[16px] lg:text-[18px]">
                                        Lorem ipsum dolor sit amet consectetur. Nisi saepe amet excepturi
                                        odio eligendi mollitia quaerat provident nihil earum libero maxime dolor!
                                    </p>

                                    <Button className="bg-[#1959AC] h-10 lg:w-40 hover:bg-blue-700 text-white">
                                        Lorem Ipsum <ArrowRightIcon />
                                    </Button>
                                </motion.div>

                                <div className="flex items-end w-full sm:w-48">
                                    <Image
                                        src="/section6-images/bike1.png"
                                        alt="bike"
                                        width={300}
                                        height={300}
                                        className="w-full object-cover scale-x-[-1]"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-2 w-full">
                                <div className="w-1/3 flex items-end sm:w-1/4">
                                    <Image
                                        src="/section6-images/bike2.png"
                                        alt="bike"
                                        width={200}
                                        height={200}
                                        className="w-full h-auto scale-x-[-1]"
                                    />
                                </div>

                                <div className="w-2/3 sm:w-3/4">
                                    <Image
                                        src="/section6-images/bike3.png"
                                        alt="bike"
                                        width={300}
                                        height={300}
                                        className="w-full h-full object-cover scale-x-[-1]"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="w-full md:max-w-xl flex flex-col gap-6">

                            <div className="flex gap-2 sm:gap-6">
                                <div className="w-1/4 flex items-end sm:w-1/5">
                                    <Image
                                        src="/section6-images/bike4.png"
                                        alt="bike"
                                        width={200}
                                        height={200}
                                        className="w-full object-cover scale-x-[-1]"
                                    />
                                </div>
                                <div className="w-3/4 sm:w-full">
                                    <Image
                                        src="/section6-images/bike5.png"
                                        alt="bike"
                                        width={500}
                                        height={350}
                                        className="w-full h-full object-cover scale-x-[-1]"
                                    />
                                </div>
                            </div>

                            <div className="w-full md:h-50">
                                <Image
                                    src="/section6-images/bike6.png"
                                    alt="bike"
                                    width={700}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex gap-2 sm:gap-6">
                                <div className="w-1/4 h-22.5 sm:w-1/5">
                                    <Image
                                        src="/section6-images/bike6.png"
                                        alt="bike"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover scale-x-[-1]"
                                    />
                                </div>
                                <div className="w-3/4 h-22.5 sm:w-full">
                                    <Image
                                        src="/section6-images/bike7.png"
                                        alt="bike"
                                        width={500}
                                        height={300}
                                        className="w-full h-full object-cover scale-x-[-1]"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default SectionSix
