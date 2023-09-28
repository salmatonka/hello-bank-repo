import React, { useState, useEffect } from 'react'
import { useNavigation, useParams } from 'react-router-dom';
import useTitle from '../../../MyHooks/useTitle';

const OpenAccountDetails = () => {
  useTitle('OpenAccountDetails');
    const navigation = useNavigation();

    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
      fetch(`https://bank-server-salmatonka.vercel.app/singleAccountDetails/${id}`)
        .then((res) => res.json())
        .then((data) => setDetail(data));
    }, [id]);
  // console.log(detail)
    
    return (
        <div className="py-14 bg-gray-700 ">
          <div className="w-5/6 mx-auto px-4 ">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <img
              className="w-16 h-16 rounded-full"
              src={detail?.img}
              alt={`${detail?.name} profile picture`}
            />
            <div>
              <h2 className="text-2xl  text-sky-200 py-2 font-bold">{detail?.name}</h2>
              <p className="text-lg text-pink-200 font-bold">{detail?.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-2xl font-bold text-gray-500 py-2">Account Number</p>
              <p className="text-lg text-gray-300 font-medium">{detail?._id}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-500 py-2">National ID Card Number</p>
              <p className="text-lg text-gray-300 font-medium">{detail?.nid}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-500 py-2">Nominee Name</p>
              <p className="text-lg text-gray-300 font-medium">{detail?.nomineeName}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">           
            <div>
              <p className="text-2xl font-bold text-gray-500 py-2">Nominee ID Number</p>
              <p className="text-lg text-gray-300 font-medium">{detail?.nomineeNid}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-500 py-2">Relation with Nominee</p>
              <p className="text-lg text-gray-300 font-medium">{detail?.nomineeRelation}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-500 py-2">Phone Number</p>
              <p className="text-lg text-gray-300 font-medium">{detail?.number}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-2xl font-bold text-gray-500 py-2">Permanent Area</p>
              <p className="text-lg text-gray-300 font-medium">{detail?.permanentArea}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-500 py-2">Residential Area</p>
              <p className="text-lg text-gray-300 font-medium">{detail?.residentialArea}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-500 py-2">Gender</p>
              <p className="text-lg text-gray-300 font-medium">{detail?.gender}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
          <div>
              <p className="text-2xl font-bold text-gray-500 py-2">Account Type</p>
              <p className="text-lg text-gray-300 font-medium">{detail?.role}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-500 py-2">Role</p>
              <p className="text-lg text-gray-300 font-medium">{detail?.role}</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-500 py-2">BirthDate</p>
              <p className="text-lg text-gray-300 font-medium">{detail?.birthDate}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8"> 
          <div>
              <p className="text-2xl font-bold text-gray-500 py-2">Initial Amount</p>
              <p className="text-lg text-gray-300 font-medium">{detail?.amount}</p>
            </div>         
            <div>
              <p className="text-2xl font-bold text-gray-500 py-2">Status</p>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${detail?.status !== "pending"
                  ? "bg-pink-300 text-gray-700"
                  : "bg-sky-300 text-gray-700"
                  }`}
              >
                {detail?.status}
              </span>
            </div>
          </div>
         
        </div>
        </div>
      </div>
    )
  }

export default OpenAccountDetails;