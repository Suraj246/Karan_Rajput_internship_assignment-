import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
    type CarouselApi,
} from "@/components/ui/carousel"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,

} from "@/components/ui/carousel"

interface StoryCardsProps {
    setApi: (api: CarouselApi) => void;
    storyobj: {
        imgSrc: string;
        title: string;
        description: string;
    }[];
}
const StoryCards = ({ setApi, storyobj }: StoryCardsProps) => {
    return (
        <Carousel opts={{ loop: true }} setApi={setApi} >
            <CarouselContent>
                {storyobj.map((story, index) => (
                    <CarouselItem key={index}>
                        <Card className="relative w-full border-0">
                            <Image
                                src={story.imgSrc}
                                alt="Motorcycle Celebration"
                                width={800}
                                height={400}
                                className="w-2xl h-auto object-cover"
                            />

                            <Card className="lg:absolute bottom-[-100] md:right-0 md:bottom-30 md:w-2xl bg-white ">
                                <CardHeader>
                                    <h3 className="text-lg font-semibold">A{story.title}</h3>
                                </CardHeader>
                                <CardContent className="space-y-3 text-gray-700 text-sm">
                                    <p>
                                        {story.description}
                                    </p>
                                    <Link href="#" className="text-[#0546D2] font-semibold hover:underline">
                                        Read Full Story →
                                    </Link>
                                </CardContent>
                            </Card>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
        </Carousel>
    )
}

export default StoryCards
