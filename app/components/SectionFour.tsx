"use client"
import Image from 'next/image'
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import Link from 'next/link'
import { motion } from "framer-motion";

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
        <div
            className="w-full  h-fit bg-cover bg-left scale-x-100 mt-22 mb-22"
            style={{
                backgroundImage: "url('/section4-images/Capa 1.png')",
            }}
        >
            <div className="flex flex-col md:pl-20   max-w-7xl mx-auto h-full">
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
                            <Card key={idx}

                                className="overflow-hidden p-0 border-0 shadow-lg ">
                                <div className="md:w-[444px] h-52 ">
                                    <Image
                                        src={card.imageSrc}
                                        alt="Card 1"
                                        width={444}
                                        height={256}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold">
                                        {card.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm">
                                        {card.description}
                                    </p>
                                </CardContent>
                                <CardFooter className='mb-12'>
                                    <Link
                                        href="#"
                                        className="text-blue-600 font-medium underline"
                                    >
                                        Learn More
                                    </Link>
                                </CardFooter>
                            </Card>

                        )
                    })}
                </motion.div>

            </div>
        </div>
    )
}

export default SectionFour
