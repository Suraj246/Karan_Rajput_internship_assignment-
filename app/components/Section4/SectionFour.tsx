"use client"
import Image from 'next/image'

import { motion } from "framer-motion";
import SectionFourCards from './SectionFourCards';

const SectionFour = () => {
    const cardObjects: { imageSrc: string; title: string; description: string; }[] = [
        {
            imageSrc: "/section4-images/Frame1.png",
            title: "Lorem ipsum dolor sit amet consectetur.",
            description: ` Lorem ipsum dolor sit amet consectetur.Nunc gravida consequat
                                faucibus cursus nisi.Nunc montes molestie a vitae vulputate.
                                Phasellus in pulvinar et vitae.Mi eget lectus nec et.Libero
                                iaculis diam nam mauris a eget.Quam nibh rhoncus rhoncus enim
                                venenatis bibendum.`
        },
        {
            imageSrc: "/section4-images/Frame2.png",
            title: "Lorem ipsum dolor sit amet consectetur.",
            description: ` Lorem ipsum dolor sit amet consectetur.Nunc gravida consequat
                                faucibus cursus nisi.Nunc montes molestie a vitae vulputate.
                                Phasellus in pulvinar et vitae.Mi eget lectus nec et.Libero
                                iaculis diam nam mauris a eget.Quam nibh rhoncus rhoncus enim
                                venenatis bibendum.`
        },
        {
            imageSrc: "/section4-images/Frame3.png",
            title: "Lorem ipsum dolor sit amet consectetur.",
            description: ` Lorem ipsum dolor sit amet consectetur.Nunc gravida consequat
                                faucibus cursus nisi.Nunc montes molestie a vitae vulputate.
                                Phasellus in pulvinar et vitae.Mi eget lectus nec et.Libero
                                iaculis diam nam mauris a eget.Quam nibh rhoncus rhoncus enim
                                venenatis bibendum.`
        },
        {
            imageSrc: "/section4-images/Frame4.png",
            title: "Lorem ipsum dolor sit amet consectetur.",
            description: ` Lorem ipsum dolor sit amet consectetur.Nunc gravida consequat
                                faucibus cursus nisi.Nunc montes molestie a vitae vulputate.
                                Phasellus in pulvinar et vitae.Mi eget lectus nec et.Libero
                                iaculis diam nam mauris a eget.Quam nibh rhoncus rhoncus enim
                                venenatis bibendum.`
        },
    ]

    return (
        <>
            <div className="relative w-full h-full mt-20">
                <Image
                    src="/section4-images/Capa 1.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
                <div className="relative p-4 z-10 flex flex-col md:pl-20 max-w-7xl mx-auto h-full">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className=" flex flex-col gap-3 mb-14">
                        <h2 className="text-xl md:text-2xl text-[#0546D2]">Lorem ipsum dolor sit amet</h2>
                        <h1 className="text-2xl md:text-4xl font-bold">LOREM IPSUM DOLOR SIT</h1>
                        <p className="max-w-3xl  text-gray-700">
                            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: .6 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full lg:max-w-4xl grid grid-cols-1 gap-18 md:grid-cols-2 mx-auto">
                        {cardObjects.map((card, idx) => {
                            return (
                                <SectionFourCards key={idx} card={card} />
                            )
                        })}
                    </motion.div>

                </div>

            </div>


        </>

    )
}

export default SectionFour
