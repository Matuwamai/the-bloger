import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  const [inputs, setInputs] = useState({
    
    email:"",
    password:""
  })
  const [err, setError] = useState(null);

  const navigate =useNavigate();
  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  
  const handleSubmit = async e =>{
  e.preventDefault()
  try{  
  const res = await  axios.post("http://localhost:5000/api/auth/login", inputs)
  navigate("/")
  }catch(err){
    setError(err.response.data)
  }
  }
  return (
    <div className='bg-blue-400 h-svh flex justify-center items center'>
        <form action="submit" className=' flex flex-col bg-blue-100 rounded-md m-5 w-1/5 h-relative items-center justify-center m-auto p-4 '>
            <h2 className='text-xl text-blue-600 font-bold'>Login To Account</h2>
            <span >
                <label htmlFor="email" className=''>Email</label>
                <input name='email'onChange={handleChange} type="email" placeholder='johndoe@gmail.com' className='p-1 m-2 focus: outline-blue-400 rounded-md'  />
            </span>
            <span>
                <label htmlFor="password">Password</label>
                <input name='password' onChange={handleChange} type="password" placeholder='**********' className='p-1 m-2  focus:outline-blue-400 rounded-md' />
            </span>
            <button onClick={handleSubmit} className='bg-blue-600 py-1 px-8 rounded-md font-sm hover:bg-blue-700 cursor-pointer text-blue-100'>Login</button>
            {err && <p>{err}</p>}
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