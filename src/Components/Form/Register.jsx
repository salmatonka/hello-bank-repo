import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { AuthContext } from '../../userContext/AuthProvider/AuthProvider';
import useTitle from '../../MyHooks/useTitle';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const auth = getAuth(app)


const Register = () => {

  useTitle('Register');

    const [viewPass, setViewPass] = useState(false)

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'


  const googleProvider = new GoogleAuthProvider();
  const { createUser, updateName, verifyEmail, googleSignIn } = useContext(AuthContext);

  // const imageHostKey = '1dc80d15667630dfb08a0c16646689fce';

  const handleRegisterSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    // console.log(firstName, image, lastName, email, password);
    // image
    const formData = new FormData();
    formData.append('image', image)
    const url = 'https://api.imgbb.com/1/upload?key=dc80d15667630dfb08a0c16646689fce'
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())

      .then(imageData => {

        // createUser
        createUser(email, password)
          .then(result => {
            // console.log(result.user);

            // updateName
            updateName(name, imageData.data.display_url)
              .then(() => {
                // toast.success('Name success')
                saveUser(name, email)
                // console.log(auth.currentUser.displayName)

                // verifyEmail
                verifyEmail()
                  .then(() => {
                    toast.success('please check your email for verification link !')
                  })
                navigate(from, { replace: true })
              })

          })
      })

      .catch((error) => { toast.error(error.message) })
      // createUser
      .catch(err => console.error(err));
  }


  // google
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.error(error);
      })

  }

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('https://bank-server-salmatonka.vercel.app/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    }).then((res) => res.json())
      .then((data) => {
        // console.log(data)
      })
  }

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-700">
        <div className="grid gap-10 lg:grid-cols-2">

          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 rounded shadow-2xl shadow-sky-400 p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Sign up for updates
              </h3>

              <h3 className="mb-4 text-xl text-red-500 font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                {/* {error} */}
              </h3>
              <form onSubmit={handleRegisterSubmit}>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="firstName"
                    className="inline-block mb-1 font-medium"
                  >
                    First name
                  </label>
                  <input
                    // onBlur={handleFirstName}
                    placeholder="First name"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-sky-200 shadow-xl border border-sky-500 rounded  appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="lastName"
                    className="inline-block mb-1 font-medium"
                  >
                    Last name
                  </label>
                  <input
                    // onBlur={handleLastName}
                    placeholder="Last name"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-sky-200 shadow-xl border border-sky-500 rounded  appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                  >
                    E-mail
                  </label>
                  <input
                    // onBlur={handleEmail}
                    placeholder="john@gmail.com"
                    required
                    type="email"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-sky-200 shadow-xl border border-sky-500 rounded  appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                  />
                </div>
                
                <div className="space-y-1 mb-1 sm:mb-2">
                      <label htmlFor="password" for="password" className="block mb-1 font-medium ">Password</label>
                      <div className='flex items-center'>
                        <input type={viewPass ? 'text' : 'password'} name="password" id="password" placeholder="******" className="w-full px-4 py-3 transition duration-200 bg-sky-200 shadow-xl border border-sky-500 rounded  appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" />
                        {
                          viewPass ?
                            <FaEyeSlash onClick={() => setViewPass(false)} className='-ml-9 cursor-pointer text-gray-700 text-[18px]'></FaEyeSlash>
                            :
                            <FaEye onClick={() => setViewPass(true)} className='-ml-9 cursor-pointer text-gray-700 text-[18px]'></FaEye>
                        }
                      </div>
                    </div>

                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="image"
                    className="inline-block mb-1 font-medium"
                  >
                    Profile Photo
                  </label>
                  <input
                    accept='image/*'
                    required
                    type="file"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-sky-200 shadow-xl border border-sky-500 rounded  appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="image"
                    name="image"
                  />
                </div>


                <div className="mt-4 mb-2 sm:mb-4">
                  <button

                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-sky-400 hover:bg-pink-400 focus:shadow-outline focus:outline-none"
                  >
                    Register
                  </button>
                </div>
                {/* icons */}
                <div className="icons">
                  <p className='px-3 text-sm dark:text-gray-400'>
                    SignUp with social accounts
                  </p>
                  <div className='flex justify-center text-lg gap-4 py-4'>
                    <FaGoogle onClick={handleGoogleSignIn} />
                    <FaGithub />
                    <FaFacebook />
                  </div>
                </div>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Already have a account <Link className='font-bold pl-2 text-lg text-sky-500 hover:text-pink-500' to='/logIn'>LogIn</Link>
                </p>
              </form>
            </div>
          </div>


          <div className="flex items-center justify-center  lg:pl-4 mx-10">
            <div>
              <h2 className="max-w-lg mb-6 font-sans lg:text-3xl font-bold tracking-tight text-white sm:text-2xl ">
                The free Hello bank! Offer*
              </h2>
              <p className=" mb-2 lg:text-xl text-gray-200 ">1. A free Hello/Hello4You payment account (maximum one personal payment account and one joint payment account per client) .</p>
              <p className=" mb-2 lg:text-xl text-gray-200 ">2. Paying with Apple Pay, Google Pay, Fit bit Pay & Garmin Pay .</p>
              <p className=" mb-2 lg:text-xl text-gray-200 ">3. Up to 2 free debit cards .</p>
              <p className=" mb-2 lg:text-xl text-gray-200 ">4. Accounts management via your computer, tablet or smartphone .</p>
              <p className=" mb-2 lg:text-xl text-gray-200 ">5. The Hello Team always by your side .</p>
              <p className=" mb-2 lg:text-xl text-gray-200 ">6. Bank-grade security .</p>
              <p className=" mb-10 lg:text-xl text-sky-400  hover:underline">
                Info & Conditions</p>
              <p className=" mb-20  text-gray-200 lg:text-lg">
                * Pending approval of your application.</p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};


export default Register;