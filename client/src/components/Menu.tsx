import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Menu = ({cat}) => {
  const [posts, setPosts] = useState<Array<{ id: number; title: string; desc: string; img: string }>>([]);

 
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const res = await  axios.get(`http://localhost:5000/api/posts/${cat}`)
        setPosts(res.data)
      }catch(err){
        console.log(err)
      };
      fetchData();
    }
  },[cat]); 
    // const posts = [
    //     {
    //       id: 1,
    //       title: "Ditch the Traditional Lamp Shade With Lost Lighting",
    //       desc: "Italian designers BrogliatoTraverso have brought to life a minimalist collection of lighting for Mags using their signature design style of subtraction...",
    //       img: "/1.jpg",
    //     },
    //     {
    //       id: 2,
    //       title: "These crispy air fried Brussels sprouts make an excellent side dish",
    //       desc: "To go along with whatever you’re making for dinner like veggie burgers, baked chicken, or this could be a fun snack and appetizer...",
    //       img: "/2.jpg",
    //     },
    //     {
    //       id: 3,
    //       title: "Minimalist Interior Design Trends for 2024",
    //       desc: "Discover the latest trends in minimalist interior design that are shaping modern homes...",
    //       img: "/3.jpg",
    //     },
    //     {
    //       id: 1,
    //       title: "Ditch the Traditional Lamp Shade With Lost Lighting",
    //       desc: "Italian designers BrogliatoTraverso have brought to life a minimalist collection of lighting for Mags using their signature design style of subtraction...",
    //       img: "/4.jpg",
    //     },
    //     {
    //       id: 2,
    //       title: "These crispy air fried Brussels sprouts make an excellent side dish",
    //       desc: "To go along with whatever you’re making for dinner like veggie burgers, baked chicken, or this could be a fun snack and appetizer...",
    //       img: "/5.jpg",
    //     },
    //     {
    //       id: 3,
    //       title: "Minimalist Interior Design Trends for 2024",
    //       desc: "Discover the latest trends in minimalist interior design that are shaping modern homes...",
    //       img: "/6.jpg",
    //     },
    //   ];
   
  
  return (
    <div className='flex flex-col gap-4 '>
        <h1 className='text-gyay-900 text-2xl font-bold'>Other Posts You may like</h1>
        {posts.map(post=>(
            <div className=' flex flex-col gap-2 ' key={post.id}>
                <img src={`../upload${post.img}`} alt="" className='w-full h-50' />
                <h2 className='font-bold text-gray-800 texxt-xl'>{post.title}</h2>
                <button className='bg-gray-300 text-blue-600 w-full m-2 p-2 rounded-sm focus:cusor-pointer bg-gray-400 '>Read More</button>
            </div>
        ))}
    </div>
  )
}
