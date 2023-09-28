import React from 'react';
import HeadLine from '../HomePages/HeadLine';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (

    <div>
      <div className="relative">
        <img
          src="https://i.ibb.co/CtzxYrW/our-offer-banner-hello-bank-desktop.jpg"
          className="absolute inset-0  w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl sm:leading-none">
                  The
                  <br className="hidden md:block" />
                  <span className="text-teal-accent-400">Hello bank! offer</span>
                </h2>

                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">To handle your money and make your dreams come true, check, compare & choose among the range of Hello bank!'s innovative, alternative or traditional solutions.</p>

               
                <Link to='/ourOffers' className="flex items-center p-2 rounded-lg  w-32 bg-gray-400  hover:scale-110 duration-500 text-gray-100 shadow-md shadow-sky-400">

                  <span className="ml-3 ">Free Offer</span>
                </Link>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default HomeBanner;