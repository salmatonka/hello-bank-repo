import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../../MyHooks/useTitle';


const AllUsers = () => {
    useTitle('AllUsers');
    const navigation = useNavigation();

    const { isLoading, refetch, data: users = [] } = useQuery({
        queryKey: ['/allUsers'],
        queryFn: async () => {
            const res = await fetch('https://bank-server-salmatonka.vercel.app/allUsers')
            const data = await res.json()
            return data
        }
    })
    // console.log(users)
    const handleDelete = (id) => {
        fetch(`https://bank-server-salmatonka.vercel.app/allUsers/${id}`, {
            method: 'DELETE',
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

    return (
        <div className='lg:px-10 px-6 py-14 bg-gray-900'>
            <div className='my-16 lg:my-0  text-gray-100 '>
                <h1 className='text-center text-xl lg:text-3xl  font-bold  text-gray-100 pb-6'>All User of Your Bank is Here</h1>
                <div className="overflow-x-auto mt-8">
                    <table className="min-w-full text-xs">
                        <thead>
                            <tr className="text-left">
                                <th className="lg:p-3">User Photo</th>
                                <th className="lg:p-3">User Name</th>
                                <th className="lg:p-3">User E-mail</th>
                                <th className="lg:p-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users?.map((user, i) => <tr className="border-b border-opacity-20">
                                    <td className="lg:p-3"><img src={user?.image} alt="me"
                                        className="w-10 h-10 rounded-full bg-gray-100 hover:scale-150 duration-500"
                                    /></td>
                                    <td className="lg:p-3">{user?.name}</td>
                                    <td className="lg:p-3 ">{user?.email}</td>
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

export default AllUsers;