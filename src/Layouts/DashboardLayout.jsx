import React from 'react';
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { BiSolidHourglass } from "react-icons/bi";
import { TbFloatRight } from "react-icons/tb";
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Shares/Footer/Footer';

const DashboardLayout = () => {
    return (
    <div>
            <div className='bg-gray-800'>
                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span class="sr-only">Open sidebar</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>

                <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-900 ">
                        <a href="https://flowbite.com/" class="flex items-center pl-2.5 mb-5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Hello_bank%21_Logo.png" className="h-6 mr-3 sm:h-7" alt="logo" />
                            <span
                                className="font-extrabold text-3xl text-center text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 self-center whitespace-nowrap">DASHBOARD</span>
                        </a>
                        <hr className="w-84 border border-sky-500 mb-6" />

                        <ul class="space-y-2 font-medium">


                        <li className='pb-4 px-4'>
                            <Link to='/' className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                               <ImHome />
                                <span className="ml-3">Home</span>
                            </Link>
                        </li>
                        <li className='pb-4 px-4'>
                            <Link to='/dashboard' className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                            <MdOutlineSupervisorAccount />
                                <span className="ml-3"> Accounts info</span>
                            </Link>
                        </li>
                       
                        <li className='pb-4 px-4'>
                            <Link to='/dashboard/userCardRequest' className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                <BsCardText />
                                <span className="ml-3">Card Requests</span>
                            </Link>
                        </li>
                        <li className='pb-4 px-4'>
                            <Link to='/dashboard/userLoanRequest' className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                <GiPayMoney />
                                <span className="ml-3">Loan Requests</span>
                            </Link>
                        </li>
                        <li className='pb-4 px-4'>
                            <Link to='/dashboard/depositRequest' className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                <BiSolidHourglass />
                                <span className="ml-3">Deposit Requests</span>
                            </Link>
                        </li>
                        <li className='pb-4 px-4'>
                            <Link to='/dashboard/allUsers' className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                <TbFloatRight />
                                <span className="ml-3">All Users</span>
                            </Link>
                        </li>
                        </ul>

                    </div>
                </aside>

                <div class="lg:pl-4 sm:ml-64">
                    <div class="">
                        <Outlet />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;