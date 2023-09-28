import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import { FaInfoCircle, FaTrashAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../../MyHooks/useTitle';

const DepositRequest = () => {
    useTitle('DepositRequest');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const {
        isLoading,
        refetch,
        data: usersInfo = [],
    } = useQuery({
        queryKey: ["/userLoanReq"],
        queryFn: async () => {
            const res = await fetch(
                `https://bank-server-salmatonka.vercel.app/dashDepoShow`
            );
            const data = await res.json();
            return data;
        },
    });
    // console.log(usersInfo);

    const handleDelete = (id, accountNumber) => {

        const userData = {
            id,
            accountNumber
        }

        fetch(`https://bank-server-salmatonka.vercel.app/userDepositDelete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Loan Delete Successfully')
                    refetch()
                }
            })
    }

    const handStatus = (id, accountNumber, depositAmount) => {
        const userData = {
            id,
            accountNumber,
            depositAmount
        }
        fetch(`https://bank-server-salmatonka.vercel.app/userDepositUpdate`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Deposit updated successfully')
                    navigate('/myAccount');
                    refetch()
                }
            })
    }

    return (
        
        <div className='my-16 lg:my-0 lg:px-10 px-6 py-14 bg-gray-900 text-gray-100'>
            <h1 className='text-center text-xl lg:text-3xl  font-bold  text-gray-100 pb-6'>All Deposit Requests Your Bank Is Here</h1>
            <div className="overflow-x-auto mt-8">
                <table className="min-w-full text-xs ">
                    <thead>
                        <tr className="text-left ">
                            <th className="lg:p-3 p-1">User Email</th>
                            <th className="lg:p-3 p-1">Account Number</th>
                            <th className="lg:p-3 p-1">Deposit Amount</th>
                            <th className="lg:p-3 p-1">Status</th>
                            <th className="lg:p-3 p-1">Details</th>
                            <th className="lg:p-3 p-1">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            usersInfo?.map((user, i) =>
                                <tr className="border-b border-opacity-20  ">
                                    <td className="lg:p-3 p-1">{user?.email}</td>
                                    <td className="lg:p-3 p-1">{user?.accountNumber}</td>
                                    <td className="lg:p-3 p-1">{user?.depositAmount}</td>
                                    <td className="lg:p-3 p-1">
                                        {
                                            user?.depStatus === 'pending' ?
                                                <button onClick={() => handStatus(user?._id, user?.accountNumber, user?.depositAmount)} className="text-pink-500 font-bold border-[2px] border-pink-500 py-1 px-2 rounded-md hover:scale-110">{user?.depStatus}</button>
                                                :
                                                <button className="lg:p-3 p-1 text-sky-500 font-bold">{user?.depStatus}</button>
                                        }
                                    </td>
                                    <td className="lg:p-3 p-1">
                                        <Link to={`/singleDetails/${user?.accNum}`}>
                                            <button className="hover:border-[2px] border-gray-700 hover:bg-sky-500 hover:text-gray-700 text-sky-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700">
                                                <FaInfoCircle />
                                            </button>
                                        </Link>
                                    </td>
                                    {
                                        user?.depStatus === 'pending' &&
                                        <td><button onClick={() => handleDelete(user?._id, user?.accountNumber)} className="hover:border-[2px] border-gray-700 hover:bg-pink-500 hover:text-gray-700 text-pink-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700"><FaTrashAlt /></button></td>
                                    }
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
   
    );
};

export default DepositRequest;