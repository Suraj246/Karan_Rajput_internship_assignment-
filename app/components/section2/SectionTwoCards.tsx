import Image from 'next/image'

const SectionTwoCards = () => {
    const section2Object: { image: string, text1: string, text2: string }[] =
        [
            {
                image: '/Section2-images/drive.png',
                text1: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit',
                text2: 'adipisicing elit. Quibusdam deleniti Quibusdam  deleniti adipisicing elit. Quibusdam deleniti Quibusdam  deleniti adipisicing elit.' +
                    'Quibusdam deleniti Quibusdam  deleniti adipisicing elit.Quibusdam deleniti Quibusdam '
            },
            {
                image: '/Section2-images/drive.png',
                text1: 'Lorem ipsum dolor sit amet consectetur',
                text2: 'adipisicing elit. Quibusdam deleniti Quibusdam  deleniti adipisicing elit. Quibusdam deleniti Quibusdam  deleniti adipisicing elit.' +
                    'Quibusdam deleniti Quibusdam  deleniti adipisicing elit.Quibusdam deleniti Quibusdam '

            },
            {
                image: '/Section2-images/drive.png',
                text1: 'Lorem ipsum dolor sit amet consectetur',
                text2: 'adipisicing elit. Quibusdam deleniti Quibusdam  deleniti adipisicing elit. Quibusdam deleniti Quibusdam  deleniti adipisicing elit.' +
                    'Quibusdam deleniti Quibusdam  deleniti adipisicing elit.Quibusdam deleniti Quibusdam '
            }
        ]
    return (
        <div className="flex flex-col gap-4 mt-4 p-2">
            {section2Object.map((item, idx) => (
                <div key={idx} className="flex w-full lg:w-[700px] flex-row gap-4">
                    <div className="w-30 md:w-22 h-9">
                        <Image
                            src={item.image}
                            alt="section1"
                            width={100}
                            height={100}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <span className="md:text-[18px] font-bold">{item.text1}</span>
                        <br />
                        <span className="md:text-[18px]">{item.text2}</span>
                        <br />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SectionTwoCards
