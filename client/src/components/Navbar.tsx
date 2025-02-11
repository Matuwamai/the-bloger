import React from 'react'
// import Logo from '../assets/blog1.jpg'


export const Navbar = () => {
  return (
    <div className='m-5 border-solid flex justify-center items-center border-2 bg-gray-100 border-blue-400 rounded-sm p-2 gap-84'>
      <span className='flex place-content-start items-center gap-1'>
        <img src="/myLogo.svg" alt="logo" className='h-20 w-20 rounded-full object-cover bg-blue-400' />
        <h2 className='text-3xl font-bold text-blue-600'>The Bloger</h2>
      </span>
      <section className='flex justify-center items-center gap-2'>
        <ul className='flex gap-1 justify-center items-center text-blue-600 font-bold text-md'>
          <li className=''>Science</li>
          <li className=''>Technology</li>
          <li className=''>Education</li>
          <li className=''>Business</li>
          <li className=''>Fashion</li>
          <li className=''>Entertainment</li>
          <li className=''>Politics</li>
        </ul>
        <button className='bg-blue-500 py-1 px-8 rounded-md font-sm hover:bg-blue-700 cursor-pointer text-white'>Log Out</button>
        <button className='bg-blue-500  h-20 w-20 rounded-full font-sm hover:bg-blue-600 cursor-pointer text-white font-bold text-1xl'>Write</button>
      </section>
    </div>
  )
}
