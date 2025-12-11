
"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const SectionFive = () => {
    return (
        <div className="relative mt-40 mb-12 w-full h-[600px] overflow-hidden text-white">

            <Image src="/bgcomputer.png"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={500}
                alt="Overlay" />

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: .5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
                <div className="absolute top-6 left-6 bg-white text-black px-6 py-4 font-bold text-md ">
                    LOGO
                </div>

                <h1 className="text-2xl md:text-4xl font-bold max-w-4xl leading-snug">
                    dolor sit amet consectetur. Quis <br /> adipiscing purus egestas aliquam viverra <br />mi. dolor sit amet consectetur. Quis <br /> adipiscing
                </h1>

            </motion.div>
        </div>
    )
}

export default SectionFive
