"use client";
import {
    type CarouselApi,
} from "@/components/ui/carousel"
import React, { useEffect } from "react";
import StoryCards from "./StoryCards";


const StorySection = () => {
    const storyobj: { imgSrc: string; title: string; description: string; }[] = [
        {
            imgSrc: "/groupphoto.png",
            title: "Artist & Investor",
            description: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisi quis est ...",
        },
        {
            imgSrc: "/groupphoto.png",
            title: "Artist & Investor",
            description: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisi quis est ...",
        },
        {
            imgSrc: "/groupphoto.png",
            title: "Artist & Investor",
            description: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisi quis est ...",
        },
        {
            imgSrc: "/groupphoto.png",
            title: "Artist & Investor",
            description: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisi quis est ...",
        },
    ]

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    // AUTOPLAY
    useEffect(() => {
        if (!api) return;

        const interval = setInterval(() => {
            api.scrollNext();
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, [api]);



    return (
        <section className="w-full  py-16 my-40 px-6 md:px-20">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-2xl md:text-4xl  mb-8 font-bold uppercase">
                        LOREM IPSUM DOLOR SIT AMET
                    </h2>
                    <div className="w-full ">
                        <p className="text-gray-700  text-base md:text-lg">
                            Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed
                            ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
                        </p>
                    </div>
                </div>


                <StoryCards storyobj={storyobj} setApi={setApi} />

                <div className="flex justify-center gap-2 mt-2">
                    {storyobj.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => api?.scrollTo(i)}
                            className={`w-3 h-3 rounded-full transition-colors ${current === i + 1 ? "bg-[#1959AC] w-12" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>


            </div>
        </section>

    )
}

export default StorySection
