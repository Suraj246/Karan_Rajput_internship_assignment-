import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const SectionTen = () => {
    return (
        <section className="w-full my-20 lg:py-20 px-6 md:px-20 bg-white">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <div className="w-32 h-12 mx-auto text-2xl bg-gray-300 text-black font-bold flex items-center justify-center rounded">
                    LOGO
                </div>

                <h1 className="text-2xl md:text-4xl font-bold uppercase">
                    Lorem Ipsum Dolor Sit Amet Consectetur. DUI.
                </h1>

                <p className="text-gray-700 text-base md:text-lg">
                    Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
                </p>

                <Button className="text-white bg-[#1959AC] hover:bg-blue-700 flex w-50 items-center gap-2 mx-auto">
                    Lorem Ipsum <ArrowRightIcon className="w-4 h-4" />
                </Button>
            </div>
        </section>
    );
}

export default SectionTen;