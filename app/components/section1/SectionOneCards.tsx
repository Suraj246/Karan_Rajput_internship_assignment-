import Image from 'next/image'

interface SectionOneCardsProps {
    item: {
        image: string;
        text1: string;
        text2: string;
        text3?: string;
    }
}
const SectionOneCards = ({ item }: SectionOneCardsProps) => {
    return (
        <div className='flex flex-col sm:flex-row gap-8 items-center '>
            <div className='w-full h-40 sm:w-40'>
                <Image src={item.image}
                    alt='section1'
                    width={100} height={100}
                    className='h-full w-full object-cover'
                />
            </div>
            <div>
                <span className='md:text-[18px]'>{item.text1}</span><br />
                <span className='md:text-[18px]'>{item.text2}</span><br />
                <span className='md:text-[18px]'>{item.text3}</span>
            </div>
        </div>
    )
}

export default SectionOneCards
