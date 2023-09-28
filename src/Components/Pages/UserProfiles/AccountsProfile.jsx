import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {  FaUserPlus } from 'react-icons/fa';
import { AuthContext } from '../../../userContext/AuthProvider/AuthProvider';

const AccountsProfile = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
        <div className='bg-gray-900'>


            {/* userInfo section */}

            {
                user ? <div className="relative">
                    <img
                        src={user?.photoURL}
                        className="absolute inset-0  w-full h-full"
                        alt=""
                    />
                    <div className="relative  bg-gray-900 bg-opacity-75">
                        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  pb-16 lg:pb-40 ">
                            <div className="flex flex-col items-center justify-between xl:flex-row">
                                <div className="border-4 border-sky-500 rounded-b-xl shadow-sky-700 shadow-xl h-full ">

                                    <h2 className="max-w-lg mb-2 pt-6 px-14 font-sans text-2xl font-bold tracking-tight text-white sm:text-2xl sm:leading-none">
                                        Name : {user?.displayName}
                                    </h2>
                                    <h2 className="max-w-lg mb-6  px-8 font-sans text-2xl font-bold tracking-tight text-white sm:text-2xl sm:leading-none">
                                        Email : {user?.email}
                                    </h2>

                                </div>

                            </div>
                        </div>
                    </div>
                </div> : <h2 className='text-4xl font-semibold text-pink-500 text-center py-10'>Please, Login to view your profile!!</h2>

            }    


{/* Account section */}

<section className="px-20  text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl text-center py-6">Overview</h2>

                    <div className="space-y-4">
                        <details className="w-full rounded-lg shadow-lg shadow-sky-700 border border-sky-700  my-6">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Eligibility</summary>
                            <ul>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">1. Age: 18 years or above</li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">2. Nationality: Bangladeshi residing in Bangladesh
                                </li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">3. Other: Valid Freelancer ID</li>
                            </ul>
                        </details>
                        <details className="w-full rounded-lg shadow-lg shadow-sky-700 border border-sky-700  my-6">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Features</summary>
                            <ol>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Two accounts opened in one visit to the branch</p>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">1. Freelancer ERQ Account: Non-interest bearing current account with USD currency
                                </li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">2. Freelancer Savings Account: Interest bearing savings account with BDT currency</li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">3. Bundle deposit product with foreign currency ERQ a/c & BDT savings a/c</li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">4. Retention of foreign currency from freelancing income (as permissible by Bangladesh Bank) in your foreign currency a/c and rest in BDT savings a/c</li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">5. No account maintenance fee on ERQ a/c</li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">6. Free International Debit Card with ERQ a/c for bonafide business and legitimate personal expenses abroad</li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">7. Free Dual Currency Debit Card against your savings a/c</li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">8. Free half yearly Remittance Certificate for seamless incentive claim</li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">9. Credit Card and Retail Loan facility
                                    Smooth processing of remittance into accounts</li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">10. Annual fee of Credit Card is waived for first year</li>

                            </ol>
                        </details>
                        <details className="w-full rounded-lg shadow-lg shadow-sky-700 border border-sky-700  my-6">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Interest Rates</summary>

                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Please see the details  <a className='font-bold text-sky-400 hover:border-bottom hover:border-sky-400 ' href='/accountInterest'>here</a></p>


                        </details>
                        <details className="w-full rounded-lg shadow-lg shadow-sky-700 border border-sky-700  my-6">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Required Documents</summary>
                            <ul>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">1. NID/Birth certificate/Passport</li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">2. Valid Freelancer ID
                                </li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">3. Passport sized photograph – 2 Copies</li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">4. Nominee photograph – 1 Copy</li>
                                <li className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">5. Nominee’s NID/Birth certificate/Passport
                                    E-TIN</li>
                            </ul>
                        </details>
                    </div>
                </div>
            </section>

            {/* Border hr section */}
            <div className=' border-section pb-8'>
                <hr className='border-2 border-sky-500 mx-auto w-1/2 mb-8 rounded-md' />
                <hr className='border-2  border-sky-500 w-1/3 mx-auto mb-8 rounded-md' />
                <hr className='border-2 border-sky-500 w-1/4 mx-auto mb-8 rounded-md' />
            </div>

            {/*link section */}

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-14'>
                
                <Link to='/myAccount'>
                    <button className='shadow-lg shadow-sky-700 rounded-lg w-full flex justify-center py-8 px-10 text-gray-100 text-2xl font-semibold'>
                        <FaUserPlus className='mr-4' />
                        Your Account
                    </button>
                </Link>
                <Link to='/myLoan'>
                    <button className='shadow-lg shadow-sky-700 rounded-lg w-full flex justify-center py-8 px-10 text-gray-100 text-2xl font-semibold'>
                        <FaUserPlus className='mr-4' />
                        Your Loan
                    </button>
                </Link>
                <Link to='/myCard'>
                    <button className='shadow-lg shadow-sky-700 rounded-lg w-full flex justify-center py-8 px-10 text-gray-100 text-2xl font-semibold'>
                        <FaUserPlus className='mr-4' />
                        Your Card
                    </button>
                </Link>
            </div>

            {/* border section */}

            <div className="openAccount px-20 pt-10  ">

                <div className=' border-section '>
                    <hr className='border-2 border-sky-500 w-1/4 mx-auto rounded-md mb-8 ' />
                    <hr className='border-2  border-sky-500 w-1/3 mx-auto mb-8 rounded-md' />
                    <hr className='border-2 border-sky-500 mx-auto w-1/2 rounded-md' />


                </div>


            </div>

        </div>
    </div>
    );
};

export default AccountsProfile;