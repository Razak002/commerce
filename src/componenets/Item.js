import React from 'react';
import images from './ImageCon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

const Item = () => {
  const notify = () => toast("Check your mailbox!");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-blue-600  uppercase text-3xl font-extrabold mb-6">Some of Our Items</h1>

      {/* Swiper for mobile and grid for larger screens */}
      <div className="block sm:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          grabCursor
        >
          {[images.istock, images.item1, images.item2, images.item3, images.item4, images.item7].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl shadow-lg border border-gray-300 overflow-hidden cursor-pointer transition-transform transform hover:scale-105">
                <img
                  src={item}
                  alt={`Product ${index + 1}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />

                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="uppercase font-semibold text-sm md:text-base">Product Info</span>
                    <span className="text-xs bg-blue-600 text-white py-1 px-2 rounded-md">NEW</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    This product aims to satisfy your needs to the fullest. Enjoy your experience!
                  </p>

                  <Link to='/dashboard'>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"

                        className="uppercase py-2 px-4 text-sm font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                      >
                        Buy Now
                      </button>
                      <ToastContainer />
                      <img src={images.love} alt="Favorite" width={20} className="hidden sm:block ml-2" />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="font-bold text-lg">$149.99</span>
                      <img src={images.rating} alt="Rating" width={40} />
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid for larger screens */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[images.istock, images.item1, images.item2, images.item3, images.item4, images.item7].map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg border border-gray-300 overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
          >
            <img
              src={item}
              alt={`Product ${index + 1}`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            <div className="p-4 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="uppercase font-semibold text-sm md:text-base">Product Info</span>
                <span className="text-xs bg-blue-600 text-white py-1 px-2 rounded-md">NEW</span>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                This product aims to satisfy your needs to the fullest. Enjoy your experience!
              </p>

              <Link to='/dashboard'>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    // onClick={notify}
                    className="uppercase py-2 px-4 text-sm font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Buy Now
                  </button>
                  <ToastContainer />
                  <img src={images.love} alt="Favorite" width={20} className="hidden sm:block ml-2" />
                </div>
              </Link>

              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-lg">$149.99</span>
                <img src={images.rating} alt="Rating" width={40} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
