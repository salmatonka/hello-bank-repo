import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaInfoCircle, FaTrashAlt } from 'react-icons/fa';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../../../MyHooks/useTitle';

const UserCardRequest = () => {
  useTitle('UserCardRequest');
    
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const { isLoading, refetch, data: usersInfo = [] } = useQuery({
    queryKey: ['/dashCardReq'],
    queryFn: async () => {
      const res = await fetch(`https://bank-server-salmatonka.vercel.app/dashCardReq`)
      const data = await res.json()
      return data
    }
  })

  const handStatus = (id, accountNumber, card) => {
    if (card === 'debit') {
      const userData = {
        id: id,
        accountNumber: accountNumber,
        card: card
      }
      fetch("https://bank-server-salmatonka.vercel.app/dashCardDebit", {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            toast.success("Card Request Decline")
            navigate('/myCard');
            refetch()
          }
        })
    }
    else {
      const userData = {
        id: id,
        accountNumber: accountNumber,
        card: card
      }
      fetch("https://bank-server-salmatonka.vercel.app/dashCardCredit", {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            toast.success("Card Request Decline")
            refetch()
          }
        })
    }
  }

  const handleDelete = (id, accountNumber) => {
    const userData = {
      id: id,
      accountNumber: accountNumber
    }
    fetch("https://bank-server-salmatonka.vercel.app/dashCardDelete", {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("Card Request Decline");
          navigate('/myCard');
          refetch();
        }
      })
  }
    return (
        <div>
        <div className='my-16 lg:my-0 lg:px-10 px-6 py-14 bg-gray-900 text-gray-100'>
          <h1 className='text-center text-xl lg:text-3xl  font-bold  text-gray-100 pb-6'>All Card Requests of Your Bank is Here</h1>
          <div className="overflow-x-auto mt-8">
            <table className="min-w-full text-xs">
              <thead>
                <tr className="text-left">
                  <th className="lg:lg:p-3">Account Type</th>
                  <th className="lg:p-3">User Name</th>
                  <th className="lg:p-3">User E-mail</th>
                  <th className="lg:p-3">Card Type</th>
                  <th className="lg:p-3">Status</th>
                  <th className="lg:p-3">Details</th>
                  <th className="lg:p-3">Delete</th>
                </tr>
              </thead>
              <tbody>
  
                {
                  usersInfo?.map((user, i) => <tr className="border-b border-opacity-20">
                    <td className="lg:p-3">{user?.accountType}</td>
                    <td className="lg:p-3">{user?.name}</td>
                    <td className="lg:p-3">{user?.email}</td>
                    <td className="lg:p-3">{user?.card}</td>
                    <td className="lg:p-3">
                      {
                        user?.status === 'pending' ?
                          <button onClick={() => handStatus(user?._id, user?.accountNumber, user?.card)} className="hover:border-[2px] border-gray-700 hover:bg-pink-500 hover:text-gray-700 text-pink-500 py-1 px-2 font-bold rounded-md hover:scale-110 duration-700">{user?.status}...</button>
                          :
                          <button className="lg:lg:p-3 text-sky-500 font-bold">{user?.status}</button>
                      }
                    </td>
                    <td className="lg:lg:p-3">
                      <Link to={`/dashboard/singleAccountDetails/${user?.accountNumber}`}>
                        <button className="hover:border-[2px] border-gray-700 hover:bg-sky-500 hover:text-gray-700 text-sky-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700">
                          <FaInfoCircle />
                        </button>
                      </Link>
                    </td>
                    <td><button onClick={() => handleDelete(user?._id, user?.accountNumber)} className="hover:border-[2px] border-gray-700 hover:bg-pink-500 hover:text-gray-700 text-pink-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700"><FaTrashAlt /></button></td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default UserCardRequest;