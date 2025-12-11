"use client"

import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { motion } from "framer-motion";

// Each image item inside a group
type ImageItem = {
    wrapper: string;
    src: string;
    width: number;
    height: number;
    className: string;
    alt?: string;
};


type ImageGroup = {
    layout: string;
    items: ImageItem[];
};
const SectionSix = () => {

    const bikeImages: ImageGroup[] = [
        {
            layout: "flex gap-2 sm:gap-6",
            items: [
                {
                    wrapper: "w-1/4 flex items-end sm:w-1/5",
                    src: "/section6-images/bike4.png",
                    width: 200,
                    height: 200,
                    className: "w-full object-cover scale-x-[-1]",
                },
                {
                    wrapper: "w-3/4 sm:w-full",
                    src: "/section6-images/bike5.png",
                    width: 500,
                    height: 350,
                    className: "w-full h-full object-cover scale-x-[-1]",
                },
            ],
        },
        {
            layout: "w-full md:h-50",
            items: [
                {
                    wrapper: "w-full h-full",
                    src: "/section6-images/bike6.png",
                    width: 700,
                    height: 400,
                    className: "w-full h-full object-cover",
                },
            ],
        },
        {
            layout: "flex gap-2 sm:gap-6",
            items: [
                {
                    wrapper: "w-1/4 h-22.5 sm:w-1/5",
                    src: "/section6-images/bike6.png",
                    width: 200,
                    height: 200,
                    className: "w-full h-full object-cover scale-x-[-1]",
                },
                {
                    wrapper: "w-3/4 h-22.5 sm:w-full",
                    src: "/section6-images/bike7.png",
                    width: 500,
                    height: 300,
                    className: "w-full h-full object-cover scale-x-[-1]",
                },
            ],
        },
    ];
    ;
    return (

        <div className="relative w-full min-h-screen overflow-hidden">
            <Image
                src="/section4-images/Capa 1.png"
                alt="Background"
                fill
                className="object-cover object-center scale-x-[-1]"
                priority={false}
            />

            <div className="relative z-10">

                <div className="w-full">

                    <div className=" mt-30 md:p-20 bg-[#F1F5F9] flex flex-col md:flex-row justify-between items-start gap-10  mx-auto">


                        <div className="flex flex-col gap-15">
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
                            {bikeImages.map((group, idx) => (
                                <div key={idx} className={group.layout}>
                                    {group.items.map((img, i) => (
                                        <div key={i} className={img.wrapper}>
                                            <Image
                                                src={img.src}
                                                alt="bike"
                                                width={img.width}
                                                height={img.height}
                                                className={img.className}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SectionSix
