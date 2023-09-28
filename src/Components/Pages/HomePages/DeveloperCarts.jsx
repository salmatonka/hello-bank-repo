import React from 'react';
import { FaGithub, FaDribbbleSquare, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const DeveloperCarts = ({developer}) => {
    const { name, title, img, facebook, linkedin,github,email } = developer;
    return (
        <div className=''>
            <div className="flex flex-col justify-center max-w-xs p-4 shadow-md rounded-xl bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300  hover:text-gray-100 text-center ">
                <img src={img} alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 self-center whitespace-nowrap ">{name}</h2>
                        <p className="px-5 text-xs sm:text-base text-gray-500">{title}</p>
                    </div>
                    {/* icons */}
                    <div className="flex justify-center pt-2 space-x-4 align-center">
                        <a rel="noopener noreferrer" href="/" aria-label="GitHub" className="p-2 rounded-md text-gray-500 hover:text-pink-400">
                            <FaGithub className='h-6 w-6' />
                        </a>
                        <a rel="noopener noreferrer" href="/" aria-label="Dribble" className="p-2 rounded-md text-gray-500 hover:text-pink-400">
                            <FaDribbbleSquare className='h-6 w-6' />
                        </a>
                        <a rel="noopener noreferrer" href="/" aria-label="Twitter" className="p-2 rounded-md text-gray-500 hover:text-pink-400">
                            <FaTwitter className='h-6 w-6' />
                        </a>
                        <a rel="noopener noreferrer" href="/" aria-label="Email" className="p-2 rounded-md text-gray-500  hover:text-pink-400">
                            <MdEmail className='h-6 w-6' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperCarts;