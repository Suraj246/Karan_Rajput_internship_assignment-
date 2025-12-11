import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const SectionNine = () => {
    return (
        <section className="relative w-full my-22  bg-[#F1F5F9] py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#0546D2]">
                            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg">
                            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisi felis. Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
                        </p>
                        <Button className="bg-[#0546D2] text-white hover:bg-blue-700 flex items-center gap-2">
                            Lorem Ipsum <ArrowRightIcon className="w-4 h-4" />
                        </Button>
                    </div>

                    <Card className="md:absolute bg-white shadow-md bottom-[-140   ] md:bottom-[-70px] left-6 md:left-20 w-full md:w-[70%] lg:w-[40%]">
                        <CardHeader>
                            <h3 className="text-lg font-semibold mt-6">Lorem ipsum dolor sit</h3>
                        </CardHeader>
                        <CardContent className="space-y-4 text-gray-700 text-sm">
                            <p>Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Hac utis consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.</p>
                        </CardContent>

                        <div className="absolute w-10 top-4 right-4">
                            <Image
                                src="/pin.png"
                                alt="Scooter Deal"
                                width={100}
                                height={100}
                                className="w-full h-full rounded-lg object-cover"
                            />
                        </div>
                    </Card>
                </div>

                <div className="lg:w-[570px] lg:relative lg:top-[-150] right-[-140]  flex justify-center lg:justify-end">
                    <Image
                        src="/deal.png"
                        alt="Scooter Deal"
                        width={200}
                        height={300}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default SectionNine;
