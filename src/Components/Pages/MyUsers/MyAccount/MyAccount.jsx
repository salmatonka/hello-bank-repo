import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaPlusCircle } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import { AuthContext } from "../../../../userContext/AuthProvider/AuthProvider";
import useTitle from '../../../../MyHooks/useTitle';

const MyAccount = () => {
    useTitle('MyAccount');

    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: myAccounts = [], } = useQuery({
        queryKey: ["/userAccount", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `https://bank-server-salmatonka.vercel.app/userAccount?email=${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });
    // console.log(myAccounts);
    return (
        <div className='bg-gray-900 py-10 text-gray-100'>

            {myAccounts.length >= 1 ? (
                <div className='my-16 lg:my-0'>
                    <h1 className='text-center text-3xl font-bold text-gray-100'>My Accounts</h1>

                    <div className='px-14 pb-14'>
                        {
                            myAccounts.map((myAccount) => <div className=" lg:px-6 py-6 overflow-x-auto mt-8 border shadow-lg rounded-lg ">
                                <table className="min-w-full text-center sm:text-sm lg:text-xl">
                                    <thead>
                                        <tr className="text-center">

                                            <th className="p-3">User Name</th>
                                            <th className="p-3">Amount</th>
                                            {myAccount.depositReq && <th>Deposit Status</th>}

                                            <th>Account Status</th>
                                            {myAccount.status === "success" && <th>Card Status</th>}
                                            {myAccount.status === "success" && <th>Loan Status</th>}

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td className="p-3">{myAccount?.name}</td>

                                            <td className="p-3">{myAccount?.amount} BDT</td>

                                            {myAccount?.depositReq && <td>{myAccount?.depositReq}</td>}

                                            <td className="p-3">
                                                {myAccount.status === "pending" ? (
                                                    <p className="text-pink-500 font-bold">
                                                        {myAccount?.status}..
                                                    </p>
                                                ) : (
                                                    <Link to={`/dashboard/openAccountDetails/${myAccount?._id}`}>
                                                        <button className="hover:border-[2px] border-gray-700 hover:bg-sky-500 hover:text-gray-700 text-sky-300 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700">
                                                            <FaInfoCircle />
                                                        </button>
                                                    </Link>
                                                )}

                                            </td>

                                            {myAccount?.status === "success" && (
                                                <td>
                                                    {
                                                        myAccount?.cards === "pending" ?
                                                            <h3 className="text-pink-400 font-bold">Pending...</h3>
                                                            :
                                                            <>
                                                                {
                                                                    myAccount?.cardStatus === 'success' ?
                                                                        <h3 className="text-sky-400 font-bold">Success</h3>
                                                                        :
                                                                        <Link to={`/cardRequest/${myAccount?._id}`}>
                                                                            <button className="text-sky-500 border-2 border-sky-400 font-extrabold hover:bg-pink-400 hover:text-gray-100 hover:scale-110 rounded-md px-1 duration-500">
                                                                                Request
                                                                            </button>
                                                                        </Link>
                                                                }
                                                            </>
                                                    }
                                                </td>
                                            )}

                                            {myAccount?.status === "success" && (
                                                <td>
                                                    {
                                                        myAccount?.loanStatus === "pending" ?
                                                            <h3 className="text-pink-400 font-bold">Pending...</h3>
                                                            :
                                                            <>
                                                                {
                                                                    myAccount?.loanStatus === 'success' ?
                                                                        <h3 className="text-sky-500 font-bold">Success</h3>
                                                                        :
                                                                        <Link to={`/loanRequest/${myAccount?._id}`}>
                                                                            <button className="text-sky-400 border-2 border-sky-500 font-extrabold hover:bg-pink-400 hover:text-gray-100 hover:scale-110 rounded-md px-1 duration-500">
                                                                                Request
                                                                            </button>
                                                                        </Link>
                                                                }
                                                            </>
                                                    }
                                                </td>
                                            )}

                                        </tr>

                                    </tbody>
                                </table>

                                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-8'>
                                    <Link to={`/myDeposit/${myAccount._id}`} ><button className="text-2xl w-full p-3 flex items-center justify-center mx-auto rounded-lg shadow-lg shadow-gray-700 font-bold text-center text-gray-500 border-2 border-gray-500 hover:text-gray-200 bg-gradient-to-r from-pink-400 to-sky-400 hover:from-green-400 hover:to-sky-400 duration-500"><FaPlusCircle className="mr-2" /><span>Deposit</span> </button></Link>
                                    <Link to={`/moneyTransfer/${myAccount._id}`}> <button className="text-2xl w-full p-3 flex items-center justify-center mx-auto rounded-lg shadow-lg shadow-gray-700 font-bold text-center text-gray-500 border-2 border-gray-500 hover:text-gray-200 bg-gradient-to-r from-pink-400 to-sky-400 hover:from-green-400 hover:to-sky-400 duration-500 "><FaPlusCircle className="mr-2" /><span>Transfer</span></button></Link>

                                </div>
                            </div>)
                        }
                    </div>

                </div>) : (<h1 className="text-4xl text-center font-semibold text-pink-400 py-10">
                    Sorry!! You have no account. Please
                    <Link to="/accountsForm" className="text-sky-500 hover:underline ml-1">
                        create one
                    </Link>
                </h1>)}



        </div>

    );
};

export default MyAccount;