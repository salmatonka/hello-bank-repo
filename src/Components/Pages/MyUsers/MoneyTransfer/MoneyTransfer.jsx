import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import useTitle from '../../../../MyHooks/useTitle';

const MoneyTransfer = () => {
    useTitle('MoneyTransfer');
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

    console.log(userInfo)


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const transfer = form.transfer.value;
        const sendAmount = form.sendAmount.value;
        const userData = {
            id,
            user: userInfo?.name,
            transfer: transfer,
            sendAmount: sendAmount,
            accountNumber: userInfo?._id,
            userAmount: userInfo?.amount,
        }
        //   console.log(userData)


        if (userData.sendAmount < userInfo.amount) {

            fetch(`https://bank-server-salmatonka.vercel.app/userMoneyTrans`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(userData)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)

                    if (data.acknowledged) {

                    }

                })
            // .catch(error => {
            //     toast.error("Please Provide Valid Information")
            // })
            toast.success('Money Transfer successfully');

            navigate('/myAccount');
            refetch();
        }
        else {
            toast.error('You Do not have enough money in your account please deposit then transfer');
        }
    }



    return (
        <div className='py-20 bg-gray-900'>
            <form
                onSubmit={handleSubmit}
                className='container max-w-[450px] mx-auto text-gray-100 border-2 border-gray-100 p-6 rounded-lg shadow-lg shadow-sky-500'>
                <h1 className='text-4xl text-center font-extrabold text-gray-50 pb-6 '>Receiver Money Transfer Information</h1>
                <div>
                    <label>Choose Account type</label>
                    <select
                        name="transfer"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                    >
                        <option value="Student">Student Account</option>
                        <option value="Savings">Savings Account</option>
                        <option value="Current">Current Account</option>
                        <option value="Fixed-Deposit">Fixed Deposit Account</option>
                    </select>

                </div>
                <div>
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="user"
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"

                            defaultValue={userInfo?.name}
                        />
                    </div>
                </div>

                <div>
                    <label>Account Number</label>
                    <input
                        defaultValue={userInfo?._id}
                        type='text'
                        name="accountNumber"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"

                    />
                </div>
                <div>
                    <label>Send Amount</label>
                    <input
                        type='number'
                        name="sendAmount"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder='ex: 50000 BDT'
                    />
                </div>

                <input
                    type="submit"
                    value="Request"
                    className="w-full border-2 border-sky-500 bg-gradient-to-r from-sky-400 to-pink-400 rounded-md py-2 font-bold text-gray-100 hover:scale-110 shadow-lg shadow-gray-700 duration-500"
                />
            </form>
        </div>
    );
};

export default MoneyTransfer;