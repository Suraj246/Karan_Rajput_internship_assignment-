
"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";


const SectionEight = () => {
    return (
        <section className="w-full my-22 bg-white py-16 px-6 md:px-20 text-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="flex">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: .5 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-6">
                        <h2 className="text-3xl md:text-3xl font-bold">
                            LOREM IPSUM DOLOR SIT AMET
                        </h2>

                        <div className="flex flex-wrap md:flex-nowrap">
                            <Button variant="outline" className="bg-white px-10 md:px-18 text-[#1959AC] hover:bg-gray-100">
                                Research
                            </Button>
                            <Button variant="outline" className="bg-white px-10 md:px-18 text-[#1959AC] hover:bg-gray-100">
                                Plan
                            </Button>
                            <Button variant="outline" className="bg-white px-10 md:px-18 text-[#1959AC] hover:bg-gray-100">
                                Design
                            </Button>
                        </div>

                        <p className="text-black text-base md:text-lg">
                            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
                        </p>

                        <Link href="#" className="inline-block text-[#0546D2] font-semibold hover:underline">
                            Check tools →
                        </Link>
                    </motion.div>
                    <div className="hidden md:block " >
                        <Image
                            src="/icons.png"
                            alt="icons"
                            width={400}
                            height={300}
                            className="w-full h-auto object-cover "
                        />
                    </div>
                </div>

                <div className="w-full">
                    <Image
                        src="/handshake1.png"
                        alt="Handshake"
                        width={500}
                        height={300}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
            </div>
        </section>


    )
}

export default SectionEight
