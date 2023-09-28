import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../userContext/AuthProvider/AuthProvider';
import useTitle from '../../MyHooks/useTitle';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogIn = () => {
  useTitle('LogIn');

  const [viewPass, setViewPass] = useState(false)


  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'

  const { login, resetPassword } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState('')

  const handleLoginSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)

    login(email, password)
      .then(result => {
        toast.success('logIn successfully....!')
        console.log(result.user)
        navigate(from, { replace: true })
      })
      .catch(error => toast.error(error.message))
  }

  // handleResetPassword
  const handleResetPassword = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success('Reset Password link has been sent,please check your email')
      })
    navigate(from, { replace: true })
      .catch(error => toast.error(error.message))
  }

  return (
    <div>
      <div className="bg-gray-700">

        <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
          <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans lg:text-3xl font-bold tracking-tight text-white text-xl ">
                  To open your online payment account, you must :

                </h2>
                <p className=" mb-2 lg:text-xl text-gray-200 ">Be over 18 years of age .</p>
                <p className=" mb-2 lg:text-xl text-gray-200 ">Be resident in Belgium .</p>




              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 shadow-sky-400 rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    LogIn for updates
                  </h3>

                  <form onSubmit={handleLoginSubmit}>

                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        E-mail
                      </label>
                      <input
                        onBlur={(event) => setUserEmail(event.target.value)}
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
                      <button onClick={handleResetPassword}>Forgot Password ? </button>

                    </div>


                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-sky-400 hover:bg-pink-400 focus:shadow-outline focus:outline-none"
                      >
                        LogIn
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      New to Hello Bank <Link className='font-bold pl-2 text-lg text-sky-500 hover:text-pink-500' to='/register'>Register</Link>
                    </p>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default LogIn;