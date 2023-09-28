import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaInfoCircle, FaTrashAlt } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../../MyHooks/useTitle';

const AccountInfo = () => {
    useTitle('Dashboard-AccountInfo');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const { isLoading, refetch, data: usersInfo = [] } = useQuery({
        queryKey: ['/userAccounts'],
        queryFn: async () => {
            const res = await fetch('https://bank-server-salmatonka.vercel.app/userAccounts')
            const data = await res.json()
            return data
        }
    })

    const handleDelete = (id) => {
        fetch(`https://bank-server-salmatonka.vercel.app/requestedUsersDelete/${id}`, {
            method: 'DELEtE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('User Delete Successfully')
                    refetch()
                }
            })
    }

    const handStatus = (id) => {
        fetch(`https://bank-server-salmatonka.vercel.app/userStatusUpdate/${id}`, {
            method: 'PUt',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Status updated successfully')
                    navigate('/myAccount');
                    refetch()
                }
            })
    }

    

    return (
        <div>
            <div className='lg:px-10 px-6 py-14 bg-gray-900 text-gray-100'>
                <h1 className='text-center text-xl lg:text-3xl  font-bold  text-gray-100 pb-6'>All User Accounts of Your Bank is Here</h1>
                <div className="overflow-x-auto mt-8">
                    <table className="min-w-full text-xs">
                        <thead>
                            <tr className="text-left">
                                <th className="lg:p-3 p-1">User Photo</th>
                                <th className="lg:p-3 p-1">User Name</th>
                                <th className="lg:p-3 p-1">User E-mail</th>
                                <th className="lg:p-3 p-1">Account type</th>
                                <th className="lg:p-3 p-1">Status</th>
                                <th className="lg:p-3 p-1">Details</th>
                                <th className="lg:p-3 p-1">Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                usersInfo?.map((user, i) => <tr className="border-b border-opacity-20">
                                    <td className="lg:p-3 p-1"><img src={user?.img} alt="me"
                                        className="w-10 h-10 rounded-full bg-gray-100 hover:scale-150 duration-500"
                                    /></td>
                                    <td className="lg:p-3 p-1">{user?.name}</td>
                                    <td className="lg:p-3 whitespace-wrap p-1 ">{user?.email}</td>
                                    <td className="lg:p-3 p-1">{user?.role}</td>
                                    <td className="lg:p-3 p-1">
                                        {
                                            user?.status === 'pending' ?
                                                <button onClick={() => handStatus(user?._id)} className=" text-pink-500 font-bold border-[2px] border-pink-500 py-1 px-2 rounded-md hover:scale-110">{user?.status}..</button>
                                                :
                                                <button className="text-sky-500 font-bold lg:p-3">{user?.status}</button>
                                        }
                                    </td>
                                    <td className="lg:p-3 p-1">
                                        <NavLink to={`/dashboard/openAccountDetails/${user?._id}`}>
                                            <button className="hover:border-[2px] border-gray-700 hover:bg-sky-500 hover:text-gray-700 text-sky-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700">
                                                <FaInfoCircle />
                                            </button>
                                        </NavLink>
                                    </td>
                                    <td><button onClick={() => handleDelete(user?._id)} className="hover:border-[2px] border-gray-700 hover:bg-pink-500 hover:text-gray-700 text-pink-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700"><FaTrashAlt /></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;