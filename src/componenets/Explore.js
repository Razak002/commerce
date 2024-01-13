import React from 'react'
import images from './ImageCon'
import Item from './Item'
import Features from './Features'
import { Link } from 'react-router-dom'
import ContactUs from './ContactUs'



const Explore = () => {
  return (
    <div className=' px-3 md:px-5 m-3 md:m-5'>

      {/* right */}
      <div className='flex flex-col md:flex-row md:items-center justify-between  '>

        <div className='md:w-[50%]'>


          <div className='flex flex-col justify-center gap-2 text-2xl  md:text-5xl font-bold text-center md:text-left'>
            <span className='text-blue-600 font-serif text-left'>Elevate Your Digital Realm</span>
            <span className='text-blue-600 font-serif text-left'>Your Orders, Our Expertise!
            </span>
          </div>


          <div className='py-6'>
            <button className='p-2 px-4 border-2  border-blue-600 rounded-2xl'>
              <Link to='/dashboard'>
              Explore <span className='text-blue-600 '>more</span>
              </Link>
              
              </button>
          </div>
        </div>
        <div className='md:w-[50%] '>
          <img src={images.acess1} alt='' className='rounded-3xl'
            loading='lazy' />
        </div>

      </div>

      <div className='mt-5 space-y-20'>
       <Item />
     
      <Features />

      <ContactUs />
      </div> 

    </div>
  )
}

export default Explore