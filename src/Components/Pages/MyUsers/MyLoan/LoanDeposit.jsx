import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../../../../MyHooks/useTitle';
import { toast } from 'react-toastify';

const LoanDeposit = () => {
    useTitle('LoanDeposit');
    const { id } = useParams();

    const { isLoading, refetch, data: usersInfo = {} } = useQuery({
        queryKey: ['/singleLoanDetails', id],
        queryFn: async () => {
            const res = await fetch(`https://bank-server-salmatonka.vercel.app/singleLoanDetails/${id}`)
            const data = await res.json()
            return data
        }
    })
    // console.log(usersInfo)

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const amount = form.amount.value;

        if (usersInfo?.tLAmount > amount){
            const userInfo = {
                email: usersInfo?.email,
                lAmount: usersInfo?.lAmount,
                tLAmount: usersInfo?.tLAmount,
                id: usersInfo?._id,
                accountNumber: usersInfo?.accountNumber
,
                amount: usersInfo?.amount,
                nid: usersInfo?.nid
            }


            // fetch(`https://bank-server-salmatonka.vercel.app/lInfoUpdate`, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(userInfo)
            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data);
            //     if (data.acknowledged === true) {
            //         toast.success('Loan Status updated successfully')
            //         refetch()
            //     }
            // })
        }
        // else {
        //     console.log("Your Information Is Wrong");
        // }
    }
    
    return (
        <div className='py-14 bg-gray-700'>
            <form onSubmit={handleSubmit}
                className='container max-w-[450px] mx-auto text-gray-100 border-2 border-gray-100 p-6 rounded-lg shadow-lg shadow-pink-500'>
                <h1 className='text-4xl text-center font-extrabold text-gray-50 pb-6 underline'>Loan Repay</h1>
                <div>
                    <label>Your Loan Type</label>
                    <input
                        type="text"
                        name="loan"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder="Ex: john Khan"
                        defaultValue={usersInfo?.loan}
                        readOnly
                    />
                </div>
                <div>
                    <label>Loan Repay Account Number</label>
                    <input
                        type='text'
                        name="accountNumber"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        // defaultValue={usersInfo?._id}
                        placeholder="26th6ty22hy"
                    />
                </div>
                <div>
                    <div>
                        <label>Amount</label>
                        <input
                            type="number"
                            name="amount"
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            placeholder="Ex: 1,00,000"
                        />
                    </div>
                </div>

                <input
                    type="submit"
                    value="Request"
                    className="w-full border-2 border-sky-500 bg-gradient-to-r from-sky-500 to-pink-500 rounded-md py-2 font-bold uppercase text-gray-100 hover:scale-110 shadow-lg shadow-gray-700 duration-500"
                />
            </form> 
        </div>
    );
};

export default LoanDeposit;