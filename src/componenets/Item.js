import React from 'react';
import images from './ImageCon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = () => {

  const notify = () => toast("check ur mailBox");

  return (
    <div>
      <h1 className='uppercase text-2xl font-bold '>Some of Our items</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {[images.istock, images.item1, images.item2, images.item3, images.item4, images.item7].map((item, index) => (
          <div
            key={index}
            className="hover-container rounded-xl border-2 border-solid border-blue-600 p-1 cursor-pointer"
          >

            <img src={item} alt='' className='rounded-xl' loading='lazy'

            />
            <div className='justify-start py-3'>
              <span className='uppercase font-semibold flex  gap-3 text-[0.8rem] md:text-[1rem]' >product info <span className='text-[0.7rem] bg-blue-600 p-1 rounded-md text-white'>NEW</span></span>
              <hr></hr>
              <p className='text-[0.8rem] text-left'>This product aims at satisfying your need to the fullest enjoy your experience</p>

              <div className=' flex flex-col md:flex-row justify-between px-3'>
                <div>

                  <button type='submit' onClick={notify} className='uppercase p-1 px-4 text-[0.8rem] font-semibold border rounded-md bg-blue-600 text-white'>buy now</button>
                  <ToastContainer />
                  <img src={images.love} alt='' width={20} className='hidden md:block' />
                </div>
                <div>
                  <span>$149.99</span>
                  <img src={images.rating} alt='' width={40} />
                </div>
              </div>
            </div>

          </div>

        ))}
      </div>
    </div>
  );
};

export default Item;
