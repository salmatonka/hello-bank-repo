import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../userContext/AuthProvider/AuthProvider';
import useTitle from '../../../MyHooks/useTitle';

const AccountsForm = () => {

  useTitle('AccountsForm');
  const { user } = useContext(AuthContext)

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  // date
  // const currentDate = new Date();
  // const date = currentDate.toLocaleDateString("en-US", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });
  // console.log(date);


  const handleOpenAccountFrom = event => {
    event.preventDefault()

    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const role = form.role.value;
    const number = form.number.value;
    const image = form.image.files[0];
    const gender = form.gender.value;
    const residentialArea = form.residentialArea.value;
    const permanentArea = form.permanentArea.value;
    const nid = form.nid.value;
    const nomineeName = form.nomineeName.value;
    const birthDate = form.birthDate.value;
    const nomineeNid = form.nomineeNid.value;
    const nomineeRelation = form.nomineeRelation.value;


    // const requestedAccountsData = { role, name, email, number, image, gender, residentialArea, permanentArea, nid, nomineeName, birthDate, nomineeNid, nomineeRelation }
    // console.log(requestedAccountsData)

    const formData = new FormData()
    formData.append('image', image)
    const url = 'https://api.imgbb.com/1/upload?key=dc80d15667630dfb08a0c16646689fce'
    fetch(url, {
      method: "POST",
      body: formData

    })
      .then(res => res.json())
      .then(imgData => {
        // console.log(imgData)
        if (imgData.success) {

          const requestedAccountsData = {
            role, name, email, number, img: imgData.data.url, gender, residentialArea, permanentArea, nid, nomineeName, birthDate, nomineeNid, nomineeRelation, amount: 0, status: "pending",
            card: "blank",
          }


          //   console.log(requestedUserData)
          // post
          fetch(`https://bank-server-salmatonka.vercel.app/requestedUsers`, {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(requestedAccountsData)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data.acknowledged) {
                toast.success("Requested for your Account Successfully!!");
                navigate('/accountsProfile');
              }

            })
        }

      })

  }

  return (
    <div className='py-14'>
      <div className="md:w-5/6 md:w-[600px] mx-auto relative bg-transparent p-6 rounded-lg shadow-xl shadow-gray-900 bg-gradient-to-r from-gray-200 to-gray-100 ">
        <div className="bg-gray-800 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300  shadow-sky-400 rounded shadow-2xl p-7 sm:p-10">
          <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
            Request Account
          </h3>
          <form onSubmit={handleOpenAccountFrom}>

            {/* Choose Card type  */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="role"
                className="inline-block mb-1 font-medium"
              >
                Choose Account Type
              </label>
              <select name='role' className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline">

                <option value="Student Account" >Students Account</option>
                <option value="Savings Account">Savings Account</option>
                <option value="Current Account">Current Account</option>
                <option value="Fixed Deposit">Fixed Deposit Account</option>

              </select>
            </div>
            {/*  Name */}
            {/* First Name */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="firstName"
                className="inline-block mb-1 font-medium"
              >
                First name
              </label>
              <input
                placeholder="Ex: John"
                // defaultValue={user?.displayName}
                // disabled
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
              />
            </div>
            {/* First Name */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="lastName"
                className="inline-block mb-1 font-medium"
              >
                Last name
              </label>
              <input
                placeholder="Ex: Khan"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="lastName"
                name="lastName"
              />
            </div>

            {/* Email */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="email"
                className="inline-block mb-1 font-medium"
              >
                E-mail
              </label>
              <input
                placeholder="john123@gmail.com"
                defaultValue={user?.email}
                disabled
                type="email"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
              />
            </div>

            {/* Mobile Number */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="number"
                className="inline-block mb-1 font-medium"
              >
                Mobile Number
              </label>
              <input
                // placeholder="+88"
                defaultValue="+880"
                required
                type="tel"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="number"
                name="number"
              />
            </div>

            {/*  Photo  */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="image"
                className="inline-block mb-1 font-medium"
              >
                Your Photo (Passport Size)
              </label>
              <input

                accept='image/*'
                required
                type="file"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="image"
                name="image"
              />
            </div>

            {/* Gender */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="gender"
                className="inline-block mb-1 font-medium"
              >
                Gender
              </label>
              <select name="gender" className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline">

                <option>Male</option>
                <option>Female</option>
                <option>Others</option>

              </select>
            </div>

            {/*  Area */}
            {/* Residential Area */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="residentialArea"
                className="inline-block mb-1 font-medium"
              >
                Residential Area
              </label>
              <input
                placeholder="Ex: Mirpur,Dhaka"

                required
                type="area"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="residentialArea"
                name="residentialArea"
              />
            </div>

            {/* Permanent Area */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor=" permanentArea"
                className="inline-block mb-1 font-medium"
              >
                Permanent Area
              </label>
              <input
                placeholder="Ex: Mirpur,Dhaka"
                required
                type="area"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="permanentArea"
                name="permanentArea"
              />
            </div>

            {/* NID */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="number"
                className="inline-block mb-1 font-medium"
              >
                NID
              </label>
              <input
                placeholder="Your NID Number"

                required
                type="number"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="nid"
                name="nid"
              />
            </div>

            {/* Nominee Name */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="nomineeName"
                className="inline-block mb-1 font-medium"
              >
                Nominee Name

              </label>
              <input
                type="nomineeName"
                required
                placeholder="Ex: Rohim Khan"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="nomineeName"
                name="nomineeName"
              />
            </div>

            {/* type="date" */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="birthDate"
                className="inline-block mb-1 font-medium"
              >
                Birth Date

              </label>
              <input
                placeholder="ex: 31/7/2000"
                required
                type="date"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="birthDate"
                name="birthDate"
              />
            </div>

            {/* Nominee NID */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="nomineeNid"
                className="inline-block mb-1 font-medium"
              >
                Nominee NID
              </label>
              <input
                placeholder="Ex: 1236547893"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="nomineeNid"
                name="nomineeNid"
              />
            </div>

            {/*  Nominee Relation */}
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor=" nomineeRelation"
                className="inline-block mb-1 font-medium"
              >
                Nominee Relation
              </label>
              <select name="nomineeRelation" className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline">

                
                <option>Father</option>
                <option>Mother</option>
                <option>Child</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Partner</option>
                <option>GrandParent</option>
                <option>Others</option>

              </select>
            </div>

            {/* btn */}
            <div className="mt-4 mb-2 sm:mb-4">
              <input
                type="submit"
                value="Next"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
              />


            </div>
            <p className="text-xs text-gray-600 sm:text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};


export default AccountsForm;