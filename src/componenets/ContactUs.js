import React from 'react'
import images from './ImageCon'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {

    const notify = () => toast("thanks for your response");

    return (
        <div className=''>
            <div>
                <h1>Contact Us</h1>

                <p className='text-sm italic'>Feel free to contact us by either filling the form or directly through our socials</p>
            </div>

            <div className='flex justify-center flex-col md:flex-row items-center'>
                <div>

                    <img src={images.deliver} alt='' className='w-80' />
                </div>

                <div className='w-[100%] md:w-[50%]'>
                    <form className='flex flex-col space-y-3 p-5 '>
                        <div className='border-2 border-white rounded-md '>
                            <input type='text' placeholder='name' className=' p-1 py-2 focus:outline-none bg-transparent text-[0.8rem] w-[100%]' />

                        </div>
                        <div className='border-2 border-white rounded-md'>
                            <input type='Email' placeholder='Email' className='p-1 py-2 focus:outline-none bg-transparent text-[0.8rem] w-[100%]' />

                        </div>
                        <div className='border-2 border-white rounded-md '>
                            <textarea placeholder='message' className='p-1 focus:outline-none bg-transparent text-[0.8rem] w-[100%]' >

                            </textarea>

                        </div>


                    </form>

                    <button type='submit' onClick={notify} className='bg-white text-blue-600  py-2 px-4 rounded-2xl border-2 border-blue-600 font-semibold '>Submit</button>
                    <ToastContainer />

                </div>
            </div>
            {/* 
            socials */}

            <div className='flex justify-center items-center space-x-4 mt-5'>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" className='w-10' />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className='w-10' />

                <img src={images.twit} alt='ximage' className='w-10' loading='lazy' />

            </div>

            <p className='text-[0.7rem] mt-3'>Copyright © 2024 aliyu abdulrazak. All rights reserved</p>



        </div>
    )
}

export default ContactUs