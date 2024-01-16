import React from 'react'
import images from './ImageCon'

const Features = () => {
    return (
        <div className=''>
            <h1 className='text-2xl flex justify-center items-center font-bold'>Features</h1>

            <div className='flex  flex-col md:flex-row justify-center gap-3 md:gap-10  items-center'> 
                <div className='flex flex-col justify-center items-center'>
                    <img src={images.order } alt=''  className='w-16 md:w-32' />
                    <span className='text-[0.8rem] md:text-[1rem] '>fast ordering process</span>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={images.security } alt='' className='w-16 md:w-32' />
                    <span className='text-[0.8rem] md:text-[1rem]'>High payment security</span>
                </div>


                <div className='flex flex-col justify-center items-center'>
                    <img src={images.quality} alt='' className='w-16 md:w-32' />
                    <span className='text-[0.8rem] md:text-[1rem]'>Enjoy Quality products</span>
                </div>

               
            </div>
        </div>
    )
}

export default Features