"use client"
import Image from 'next/image'
import { motion } from "framer-motion";
const SectionTwo = () => {
    const section1Object: { image: string, text1: string, text2: string }[] =
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
        <div className='relative '>
            <div
                className="w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('/section2-images/Capa.png')",
                }}
            >
            </div>
            <div className='absolute top-20 right-0 bg-white w-[95dvw]  
            '>
                <div className=' flex ml-auto items-center gap-8 pl-2'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className='flex flex-col gap-2 '>
                        <div className='flex flex-col gap-4 md:w-2xl justify-between'>

                            <h1 className='text-xl md:text-2xl text-[#0546D2]'>Lorem ipsum dolor sit</h1>
                            <h3 className='text-2xl md:text-5xl font-bold'>Lorem ipsum dolor sit <br />amet consectetur. Eu <br />elit.</h3>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi nulla
                                provident rerum possimus quis nihil? Sed nulla perferendis nisi soluta
                                libero
                                maxime laboriosam, quo possimus autem? Dolorem, nesciunt cupiditate!</span>
                        </div>

                        <div className='flex flex-col gap-4 mt-4 p-2'>
                            {section1Object.map((item, idx) => {
                                return (
                                    <div key={idx} className='flex w-full lg:w-[700px] flex-row gap-4 '>
                                        <div className='w-30 md:w-22 h-9'>
                                            <Image src={item.image}
                                                alt='section1'
                                                width={100} height={100}
                                                className='h-full w-full object-cover'
                                            />
                                        </div>
                                        <div>
                                            <span className='md:text-[18px] font-bold'>{item.text1}</span><br />
                                            <span className='md:text-[18px]'>{item.text2}</span><br />
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </motion.div>

                    <div

                        className=' hidden lg:block w-7xl h-[620px] ' >
                        <Image src={'/Section2-images/twomantalking.png'} className=' object-cover w-full h-full' alt='section1'
                            width={500} height={100} />
                    </div>
                </div>
                <div className='mt-8 mb-22
                    bg-[linear-gradient(90deg,#043898_0%,#079902_45.96%,#170041_91.18%)] 
                flex ml-auto
              w-[91.7dvw] 
             h-5'>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo