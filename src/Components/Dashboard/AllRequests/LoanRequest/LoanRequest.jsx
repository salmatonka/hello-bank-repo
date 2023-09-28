import React, { useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../userContext/AuthProvider/AuthProvider';

const LoanRequest = () => {
    const { user } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const { id } = useParams();


    const { isLoading, refetch, data: usersInfo = {} } = useQuery({
        queryKey: ['/singleAccountDetails', id],
        queryFn: async () => {
            const res = await fetch(`https://bank-server-salmatonka.vercel.app/singleAccountDetails/${id}`)
            const data = await res.json()
            return data;
        }
    })

    // console.log(userInfo)


    // date
    // const currentDate = new Date();
    // const date = currentDate.toLocaleDateString("en-US", {
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });
    // console.log(date);

    const [nobel, setNobel] = useState(0)

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;

        const loan = form.loan.value;
        const income = form.income.value;
        const image = form.image.files[0];
        const company = form.company.value;
        const evidence = form.evidence.value;
        const lAmount = form.lAmount.value;
        const lDuration = form.lDuration.value;

        //     const loansData = {loan,income,company,evidence,lAmount,lDuration,image}

        //    console.log(loansData)

        const formData = new FormData()
        formData.append('image', image)
        const url = 'https://api.imgbb.com/1/upload?key=dc80d15667630dfb08a0c16646689fce'
        fetch(url, {
            method: "POST",
            body: formData

        })
            .then(res => res.json())
            .then(imgData => {
                 console.log(imgData)
                 if (imgData.status === 200)

                    if (lDuration === '12') {
                        const nobel = Number(lAmount)
                        const totalInterest = Number(nobel * 0.03)
                        const newAmount = Number(nobel + totalInterest)
                        setNobel(newAmount)

                        const loanData = {
                            name: usersInfo.name,
                            email: usersInfo?.email,
                            loan: loan,
                            image: imgData.data.display_url,
                            income,company,evidence,
                            number: usersInfo.number,
                            nid: usersInfo.nid,
                            accountNumber: usersInfo._id,
                            accountType: usersInfo.role,
                            status: 'pending',
                            lAmount: lAmount,
                            lDuration: lDuration,
                            tLAmount: newAmount,
                            interest: 0.03
                        }

                        fetch("https://bank-server-salmatonka.vercel.app/loanReq", {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(loanData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast.success("Requested for the Loan Successfully!!!");
                                    navigate('/myAccount')
                                }
                            })
                    }
                    else if (lDuration === '18') {
                        const nobel = Number(lAmount)
                        const totalInterest = Number(nobel * 0.05)
                        const newAmount = Number(nobel + totalInterest)
                        setNobel(newAmount)

                        const loanData = {
                            name: usersInfo.name,
                            email: usersInfo?.email,
                            loan: loan,
                            image: imgData.data.display_url,
                            income,company,evidence,
                            number: usersInfo.number,
                            nid: usersInfo.nid,
                            accountNumber: usersInfo._id,
                            accountType: usersInfo.role,
                            status: 'pending',
                            lAmount: lAmount,
                            lDuration: lDuration,
                            tLAmount: newAmount,
                            interest: 0.05
                        }

                        fetch("https://bank-server-salmatonka.vercel.app/loanReq", {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(loanData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast.success("Requested for the Loan Successfully!!!");
                                    navigate('/myAccount')
                                }
                            })
                    }
                    else {
                        const nobel = Number(lAmount)
                        const totalInterest = Number(nobel * 0.07)
                        const newAmount = Number(nobel + totalInterest)
                        setNobel(newAmount)

                        const loanData = {
                            name: usersInfo.name,
                            email: usersInfo?.email,
                            loan: loan,
                            image: imgData.data.display_url,
                            income,company,evidence,
                            number: usersInfo.number,
                            nid: usersInfo.nid,
                            accountNumber: usersInfo._id,
                            accountType: usersInfo.role,
                            status: 'pending',
                            lAmount: lAmount,
                            lDuration: lDuration,
                            tLAmount: newAmount,
                            interest: 0.07
                        }

                        fetch("https://bank-server-salmatonka.vercel.app/loanReq", {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(loanData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast.success("Requested for the Loan Successfully!!!");
                                    navigate('/myAccount')
                                }
                            })
                    }
            })

    }

    return (
        <div className='py-14 bg-gray-900'>
            <form onSubmit={handleSubmit}
                className='container max-w-[450px] mx-auto text-gray-100 border-2 border-gray-100 p-6 rounded-lg shadow-lg shadow-sky-500'>
                <h1 className='text-4xl text-center font-extrabold text-gray-50 pb-6 underline'>Request Loan</h1>
                <div>
                    <label>Choose Loan type</label>
                    <select
                        name="loan"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                    >
                        <option value="car">Car Loan</option>
                        <option value="student">Student Loan</option>
                        <option value="home">Home Loan</option>
                        <option value="personal">Personal Loan</option>
                    </select>

                </div>
                <div>
                    <div>
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            placeholder="ex: Kaiser Tanveer"
                            value={usersInfo?.name}
                        />

                    </div>
                </div>

                <div>
                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="number"
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
                <div>
                    <label>Monthly Income(Minimum 50000 BDT)</label>
                    <input
                        type='number'
                        name="income"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder='ex: 50000 BDT'
                    />
                </div>
                <div>
                    <label>Company Name</label>
                    <input
                        type='text'
                        name="company"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder='ex: XYZ Co. Ltd'
                    />
                </div>
                <div>
                    <label>Loan Amount</label>
                    <input
                        type='number'
                        name="lAmount"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder='ex: XYZ Co. Ltd'
                    />
                </div>
                <div>
                    <label>Choose Loan Duration</label>
                    <select
                        name="lDuration"

                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                    >
                        <option value="12">12 Months (interest 3%)</option>
                        <option value="18">18 Months (interest 5%)</option>
                        <option value="24">24 Months(interest 7%)</option>
                    </select>
                </div>

                <div>
                    <label>Passport Image</label>
                    <input
                        accept='image/*'
                        required
                        type="file"
                        name="image"
                        className="rounded focus:outline-none focus:ring-2 bg-gray-100 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder='Your passport pdf link'
                    />
                </div>

                <div>
                    <label>Valid Evidence of Company & Residential</label>
                    <textarea
                        name="evidence"
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder='Attach Your Pdf links here..'
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

export default LoanRequest;