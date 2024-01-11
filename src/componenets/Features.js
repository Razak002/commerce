import React from 'react'
import images from './ImageCon'

const Features = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Features</h1>

            <div className='flex ml-10 md:ml-0 md:flex-row justify-center gap-10 md:gap-20 items-center'> 
                <div>
                    <img src={images.order } alt=''  className='w-16 md:w-32' />
                    <span className='text-[0.8rem] md:text-[1rem]'>fast ordering process</span>

                </div>
                <div>
                    <img src={images.security } alt='' className='w-16 md:w-32' />
                    <span className='text-[0.8rem] md:text-[1rem]'>High payment security</span>
                </div>


                <div>
                    <img src={images.quality} alt='' className='w-16 md:w-32' />
                    <span className='text-[0.8rem] md:text-[1rem]'>High payment security</span>
                </div>

               
            </div>
        </div>
    )
}

export default Features