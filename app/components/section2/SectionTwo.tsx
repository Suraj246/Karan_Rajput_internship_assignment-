"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
import SectionTwoCards from './SectionTwoCards';
const SectionTwo = () => {

    return (

        <div className="relative w-full h-screen overflow-hidden">
            <Image
                src="/section2-images/Capa.png"
                alt="Background"
                fill
                className="object-cover object-center"
                priority={false}
            />

            <div className="absolute top-20 md:pl-12 bg-white w-full z-10">
                <div className="flex ml-auto items-center gap-8 pl-2">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex flex-col gap-2"
                    >
                        <div className="flex flex-col gap-4 md:w-2xl justify-between">
                            <h1 className="text-xl md:text-2xl text-[#0546D2]">Lorem ipsum dolor sit</h1>
                            <h3 className="text-2xl md:text-5xl font-bold">
                                Lorem ipsum dolor sit <br /> amet consectetur. Eu <br /> elit.
                            </h3>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi nulla
                                provident rerum possimus quis nihil? Sed nulla perferendis nisi soluta
                                libero maxime laboriosam, quo possimus autem? Dolorem, nesciunt cupiditate!
                            </span>
                        </div>

                        <SectionTwoCards />
                    </motion.div>

                    <div className="hidden lg:block w-7xl h-[620px]">
                        <Image
                            src="/section2-images/twomantalking.png"
                            alt="section1"
                            width={500}
                            height={100}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                <div
                    className="mt-8 mb-22 bg-[linear-gradient(90deg,#043898_0%,#079902_45.96%,#170041_91.18%)]
                 flex ml-auto w-[91.7dvw] h-5"
                ></div>
            </div>
        </div>


    )
}

export default SectionTwo