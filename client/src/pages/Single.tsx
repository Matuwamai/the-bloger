import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Menu } from '../components/Menu';
import axios from 'axios';
import moment from 'moment';

import { useState, useEffect } from 'react';
import { Authcontext } from '../context/authContex';


const Single = () => {
  const [post, setPost] = useState({
    title:"",
    desc :"",
    userImg :"",
    img :"",
    date :""
  });
  

  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2]

  const { currentUser } = useContext(Authcontext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${postId}`);
        setPost(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () =>{
    try {
     await axios.delete(`http://localhost:5000/api/posts/${postId}`);
     navigate("/")
    } catch (err) {
      console.log(err);
    }

  }
  return (<div className='flex flex-col  md:w-4/5    mx-auto'>
    <div className='mt-40 flex flex-col    md:mx-10 grid grid-cols-6 gap-10'>
      <div className='col-span-4'>
        <div>
          <img src={post?.img} alt="" className='w-full h-80 flex justify-center items-center' />
        </div>
        <div className='flex gap-2'>
          {post.userImg && <img src={post.userImg} alt="" className='w-15 h-15 rounded-full' />}
          <div className='flex flex-col justify-center '>
            <span className='text-xl font-bold'>{post.userName}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.userName === post?.userName && <section className='flex items-center justify-center gap-2'>
            <Link to={'/write/:id'} className='h-8 w-8 rounded-full bg-green-400 flex justify-center items-center'>
              <ModeEditIcon />
            </Link>
           <span onClick={handleDelete}> <DeleteIcon  className='h-12 w-12 rounded-full bg-red-600' /></span>
          </section>}
        </div>
        <h1 className='text-xl font-bold text-gray-900'>{post.title}</h1>
        {post.desc}
      </div>
      <div className='col-span-2 flex justify-center items-center'>
        < Menu />
      </div>
    </div>
  </div>
  )
}

export default Single