import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "axios";

export const Homepage = () => {
  const [posts, setPosts] = useState<Array<{ id: number; title: string; desc: string; img: string }>>([]);

  const  cat  = useLocation().search
 
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
