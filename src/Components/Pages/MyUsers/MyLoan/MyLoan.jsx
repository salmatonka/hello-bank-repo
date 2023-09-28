import React, { useContext } from 'react';
import { AuthContext } from '../../../../userContext/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useTitle from '../../../../MyHooks/useTitle';

const MyLoan = () => {
    useTitle('MyLoan');
    const { user } = useContext(AuthContext)

    const {
        isLoading,
        refetch,
        data: loans = [],
    } = useQuery({
        queryKey: ["/userLoans", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `https://bank-server-salmatonka.vercel.app/userLoans?email=${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });
    // console.log(loans);
    return (
        
        <div className='bg-gray-900 text-gray-100 py-10'>
        {
            loans.length >= 1 ?
                <>
                    <h1 className='text-4xl text-center font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink-400 bg-gray-100 to-sky-400 pt-10 pb-5'>My Loan</h1>
                    <main className='mx-10   border-sky-500 rounded-lg shadow-lg relative'>
                        {
                            
                            loans?.map((loan, i) =>
                                <div
                                className=" lg:px-6 py-6 overflow-x-auto mt-8 border shadow-lg rounded-lg "
                                    key={loan.accountNumber}
                                >
                                    {
                                        loan.status === 'success' &&
                                        <>
                                            <table className="min-w-full text-center sm:text-sm lg:text-xl">
                                                <thead>
                                                    <tr>
                                                        <th>Loan Type</th>
                                                        <th>Loan Duration</th>
                                                        <th>Loan Amount</th>
                                                        <th>Loan Interest</th>
                                                        <th>Total Payment</th>
                                                        <th>Loan Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{loan.loan}</td>
                                                        <td>{loan.lDuration} Months</td>
                                                        <td>{loan.lAmount} BDT</td>
                                                        <td>{loan.interest} %</td>
                                                        <td>{loan.tLAmount}</td>
                                                        <td className="text-pink-500 font-semibold">{loan.status}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            {
                                                loan?.tLAmount <= 0 ?
                                                    <Link to={`/debtRepay/${loan?._id}`}>
                                                        <button  className="text-2xl w-full mt-10 p-3 flex items-center justify-center mx-auto rounded-lg shadow-lg shadow-gray-700 font-bold text-center text-gray-700 border-2 border-gray-500 hover:text-gray-200 bg-gradient-to-r from-pink-400 to-sky-400 hover:from-pink-500 hover:to-sky-500 duration-500" disabled >
                                                            Debt Repayment Success
                                                        </button>
                                                    </Link>
                                                    :
                                                    <Link
                                                     to={`/debtRepay/${loan?._id}`}>
                                                        <button className="text-2xl w-full mt-10 p-3 flex items-center justify-center mx-auto rounded-lg shadow-lg shadow-gray-700 font-bold text-center text-gray-700 border-2 border-gray-500 hover:text-gray-200 bg-gradient-to-r from-pink-400 to-sky-400 hover:from-pink-500 hover:to-sky-500 duration-500">
                                                            Debt Repayment
                                                        </button>
                                                    </Link>
                                            }
                                        </>
                                    }
                                </div>
                            )
                        }
                    </main>
                </>
                :
                <div>
                    <h1 className="text-4xl text-center font-semibold text-pink-300 py-10">
                        You have no Loan.
                    </h1>
                </div>
        }
    </div>
          
    )
    };
 export default MyLoan;