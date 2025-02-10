import React from 'react'
import Logo from "../assets/blog1.jpg"
import { NavLink } from 'react-router-dom'
NavLink

export const Navbar = () => {
  return (
    <div className='flex m-5 border-1 border-solid border-blue-400 p-2'>
<span className='rounded-full'><Logo /></span>
<ul className='flex gap-2'>
    <li>ART</li>
    <li>SCIENCE</li>
    <li>BUSINESS</li>
    <li>POLITICS</li>
    <li>FOOD</li>
    <li>DESIGNS</li>
</ul>
<button>Logout</button>
<NavLink to={'/write'}  className='rounded-full bg-blue-400 text-blue-100 font-sm text-l p-2 '>
    <p>Write</p>
</NavLink>
    </div>
  )
}
