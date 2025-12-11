
import { Button } from "@/components/ui/button"
import TestimonialsData from "./TestimonialsData"


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

                <TestimonialsData />


            </div>
        </section>

    )
}

export default TestimonialsCarousel
