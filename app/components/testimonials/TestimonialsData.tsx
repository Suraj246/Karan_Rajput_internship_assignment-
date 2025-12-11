import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const TestimonialsData = () => {
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

    return (
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
    )
}

export default TestimonialsData
