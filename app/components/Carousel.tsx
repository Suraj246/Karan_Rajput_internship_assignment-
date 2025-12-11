import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const testimonials = [
    {
        icon: "/carousel-images/fog.png",
        text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin.",
        name: "Jane Cooper",
        image: "/carousel-images/h1.png",
    },
    {
        icon: "/carousel-images/star.png",
        text: "Vehicula sit sit pharetra bibendum ut risus accumsan.",
        name: "Ralph Edwards",
        image: "/carousel-images/h2.png",
    },
    {
        icon: "/carousel-images/chess.png",
        text: "Viverra lacus suspendisse elit. Duis enim semper fermentum.",
        name: "Courtney Henry",
        image: "/carousel-images/h3.png",
    },
    {
        icon: "/carousel-images/time.png",
        text: "Hendrerit augue ut mauris quis integer netus ultrices magna.",
        name: "Cameron Williamson",
        image: "/carousel-images/h4.png",
    },
]

const TestimonialsCarousel = () => {
    return (
        <section className="w-full pb-22 bg-[#1959AC] text-white py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto space-y-12">


                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                    <div className="space-y-4 max-w-3xl">
                        <h2 className="text-2xl ">
                            Join other Sun harvesters <br />
                        </h2>
                        <h1 className="text-2xl md:text-4xl font-bold">
                            LOREM IPSUM DOLOR SIT AMET

                        </h1>
                        <p className="text-white/80 text-base md:text-lg">
                            Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
                        </p>
                    </div>
                    <Button className="bg-white text-[#1959AC] hover:bg-gray-100 font-semibold">
                        Lorem Ipsum
                    </Button>
                </div>



                <Carousel className="w-full">
                    <CarouselContent>

                        {testimonials.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/3 lg:basis-1/4"
                            >
                                <div className="bg-white rounded-xl p-6 shadow h-full flex flex-col">

                                    <Image
                                        src={item.icon}
                                        width={40}
                                        height={40}
                                        alt={item.name}
                                        className="rounded-full"
                                    />

                                    <p className="text-sm text-black mt-4 grow">{item.text}</p>

                                    <div className="flex items-center gap-3 mt-6">
                                        <Image
                                            src={item.image}
                                            width={40}
                                            height={40}
                                            alt={item.name}
                                            className="rounded-full"
                                        />
                                        <span className="font-semibold text-black">{item.name}</span>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}

                    </CarouselContent>


                    <CarouselPrevious className="text-black left-[-10] md:left-[-60] border-white" />
                    <CarouselNext className="text-black right-[-10] md:right-[-60] border-white" />
                </Carousel>
            </div>
        </section>

    )
}

export default TestimonialsCarousel
