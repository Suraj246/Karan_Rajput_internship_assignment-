"use client"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
const SectionThree = () => {
    return (

        <div className="relative mt-40 mb-12 w-full h-screen overflow-hidden text-white">
            <div
                className="absolute  inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/section3-images/twobikebg.png')",
                }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
                <div className="absolute top-6 left-6 bg-white text-black px-6 py-4 font-bold text-md ">
                    LOGO
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='flex flex-col gap-6'>
                    <h1 className="text-2xl md:text-3xl font-bold max-w-4xl leading-snug">
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
                    </h1>

                    <p className="max-w-3xl text-sm md:text-base text-gray-200">
                        Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.
                    </p>
                    <p className="max-w-3xl text-sm md:text-base text-gray-200">
                        Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
                    </p>
                    <div>
                        <Button type="submit" variant="secondary" className="text-black cursor-pointer h-10 w-40 rounded-1 hover:bg-blue-700">
                            Lorem ipsum <ArrowRightIcon />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default SectionThree
