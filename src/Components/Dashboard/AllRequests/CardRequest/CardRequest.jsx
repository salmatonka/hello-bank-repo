import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../../userContext/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../../../MyHooks/useTitle';

const CardRequest = () => {
    useTitle('CardRequest');
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const { id } = useParams()

    const { isLoading, refetch, data: usersInfo = {} } = useQuery({
        queryKey: ['/singleAccountDetails', id],
        queryFn: async () => {
            const res = await fetch(`https://bank-server-salmatonka.vercel.app/singleAccountDetails/${id}`)
            const data = await res.json()
            return data
        }
    })
    // console.log(usersInfo)


const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const card = form.card.value;
    // console.log(card)
    const cardData = {
        name: usersInfo.name,
        email: usersInfo?.email,
        card: card,
        number: usersInfo.number,
        nid: usersInfo.nid,
        accountNumber: usersInfo._id,
        accountType: usersInfo.role,
        status: 'pending'
    }
    console.log(cardData)

    fetch("https://bank-server-salmatonka.vercel.app/cardsRequest", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(cardData)
    })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                toast.success("Requested for the Deposit successfully. Please check dashboard-card Requests !!!");
                navigate('/myAccount')
            }
        })


}

    return (
        <div className='py-14 bg-gray-900'>
            <form onSubmit={handleSubmit}
                className='container max-w-[450px] mx-auto text-gray-100 border-2 border-gray-100 p-6 rounded-lg shadow-lg shadow-sky-500'>
                <h1 className='text-4xl text-center font-extrabold text-gray-50 pb-6 underline'>Request a card</h1>
                <div>
                    <label>Choose a Card</label>
                    <select
                       name="card"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                    >
                        <option value="debit">Debit Card</option>
                        <option value="credit">Credit Card</option>
                    </select>
                   
                </div>
                <div>
                    <div>
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="user"
                           
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            placeholder="Ex: John Khan"
                            value={usersInfo?.name}
                        />
                        
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        value={usersInfo?.email}
                    />
                    
                </div>
                <div>
                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        value={usersInfo?.number}
                    />
                    
                </div>
                <div>
                    <label>NID</label>
                    <input
                        type="text"
                        name="nid"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        value={usersInfo?.nid}
                    />
                    
                </div>
                <div>
                    <label>Account Number</label>
                    <input
                        type='text'
                        name="accountNumber"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        value={usersInfo?._id}
                    />
                   
                </div>


                <input
                    type="submit"
                    value="Request"
                    className="w-full border-2 border-sky-500 bg-gradient-to-r from-sky-400 to-pink-400 rounded-md py-2 font-bold uppercase text-gray-100 hover:scale-110 shadow-lg shadow-gray-700 duration-500"
                />
            </form>
        </div>
    );
};

export default CardRequest;