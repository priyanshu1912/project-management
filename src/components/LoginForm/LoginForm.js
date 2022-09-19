import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../hooks/useAuth";

import { users } from "../../Mock-data.js";

export default function AuthenticationPage(props) {
  // <<<<<<< HEAD
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const { loginAsStudent } = useAuth();
  //   const { loginAsEmployer } = useAuth();
  //   const { logout } = useAuth();
  // useEffect(()=>{
  //   logout();
  // },[])
  //   const forward = () => {
  //     navigate("/dashboard/");
  //   };
  //   const forwardEmp = () => {
  //     navigate("/employer/dashboard");
  //   };
  //   console.log(props);
  //   // =======
  //   const navigate = useNavigate();
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const { loginAsStudent } = useAuth();
  //   const { loginAsEmployer } = useAuth();
  //   const forward = () => {
  //     navigate("/dashboard/");
  //   };
  //   const forwardEmp = () => {
  //     navigate("/employer/dashboard/");
  //   };
  // >>>>>>> fc4fa7d2ae6c5908d646137fc1ad6e516aafccd7

  // isLogin?navigate('/dashboard/'):console.log("Invalid Login")
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (props.title === "a Student") {
  //       const data = loginAsStudent(email, password);
  //       data.then(forward).catch((e) => {
  //         alert(e.message);
  //       });
  //     }

  //     if (props.title === "an Employer") {
  //       const dataEMp = loginAsEmployer(email, password);
  //       console.log(dataEMp);
  //       dataEMp.then(forwardEmp);
  //     }
  //     // else{
  //     //   navigate('/auth/loginStudent');
  //     // }
  //   };

  const handleSubmit = () => {
    props.setFlag(true);
    let user = users.filter((item) => item.email === email);
    console.log(user);
    if (props.title === "Admin") navigate("/adminhomepage", { state: user[0] });
    else navigate("/homepage", { state: user[0] });
  };

  return (
    <div
      className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8'
      style={{ alignItems: "center" }}>
      <div style={{ width: "35%" }}>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Sign in as a {props.title}
          </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form className='space-y-6' action='#' method='POST'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'>
                  Email address
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'>
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900'>
                    Remember me
                  </label>
                </div>
                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-medium text-indigo-600 hover:text-indigo-500'>
                    Forgot your password?
                  </a>
                </div>
              </div>
            </form>

            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'></div>
                <div className='my-6 mx-2 w-full ' />
                <Link to={`/auth/login${props.child2}`}>
                  {/* <button
                    type="button"
                    onClick={navigate(`/auth/login${props.child2}`)}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                  Or continue as {props.child2}
                  </button> */}
                </Link>

                <Link to={`/auth/employer/register`} />
              </div>

              <div>
                <button
                  type='submit'
                  onClick={handleSubmit}
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  Sign In
                </button>
                {/* </Link> */}
              </div>

              <div className='mt-6'>
                <div className=' space-y-2'>
                  <div className='relative flex justify-center text-sm'>
                    <Link to={`/auth/login${props.child2}`}>
                      <span className='px-2 bg-white text-gray-500'>
                        Or continue as {props.child2}
                      </span>
                    </Link>
                  </div>

                  <div className='w-full border-t border-gray-300' />

                  {props.child1 === "Employer" ? (
                    <div className=' flex justify-center text-sm'>
                      <Link to={`/auth/employer/register`}>
                        <span className='px-2 bg-white text-gray-500'>
                          Have'nt registered Yet?
                        </span>
                      </Link>
                    </div>
                  ) : (
                    <div className=' flex justify-center text-sm'>
                      <Link to={`/auth/student/register`}>
                        <span className='px-2 bg-white text-gray-500'>
                          Have'nt registered Yet?
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
