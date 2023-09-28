import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookSquare, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'

const NeedHelp = () => {
    return (
        <div className='py-10 px-20 bg-gray-900 '>
            <div className='text-center py-10 text-gray-100'>
                <h1 className="text-2xl font-semibold sm:text-4xl py-6">Questions? Need help?</h1>
                <p className='text-2xl font-semibold  text-sky-400'>Contact the Hello Team on</p>
                <button className='text-xl font-semibold  text-gray-100 mb-4 mt-2 rounded hover:text-sky-500 hover:underline' >OPEN</button>
            </div>

            <div>
                <div className='flex justify-center flex-wrap py-4 gap-4 text-gray-100'>
                    <button className='text-4xl font-semibold  px-4 py-2  rounded border border-pink-400'>0</button>
                    <button className='text-4xl font-semibold  px-4 py-2  rounded border border-sky-400'>2 </button>
                    <button className='text-4xl font-semibold px-4 py-2 rounded border border-pink-400'>4</button>
                    <button className='text-4xl font-semibold  px-4 py-2  rounded border border-sky-400'>3 </button>
                    <button className='text-4xl font-semibold  px-4 py-2  rounded border border-pink-400'>3 </button>
                    <button className='text-4xl font-semibold  px-4 py-2  rounded border border-sky-400'>0 </button>
                    <button className='text-4xl font-semibold  px-4 py-2 rounded border border-pink-400'>3 </button>
                    <button className='text-4xl font-semibold px-4 py-2  rounded border border-sky-400'>0 </button>

                </div>

                <p className='text-gray-100 font-semibold text-center pt-4 pb-8 '>General questions: from Monday to Friday from 7 am to 10 pm and Saturday from 9 am to 5 pm.
                    Questions about your  online <br />
                 demand: from Monday to Friday from 9 am to 5 pm
                    Victim of fraud? Outside  Hello Team opening   hours, <br /> contact 02 433 43 75. <span className='text-2xl font-semibold text-center text-sky-400 '> Consult the complete procedure.</span> </p>
            </div>

            <div className='flex justify-center flex-wrap gap-6 py-6'>
                <button className='text-2xl  px-4 py-2  rounded  bg-pink-200 text-gray-500 '><Link> <FaLinkedin /></Link></button>
                <button className='text-2xl  px-4 py-2  rounded bg-sky-200 to-gray-500'><Link> <FiMail /></Link></button>
                <button className='text-2xl  px-4 py-2  rounded bg-pink-200 to-gray-500'><Link> <FaFacebookSquare /></Link></button>
                <button className='text-2xl  px-4 py-2 rounded bg-sky-200 to-gray-500'><Link> <FaTwitter /></Link></button>
                <button className='text-2xl  px-4 py-2 rounded bg-pink-200 to-gray-500'><Link> <FaInstagram /></Link></button>
                <button className='text-2xl px-4 py-2  rounded bg-sky-200 to-gray-500'><Link> FAQ</Link></button>
            </div>
        </div>
    );
};

export default NeedHelp;