
import React,{useEffect} from "react";
import images from './ImageCon';
import Item from './Item';
import Features from './Features';
import { Link } from 'react-router-dom';
import ContactUs from './ContactUs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Explore = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (

      <div className="px-4 md:px-12 lg:px-20 py-8 space-y-16 bg-gray-50 text-gray-800">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between bg-white shadow-md p-8 rounded-3xl">

          {/* Text Section */}
          <div data-aos="fade-up"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="md:w-[50%] space-y-6 ">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold text-blue-600">
                Elevate Your Digital Realm
              </h1>
              <p className="text-2xl md:text-4xl font-light text-gray-700">
                Your Orders, Our Expertise!
              </p>
            </div>
            <div className="text-center md:text-left">
              <Link to="/dashboard">
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition duration-300">
                  Explore <span className="font-bold">More</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-[50%] mt-8 md:mt-0">
            <img
              src={images.acess1}
              alt="Access illustration"
              className="rounded-3xl shadow-md transform hover:scale-105 transition duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* Additional Sections */}
        <div className="space-y-20">
          {/* Items Section */}
          <div data-aos="fade-up"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="bg-white shadow-md p-2 md:p-8 rounded-3xl">
            <Item />
          </div>

          {/* Features Section */}
          <div data-aos="fade-up"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="p-2 md:p-8 ">
            <Features />
          </div>

          {/* Contact Us Section */}
          <div data-aos="fade-up"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="bg-blue-600 text-white shadow-md p-8 rounded-3xl">
            <ContactUs />
          </div>
        </div>
      </div>
   
      );
};

      export default Explore;
