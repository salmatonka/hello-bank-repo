import React from 'react';

const Security = () => {
    return (
        <div >
        <div className="bg-gray-900 px-14 py-16">

        <h1 className="text-2xl text-pink-400 font-bold leading-none text-center sm:text-5xl pb-16">Security</h1>
            <div className="flex flex-col border border-sky-500 rounded shadow-sm md:justify-center lg:flex-row">
                <div className="flex flex-col justify-between p-5 border-b border-sky-500 sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2
                ">
                    <div className='py-8 px-8 bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 '>
                        <h5 className="max-w-md mb-6 text-2xl font-bold leading-none sm:text-2xl text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 self-center whitespace-nowrap ">
                        Fraud Detection and Prevention

                        </h5>
                        <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">

                            We use the latest technology to detect and prevent fraud in your account, giving you peace of mind and security.
                        </p>
                    </div>

                </div>
                <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
                    <div className='py-8 px-8 bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 '>
                        <h5 className="max-w-md mb-6 text-2xl font-bold leading-none sm:text-2xl text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 self-center whitespace-nowrap ">
                            Data Encryption
                        </h5>
                        <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">

                            All your sensitive data is encrypted with industry-standard protocols to ensure your privacy and security.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
};

export default Security;