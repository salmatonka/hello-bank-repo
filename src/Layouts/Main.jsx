import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

// import './Main.css';
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import {  FaHome, FaBloggerB } from "react-icons/fa";
import { GiBank,GiReceiveMoney} from "react-icons/gi";
import { AiFillContacts } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";
import { MdOutlineManageAccounts,MdDashboardCustomize } from "react-icons/md";
import { BsBoxArrowInRight,BsBoxArrowInLeft } from "react-icons/bs";                
import { toast } from 'react-toastify';
import Footer from '../Components/Shares/Footer/Footer';
import { AuthContext } from '../userContext/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Main = () => {
     // logOut
     const { user, logOut } = useContext(AuthContext);
     // console.log(user);
 
     const [open, setOpen] = useState(false);
     const [accountOpen, setAccountOpen] = useState(false);
 
     const [openCard, setOpenCard] = useState(false);
     const [cards, setCards] = useState([]);
 
     const [openLoan, setOpenLoan] = useState(false);
     const [loans, setLoans] = useState([]);
 
 
     const { isLoading, refetch, data: types = [] } = useQuery({
         queryKey: ["/accountsTypes"],
         queryFn: async () => {
             const res = await fetch(
                 "https://bank-server-salmatonka.vercel.app/accountsTypes"
             );
             const data = await res.json();
             return data;
         },
     });
     // console.log(types)
 
     useEffect(() => {
         fetch('https://bank-server-salmatonka.vercel.app/cardTypes')
             .then(res => res.json())
             .then(data => setCards(data))
     }, []);
 
 
     useEffect(() => {
         fetch('https://bank-server-salmatonka.vercel.app/loanTypes')
             .then(res => res.json())
             .then(data => setLoans(data))
     }, [])
 
     // handleLogOut
     const handleLogOut = () => {
         logOut(user?.email)
             .then(toast.warning('user logOut...!'))
             .catch(error => toast.error(error.message))
     }
 
     return (
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
                         className="font-extrabold text-3xl text-center text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 self-center whitespace-nowrap">Hello Bank</span>
                 </a>
                 <hr className="w-84 border border-sky-500 mb-6" />
 
                 <ul class="space-y-2 font-medium">
                         {/* home */}
                         <li className='pb-4 px-4'>
                             <Link to="/" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                 <FaHome />
                                 <span className="ml-3">Home</span>
                             </Link>
                         </li>
 
 
                         {/* ContactUs */}
                         <li className='pb-4 px-4'>
                             <Link to="/contactUs" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                 <AiFillContacts />
                                 <span className="flex-1 ml-3 whitespace-nowrap">Contact Us</span>
                             </Link>
                         </li>
 
                         {/* AboutUs */}
                         {/* <li className='pb-4 px-4'>
                             <Link to="/ourOffers" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                 <GiBank />
                                 <span className="flex-1 ml-3 whitespace-nowrap">OurOffers</span>
                             </Link>
                         </li> */}
 
                         {/* our offer */}
                         <li className='pb-4 px-4'>
                             <Link to="/ourOffers" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                 <FaBloggerB />
                                 <span className="flex-1 ml-3 whitespace-nowrap">Our Offers</span>
                             </Link>
                         </li>
 
                          {
                             user?.email ? (<>
 
                                 {/* AccountApi */}
                                 <li className='pb-4 px-4'
                                 >
                                     <button
                                         onClick={() => setAccountOpen(!accountOpen)}
                                         className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-800 shadow-md shadow-sky-400"
                                     >
                                         <div className="flex items-center">
                                             <MdOutlineManageAccounts className="mr-2" />
                                             <span className='mr-10'>Accounts</span>
                                         </div>
                                         {accountOpen ? (
                                             <HiChevronUp className="text-xl " />
                                         ) : (
                                             <HiChevronDown className="text-xl " />
                                         )}
                                     </button>
                                     {accountOpen && (
                                         <ul className="group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-sky-300 w-full text-gray-800">
                                             {types?.map(type =>
                                                 <li
                                                     onClick={() => setOpen(!open)}
                                                     key={type?._id}
                                                     className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-gray-800 hover:bg-pink-200 hover:text-gray-800  duration-700"
                                                 >
                                                     <NavLink
                                                         to={`/accountDetails/${type?.accountType}`}
                                                         className="space-x-3 block w-full hover:ml-2 duration-300 rounded-md py-2"
                                                     >
                                                         {type?.name}
                                                     </NavLink>
                                                 </li>
 
                                             )}
                                         </ul>
                                     )}
                                 </li>
 
                                 {/* CardApi */}
                                 <li className='pb-4 px-4'
                                 >
                                     <button
                                         onClick={() => setOpenCard(!openCard)}
                                         className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-800 shadow-md shadow-sky-400"
                                     >
                                         <div className="flex items-center">
                                             <BsCardText className="mr-2" />
                                             <span className='mr-14'>Cards</span>
                                         </div>
                                         {openCard ? (
                                             <HiChevronUp className="text-xl " />
                                         ) : (
                                             <HiChevronDown className="text-xl " />
                                         )}
                                     </button>
                                     {openCard && (
                                         <ul className="group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-sky-300 w-full text-gray-800">
                                             {cards?.map(card =>
                                                 <li
                                                     onClick={() => setOpen(!open)}
                                                     key={card._id}
                                                     className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-gray-800 hover:bg-pink-200 hover:text-gray-800  duration-700"
                                                 >
                                                     <NavLink
                                                         to={`/cardDetails/${card.cardType}`}
                                                         className="space-x-3 block w-full hover:ml-2 duration-300 rounded-md py-2"
                                                     >
                                                         {card?.name}
                                                     </NavLink>
                                                 </li>
 
                                             )}
                                         </ul>
                                     )}
                                 </li>
 
                                 {/* LoanApi */}
                                 <li className='pb-4 px-4'
                                 >
                                     <button
                                         onClick={() => setOpenLoan(!openLoan)}
                                         className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-800 shadow-md shadow-sky-400"
                                     >
                                         <div className="flex items-center">
                                             <GiReceiveMoney className="mr-2" />
                                             <span className='mr-14'>Loans</span>
                                         </div>
                                         {openLoan ? (
                                             <HiChevronUp className="text-xl " />
                                         ) : (
                                             <HiChevronDown className="text-xl " />
                                         )}
                                     </button>
                                     {openLoan && (
                                         <ul className="group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-sky-300 w-full text-gray-800">
                                             {loans?.map(loan =>
                                                 <li
                                                     onClick={() => setOpen(!open)}
                                                     key={loan._id}
                                                     className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-gray-800 hover:bg-pink-200 hover:text-gray-800  duration-700"
                                                 >
                                                     <NavLink
                                                         to={`/loanDetails/${loan.loanType}`}
                                                         className="space-x-3 block w-full hover:ml-2 duration-300 rounded-md py-2"
                                                     >
                                                         {loan?.name}
                                                     </NavLink>
                                                 </li>
 
                                             )}
                                         </ul>
                                     )}
                                 </li>
 
                                 {/* Dashboard */}
                                 <li className='pb-4 px-4'>
                                     <a href="/dashboard" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                         <MdDashboardCustomize />
                                         <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                                     </a>
                                 </li>
 
                                 {/* LogOut */}
                                 <li className='pb-4 px-4'>
                                     <button onClick={handleLogOut} className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                        <BsBoxArrowInLeft />
                                         <span className=" ml-3 ">LogOut</span>
                                     </button>
                                 </li>
 
                                 {/* updateProfile */}
                                 <div className=" pb-4 px-4">
                                     <div className="bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 rounded-lg shadow-md shadow-sky-400 py-2 px-4">
                                         <div className="flex  ">
                                             <img alt="" className="w-12 h-12 rounded-full  dark:bg-gray-500 " src={user?.photoURL} />
                                             <h2 className='text-gray-900 text-xl font-bold pl-2'>{user?.displayName}</h2>
                                         </div>
                                     </div>
                                 </div>
                             </>) : (<>
 
                                 {/* Login */}
                                 <li className='pb-4 px-4'>
                                     <a href="/logIn" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                         <BsBoxArrowInRight />
                                         <span className="flex-1 ml-3 whitespace-nowrap">LogIn</span>
                                     </a>
                                 </li>
 
                             </>)
                         }
 
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
     );
 };
export default Main;