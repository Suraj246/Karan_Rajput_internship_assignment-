import Image from 'next/image';

const BikeLogos = () => {

    const rowObject: { src: string; alt: string }[][] = [
        [
            { src: "/bikelogos/hero.png", alt: "Hero" },
            { src: "/bikelogos/honda.png", alt: "Honda" },
            { src: "/bikelogos/bajaj.png", alt: "Bajaj" },
            { src: "/bikelogos/tvs.png", alt: "TVS" },
        ],
        [
            { src: "/bikelogos/royal.png", alt: "Royal Enfield" },
            { src: "/bikelogos/yamaha.png", alt: "Yamaha" },
            { src: "/bikelogos/ktm.png", alt: "KTM" },
            { src: "/bikelogos/Ather.png", alt: "Ather" },
        ],
        [
            { src: "/bikelogos/Ola.png", alt: "Ola Electric" },
            { src: "/bikelogos/revolt.png", alt: "Revolt" },
            { src: "/bikelogos/Ultraviolette.png", alt: "Ultraviolette" },
            {
                src: "/bikelogos/tork.png",
                alt: "Tork",
            },
        ],
    ]

    return (
        <div className="w-full py-12 px-6 md:px-16 ">
            <h2 className="text-center text-2xl md:text-4xl font-bold">
                LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. COMMODO LEO AMET.
            </h2>

            {rowObject.map((row, idx) => (
                <div key={idx} className="flex flex-wrap mt-22 justify-center gap-8">
                    {row.map((logo, logoIdx) => (
                        <div key={logoIdx} className="flex flex-col p-4 items-center">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={100}
                                height={60}
                                className="object-contain w-fit h-16 "
                            />

                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default BikeLogos
