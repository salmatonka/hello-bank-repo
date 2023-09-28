import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useTitle from '../../../MyHooks/useTitle';

const CardDetails = () => {
    useTitle('CardDetails');
    const { cardType } = useParams();
    const [details, setDetails] = useState();

    useEffect(() => {
        fetch(`https://bank-server-salmatonka.vercel.app/cards/${cardType}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [cardType]);

    // console.log(details)
    return (

        <div>
            <div className='bg-gray-900'>
                {/* image section */}

                <div className="relative">
                    <img
                        src={details?.img}
                        className="absolute inset-0  w-full h-full"
                        alt=""
                    />
                    <div className="relative  bg-gray-900 bg-opacity-75">
                        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  pb-16 lg:pb-40 ">
                            <div className="flex flex-col items-center justify-between xl:flex-row">
                                <div className="border-4 border-sky-500 rounded-b-xl shadow-sky-700 shadow-xl h-full ">
                                    <h2 className="max-w-lg mb-6 py-4 px-4 font-sans text-2xl font-bold tracking-tight text-white sm:text-3xl sm:leading-none">
                                        {details?.name} Information
                                    </h2>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Description section */}

                <div className="description flex justify-center  py-8">
                    <div className="des-border mx-52 w-full  text-gray-100 py-6 px-6 border-4 border-sky-500 rounded-b-xl shadow-sky-700 shadow-lg">
                        <p className='text-2xl font-semibold'>{details?.description}</p>
                    </div>
                </div>

                {/* Border hr section */}
                <div className=' border-section pb-8'>
                    <hr className='border-2 border-sky-500 mx-auto w-1/2 mb-8 rounded-md' />
                    <hr className='border-2  border-sky-500 w-1/3 mx-auto mb-8 rounded-md' />
                    <hr className='border-2 border-sky-500 w-1/4 mx-auto mb-8 rounded-md' />
                </div>

                {/*facilities section */}


                <div className="grid gap-10  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:px-20  pt-6 pb-6  group">

                    {
                        details?.rules?.map(rule => <div key={rule}>
                            <div className='text-gray-100 rounded-lg shadow-lg shadow-sky-700 h-full '>
                                <div className='py-10  items-center'>
                                    <h2 className='px-6 pb-8 text-3xl font-semibold group-hover:text-center group-hover:w-full'>{rule?.title}</h2>
                                    <p className='hover:bg-gray-200 group-hover:text-gray-800 p-6 group-hover:mb-0 '> {rule?.details}</p>
                                </div>
                            </div>

                        </div>)
                    }

                </div>



                {/* border section */}

                <div className=' border-section pb-8'>
                    <hr className='border-2 border-sky-500 mx-auto w-1/2 mb-8 rounded-md' />
                    <hr className='border-2  border-sky-500 w-1/3 mx-auto mb-8 rounded-md' />
                    <hr className='border-2 border-sky-500 w-1/4 mx-auto rounded-md' />
                </div>


                {/* OpenAccount section */}
                {/* <div className="openAccount px-20 pt-6 pb-14 ">
                    <p className='text-xl font-semibold sm:text-3xl text-center pb-10 text-gray-100'>Interested to open an account? </p>
                    <Link to='/accountsForm'>
                        <button className='shadow-lg shadow-sky-700 rounded-lg w-52 mx-auto flex justify-center pb-4 pt-2 text-gray-100  hover:bg-sky-700 text-lg'>Get In Touch</button>
                    </Link>

                </div> */}
                {/* border section */}
                {/* <div className=' border-section pb-8'>
                    <hr className='border-2 border-sky-500 mx-auto w-1/2 mb-8 rounded-md' />
                    <hr className='border-2  border-sky-500 w-1/3 mx-auto mb-8 rounded-md' />
                    <hr className='border-2 border-sky-500 w-1/4 mx-auto rounded-md' />
                </div> */}


            </div>


        </div>
    );
};


export default CardDetails;