import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import SectionOneCards from './SectionOneCards'

const SectionOne = () => {
    const section1Object: { image: string, text1: string, text2: string, text3?: string }[] =
        [
            {
                image: '/Section_one_images/bikeRider.png',
                text1: 'Lorem ipsum dolor sit amet consectetur',
                text2: 'adipisicing elit. Quibusdam deleniti Quibusdam  deleniti'
            },
            {
                image: '/Section_one_images/handshake.png',
                text1: 'Lorem ipsum dolor sit amet consectetur',
                text2: 'Lorem ipsum dolor sit amet consectetur',
                text3: 'adipisicing elit. Quibusdam deleniti'
            },
            {
                image: '/Section_one_images/handshake2.png',
                text1: 'Lorem ipsum dolor sit amet consectetur',
                text2: 'adipisicing elit. Quibusdam deleniti',
                text3: 'adipisicing elit. Quibusdam deleniti'
            }
        ]


    return (
        <div className='relative ml-auto lg:mt-12  '>
            <div className='shadow-[0px_4px_25px_0px_#00000026] flex ml-auto gap-8  w-[95dvw] px-12 pt-12'>
                <div className='flex flex-col gap-2 '>
                    <div className='flex flex-col gap-6 justify-between'>

                        <h1 className='text-xl md:text-2xl text-[#0546D2]'>Lorem ipsum dolor sit</h1>
                        <h3 className='text-2xl md:text-5xl font-bold'>LOREM IPSUM <br /> DOLOR SIT AMET</h3>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi nulla
                            provident rerum possimus quis nihil? Sed nulla perferendis nisi soluta
                            libero
                            maxime laboriosam, quo possimus autem? Dolorem, nesciunt cupiditate!</span>
                    </div>

                    <div className='flex flex-col gap-4 mt-4 p-2'>
                        {section1Object.map((item, idx) => {
                            return (
                                <SectionOneCards key={idx} item={item} />
                            )
                        })}

                    </div>

                    <div className='mt-8 mb-12 flex gap-6 items-center'>
                        <Button type="submit" className="bg-[#1959AC] cursor-pointer  h-10 w-56 rounded-1 hover:bg-blue-700 text-white">
                            Lorem Ipsum <ArrowRightIcon />
                        </Button>
                        <span className='flex gap-2 items-center'>
                            <Image src="/section_one_images/call_icon.png" alt="phone" width={20} height={20} />
                            123456789
                        </span>
                    </div>

                </div>

                <div className=' hidden lg:block ' >
                    <Image src={'/Section1-image.png'} className=' object-cover' alt='section1' width={1500} height={100} />
                </div>
            </div>
            <div className='
            bg-[linear-gradient(90deg,#043898_0%,#079902_45.96%,#170041_91.18%)] 
            absolute bottom-[-3] lg:left-15 z-50 mt-4 
              w-[91.7dvw] 
             h-5'>
            </div>
        </div>
    )
}

export default SectionOne
