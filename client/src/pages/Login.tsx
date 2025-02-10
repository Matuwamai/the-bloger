import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-blue-400 h-svh flex justify-center items center'>
        <form action="submit" className=' flex flex-col bg-blue-100 rounded-md m-5 w-1/5 h-relative items-center justify-center m-auto p-4 '>
            <h2 className='text-xl text-blue-600 font-bold'>Login To Account</h2>
            <span >
                <label htmlFor="email" className=''>Email</label>
                <input type="email" placeholder='johndoe@gmail.com' className='p-1 m-2 focus: outline-blue-400 rounded-md'  />
            </span>
            <span>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='**********' className='p-1 m-2  focus:outline-blue-400 rounded-md' />
            </span>
            <button className='bg-blue-600 py-1 px-8 rounded-md font-sm hover:bg-blue-700 cursor-pointer text-blue-100'>Login</button>
            <section className="flex gap-1 text-blue-600">
              <p>Don`t have an account?</p>
              <NavLink to="/register" className="underline ">
                <p>Sign up</p>
              </NavLink>
            </section>
        </form>
    </div>
  )
}

export default Login