import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Authcontext } from '../context/authContex';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const{currentUser, logout} = useContext(Authcontext);

  return (
    <>
      {/* Navbar Container */}
      <div className='fixed top-0 left-0 w-full bg-gray-100 border-b-2 border-blue-400 shadow-md '>
        <div className='m-5 flex justify-between items-center p-4'>
          {/* Logo & Site Name */}
          <span className='flex items-center gap-2'>
          <Link to='/'>

            <img 
              src='/myLogo.svg' 
              alt='logo' 
              className='h-16 w-16 md:h-20 md:w-20 rounded-full object-cover bg-blue-400' 
            />
            </Link>
            <h2 className='text-2xl md:text-3xl font-bold text-red  -600'>The Bloger</h2>
          </span>

          {/* Menu Button (Only Visible on Small Screens) */}
          <button 
            className='md:hidden bg-blue-500 text-white p-2 rounded-md' 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Normal Menu for Large Screens */}
          <nav className='hidden md:flex gap-4 items-center text-blue-600 font-bold'>
            <Link to="/?cat=science">Science</Link>
            <Link to="/?cat=technology">Technology</Link>
            <Link to="/?cat=education">Education</Link>
            <Link to="/?cat=business">Business</Link>
            <Link to="/?cat=fashion">Fashion</Link>
            <Link to="/?cat=entertainment">Entertainment</Link>
            <Link to="/?cat=politics">Politics</Link>
            <Link to="/?cat=art">Art</Link>
            <span>{currentUser?.username}</span>
            {currentUser ?<span onClick={logout} className='bg-blue-500 py-1 px-4 md:px-8 rounded-md hover:bg-blue-700 text-white'>Log Out</span>: <Link to={"/login"} >Login</Link >}
            <Link to="/write" className='bg-blue-500 flex justify-center items-centers h-12 w-12 md:h-16 md:w-16 rounded-full text-white font-bold text-lg hover:bg-blue-600 text-center'>Write</Link>
          </nav>
        </div>
      </div>

      {/* Slide-in Menu for Small Screens */}
      {isMenuOpen && (
        <div className='fixed top-20 left-0 w-2/5 bg-gray-100 shadow-md p-4 flex flex-col  text-blue-600 font-bold mt-2 gap-2 md:hidden'>
          <Link to="/?cat=science" onClick={() => setIsMenuOpen(false)}>Science</Link>
          <Link to="/?cat=technology" onClick={() => setIsMenuOpen(false)}>Technology</Link>
          <Link to="/?cat=education" onClick={() => setIsMenuOpen(false)}>Education</Link>
          <Link to="/?cat=business" onClick={() => setIsMenuOpen(false)}>Business</Link>
          <Link to="/?cat=fashion" onClick={() => setIsMenuOpen(false)}>Fashion</Link>
          <Link to="/?cat=entertainment" onClick={() => setIsMenuOpen(false)}>Entertainment</Link>
          <Link to="/?cat=politics" onClick={() => setIsMenuOpen(false)}>Politics</Link>
          <Link to="/?cat=art" onClick={() => setIsMenuOpen(false)}>Art</Link>
          <span>{currentUser?.userName}</span>
          {currentUser ?<span onClick={logout} className='bg-blue-500 py-1 px-1 rounded-md hover:bg-blue-700 text-white' >Log Out</span>: <Link to={"/login"} >Login</Link >}
          <Link to="/write" className='bg-blue-500 h-12 w-12 rounded-full text-white font-semibold text-md hover:bg-blue-600' onClick={() => setIsMenuOpen(false)}>Write</Link>
        </div>
      )}
    </>
  );
};
