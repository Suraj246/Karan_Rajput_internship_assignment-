
"use client"
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import { motion } from "framer-motion";


const SectionSeven = () => {
    return (
        <>

            <div className="relative w-full h-full bg-cover  py-20">
                <Image
                    src="/section6-images/Bg-Graphic.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="bg-[#F8F8F8] relative z-10  e md:mt-24  w-full mx-auto px-6 md:px-16 py-12">
                    <div className=" flex flex-col lg:flex-row items-center gap-12">

                        <div className="hidden md:block w-full relative h-[550px] lg:w-[550px]">
                            <Image
                                src="/onroad.png"
                                alt="Motorcyclists interacting"
                                width={800}
                                height={600}
                                className=" top-[-100] absolute  w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ ease: "easeOut", duration: .5 }}
                            viewport={{ once: true, amount: 0.3 }}

                            className="bg-[#F8F8F8] ml-auto  w-full  lg:w-1/2 space-y-8 text-center lg:text-left">
                            <h2 className="text-xl md:text-2xl text-[#0546D2] font-semibold">Lorem ipsum</h2>
                            <h1 className="text-2xl md:text-4xl font-bold">
                                LOREM IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
                            </h1>
                            <p className="text-gray-700 text-sm md:text-base">
                                Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-sm md:text-base text-gray-800">
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                                <span>Lorem Ipsum</span>
                            </div>

                            <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold text-white flex items-center gap-2">
                                Loerum Ipsum <ArrowRightIcon />
                            </Button>

                        </motion.div>
                    </div>
                    <div className='
            bg-[linear-gradient(90deg,#043898_0%,#079902_45.96%,#170041_91.18%)] 
            absolute bottom-[-3] lg:left-15 z-50 mt-4 
              w-[91.7dvw] 
             h-5'>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SectionSeven
