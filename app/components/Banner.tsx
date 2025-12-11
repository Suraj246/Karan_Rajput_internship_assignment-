"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    ArrowRightIcon,
} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="relative w-full h-screen flex ">
            <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: .3, ease: "easeOut" }}
                className="flex flex-col justify-center sm:w-1/2 bg-white p-10 z-10">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Lorem ipsum dolor <br /> sit amet
                    </h1>
                    <span className="text-[#222222]">
                        Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
                        sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero
                        imperdiet neque. Justo suspendisse tristique posuere quis eget viverra.
                        Nunc euismod ultrices etiam nulla habitasse
                    </span>
                </div>
                <div className="flex w-full max-w-sm items-center gap-2 mt-6 md:mt-12">
                    <Input type="email" placeholder="Email" className=" h-12" />
                    <Button type="submit" className="bg-[#1959AC] cursor-pointer h-12 w-34 rounded-1 hover:bg-blue-700 text-white">
                        Subscribe <ArrowRightIcon />
                    </Button>
                </div>
                <div className="flex gap-2 mt-3">
                    <button className="bg-[#155ADA] w-6 rounded-full p-1.5">
                        <Image src={"/correct_icon.png"} alt="correct" width={100} height={100}

                        />
                    </button>
                    <span className="text-[#222222] text-[15px]">no credit card required</span>
                </div>
            </motion.div>

            <div className="hidden sm:block w-1/2 h-full bg-cover bg-center">
                <Image src="/hero.png" alt="correct"
                    width={1000} height={700}
                    style={{
                        clipPath: "polygon(26% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                    className="w-full h-full   mask-b-from-88% mask-b-to-90%"

                />
            </div>
        </div>
    )
}

export default Banner
