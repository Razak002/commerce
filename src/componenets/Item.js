import React from 'react';
import images from './ImageCon';

const Item = () => {

  return (
    <div>
      <h1 className='uppercase text-2xl font-bold '>Some of Our items</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {[images.istock, images.item1, images.item2, images.item3, images.item4, images.item7].map((item, index) => (
          <div
            key={index}
            className="hover-container rounded-xl border-2 border-solid border-blue-600 p-1 cursor-pointer"
          >

            <img src={item} alt='' className='rounded-xl' loading='lazy'/>
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
