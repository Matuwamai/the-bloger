import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:""
  })
  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  
  const handleSubmit = async e =>{
  e.preventDefault()
  try{  
  const res = await  axios.post("http://localhost:5000/api/auth/register", inputs)
  console.log(res)
  }catch(err){
    console.log(err)
  }
  }
  return (

    <div className='bg-blue-400 h-svh flex justify-center items center'>
        <form action="submit" className=' flex flex-col bg-blue-100 rounded-md m-5 w-1/5 h-relative items-center justify-center m-auto p-4 '>
            <h2 className='text-xl text-blue-600 font-bold'>Create Account</h2>
            <span  className='flex flex-col'>
                <label htmlFor="email" className=''>Email</label>
                <input type="email" placeholder='johndoe@gmail.com' name='email' onChange={handleChange} className='p-1 mb-2 outline-2 outline-solid focus: outline-blue-300 focus:outline-bg-500 rounded-xs'  />
            </span>
            <span  className='flex flex-col' >
                <label htmlFor="email" className=''>User Name</label>
                <input type="text" placeholder='JohnDoe'  name='username' onChange={handleChange} className='p-1 mb-2 outline-solid outline-blue-300  outline-2 focus:outline-bg-500 rounded-xs'  />
            </span>
            <span className='flex flex-col'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='**********'  name='password' onChange={handleChange} className='p-1 mb-2  outline-solid outline-2 outline-blue-300 focus:outline-bg-500 rounded-xs' />
            </span>
            <span className='flex flex-col'>
                <label htmlFor="password"> Confirm Password</label>
                <input type="password" placeholder='**********'  name='password' onChange={handleChange} className='p-1 mb-2  otline-solid outline-2 outline-blue-300  focus:outline-bg-500 rounded-xs' />
            </span>
            <button onClick={handleSubmit} className='bg-blue-600 py-1 px-8 rounded-md font-sm hover:bg-blue-700 cursor-pointer text-blue-100'>Register</button>
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