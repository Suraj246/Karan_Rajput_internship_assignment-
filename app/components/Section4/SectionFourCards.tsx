import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'

interface SectionFourCardsProps {
    card: {
        imageSrc: string;
        title: string;
        description: string;
    }
}

const SectionFourCards = ({ card }: SectionFourCardsProps) => {
    return (
        <Card
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
}

export default SectionFourCards
