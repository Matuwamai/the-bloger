import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div className='bg-blue-400 h-svh flex justify-center items center'>
        <form action="submit" className=' flex flex-col bg-blue-100 rounded-md m-5 w-1/5 h-relative items-center justify-center m-auto p-4 '>
            <h2 className='text-xl text-blue-600 font-bold'>Create Account</h2>
            <span  className='flex flex-col'>
                <label htmlFor="email" className=''>Email</label>
                <input type="email" placeholder='johndoe@gmail.com' className='p-1 mb-2 outline-2 outline-solid focus: outline-blue-300 focus:outline-bg-500 rounded-xs'  />
            </span>
            <span  className='flex flex-col' >
                <label htmlFor="email" className=''>User Name</label>
                <input type="text" placeholder='JohnDoe' className='p-1 mb-2 outline-solid outline-blue-300  outline-2 focus:outline-bg-500 rounded-xs'  />
            </span>
            <span className='flex flex-col'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='**********' className='p-1 mb-2  outline-solid outline-2 outline-blue-300 focus:outline-bg-500 rounded-xs' />
            </span>
            <span className='flex flex-col'>
                <label htmlFor="password"> Confirm Password</label>
                <input type="password" placeholder='**********' className='p-1 mb-2  otline-solid outline-2 outline-blue-300  focus:outline-bg-500 rounded-xs' />
            </span>
            <button className='bg-blue-600 py-1 px-8 rounded-md font-sm hover:bg-blue-700 cursor-pointer text-blue-100'>Register</button>
            <section className="flex gap-1 text-blue-600">
              <p>Already have an account?</p>
              <NavLink to="/login" className="underline ">
                <p>Login</p>
              </NavLink>
            </section>
        </form>
    </div>
  )
}

export default Register