import React from "react";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "axios";

export const Homepage = () => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const res = await  axios.get("http://localhost:5000/api/posts")
        setPosts(res.data)
      }catch(err){
        console.log(err)
      };
      fetchData();
    }
  })
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Ditch the Traditional Lamp Shade With Lost Lighting",
  //     desc: "Italian designers BrogliatoTraverso have brought to life a minimalist collection of lighting for Mags using their signature design style of subtraction...",
  //     img: "/1.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "These crispy air fried Brussels sprouts make an excellent side dish",
  //     desc: "To go along with whatever you’re making for dinner like veggie burgers, baked chicken, or this could be a fun snack and appetizer...",
  //     img: "/2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Minimalist Interior Design Trends for 2024",
  //     desc: "Discover the latest trends in minimalist interior design that are shaping modern homes...",
  //     img: "/3.jpg",
  //   },
  //   {
  //     id: 1,
  //     title: "Ditch the Traditional Lamp Shade With Lost Lighting",
  //     desc: "Italian designers BrogliatoTraverso have brought to life a minimalist collection of lighting for Mags using their signature design style of subtraction...",
  //     img: "/4.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "These crispy air fried Brussels sprouts make an excellent side dish",
  //     desc: "To go along with whatever you’re making for dinner like veggie burgers, baked chicken, or this could be a fun snack and appetizer...",
  //     img: "/5.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Minimalist Interior Design Trends for 2024",
  //     desc: "Discover the latest trends in minimalist interior design that are shaping modern homes...",
  //     img: "/6.jpg",
  //   },
  // ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 mt-40">
      {posts.map((post, index) => (
        <div
          key={post.id} 
          className={`flex flex-col md:flex-row items-center gap-6 ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <img src={post.img} alt="Post" className="w-full md:w-2/5 h-64 object-cover rounded-lg shadow-lg" />
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-900">{post.title}</h1>
            <p className="text-gray-800 mt-2">{post.desc}</p>
            <Link to={`/post/${post.id}`} className="inline-block mt-4 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
