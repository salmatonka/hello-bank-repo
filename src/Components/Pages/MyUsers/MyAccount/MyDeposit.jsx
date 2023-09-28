import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../../../MyHooks/useTitle';

const MyDeposit = () => {
    useTitle('MyDeposit');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const { id } = useParams();



    const { isLoading, refetch, data: userInfo = {} } = useQuery({
        queryKey: ['/singleAccountDetails', id],
        queryFn: async () => {
            const res = await fetch(`https://bank-server-salmatonka.vercel.app/singleAccountDetails/${id}`)
            const data = await res.json()
            return data;
        }
    })

    // console.log(userInfo)

    const handleUserDeposits = event => {
        event.preventDefault();

        const form = event.target;

        // const accountNumber = form.accountNumber.value;
        const depositAmount = form.depositAmount.value;
        const userDeposit = {
            accountNumber: userInfo?._id,
            depositAmount: depositAmount,
            userAmount: userInfo?.amount,
            depStatus: "pending",email: userInfo?.email
        }

        console.log(userDeposit)
            fetch(`https://bank-server-salmatonka.vercel.app/depositRequest`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(userDeposit)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)

                    if (data.acknowledged === true) {
                        toast.success('Requested for the Deposit successfully. Please check dashboard-Deposit Requests ');
                        // navigate('/dashboard/depositRequest');
                        navigate('/myAccount');
                        refetch();
                    }

                })
                .catch(error => {
                    toast.error("Please Provide Valid Information")
                })
    }


    return (
        <div>

            <div className=' flex justify-center py-20 bg-gray-900'>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                    <div className="bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300  shadow-sky-400 rounded shadow-2xl p-7 sm:p-10">
                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                            Request for a Deposit
                        </h3>
                        <form
                            onSubmit={handleUserDeposits}
                        >



                            {/* Account Number */}

                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="accountNumber"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Account Number
                                </label>
                                <input

                                    readOnly
                                    type='text'
                                    defaultValue={userInfo?._id}

                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="accountNumber"
                                    name="accountNumber"
                                />
                            </div>


                            {/* Send Amount */}
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="depositAmount"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Send Amount
                                </label>
                                <input
                                    // placeholder="+88"
                                    placeholder='Ex: 50000 BDT'
                                    required
                                    type='number'
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="depositAmount"
                                    name="depositAmount"
                                />
                            </div>



                            <div className="mt-4 mb-2 sm:mb-4">
                                <input
                                    type="submit"
                                    value="Request"
                                    className="w-full border-2 border-sky-500 bg-gradient-to-r from-sky-400 to-pink-400 rounded-md py-2 font-bold text-gray-100 hover:scale-110 shadow-lg shadow-gray-700 duration-500"
                                />


                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDeposit;