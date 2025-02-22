import { Html } from '@mui/icons-material';
import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useLocation } from 'react-router-dom';
export const Write = () => {

  const state = useLocation().state
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState<File | null>(null);

  const [cat, setCat] = useState(state?.cat || "");
  const navigate = useNavigate();


  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("http://localhost:5000/api/upload", formData)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const imgUrl = await upload()

    try {
      state ? await axios.put(`http://localhost:5000/api/posts/${state.id}`, {
        title,
        desc: value,
        cat,
        img: file ? imgUrl : ""
      }) : await axios.post(`http://localhost:5000/api/posts/`, {
        title,
        desc: value,
        cat,
        img: file ? imgUrl : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      });
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

 
  return (

    <div className='grid grid-cols-5 gap-2 mt-40 flex  w-9/10 mx-auto '>
      <div className='col-span-3   p-2'>
        <input type="text" className='w-full p-2 mb-2 border-solid border-1 border:rounded-sm hover:border-blue-400' value={title} placeholder='Title' onChange={e => setTitle(e.target.value)} />
        <section>
          <ReactQuill theme="snow" value={value} onChange={setValue} className='flex flex-col gap-4 h-100 scroll h-screen-relative' />
        </section>
      </div>
      <div className='col-span-2  p-2'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-2xl font-bold'>Publish</h1>
          <span>
            <span><b>Status: </b> Draft</span>
            <span>
              <b> Visibility:</b> Public
            </span>
          </span>
          <input type="file" name="" id="file" className='hidden' onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFile(e.target.files[0]);
            }
          }} />
          <label htmlFor="file" className='cusor-pointer underline' >Upload Image </label>
          <div className='flex gap-2 mb-1'>
            <button className='p-1 bg-gray-300 focus:cursor-pointer rounded-sm text-green-400 '>Save as a draft</button>
            <button onClick={handleSubmit} className='p-1 bg-gray-300 focus:cursor-pointer rounded-sm bg-green-500 text-white'>Publish</button>
          </div>
        </div>
        <div className='flex flex-col border-gray-400 border-solid border-1 p-2  '>

          <h1 className='text-2xl text-black font-semibold'>Category</h1>
          <span> <input type="radio" checked={cat === "science"} name='Cat' value="science" id='science' onChange={e => setCat(e.target.value)} />
            <label htmlFor="art">Science</label></span>
          <span> <input type="radio" checked={cat === "technology"} name='Cat' value="technolgy" id='technology' onChange={e => setCat(e.target.value)} />
            <label htmlFor="technology">Technology</label></span>
          <span><input type="radio" checked={cat === "education"} name='Cat' value="education" id='education' onChange={e => setCat(e.target.value)} />
            <label htmlFor="education">Education</label></span>
          <span><input type="radio" checked={cat === "business"} name='Cat' value="business" id='business' onChange={e => setCat(e.target.value)} />
            <label htmlFor="business">Business</label></span>
          <span><input type="radio" checked={cat === "fashion"} name='Cat' value="fashion" id='fashion' onChange={e => setCat(e.target.value)} />
            <label htmlFor="art">Fashion</label></span>
          <span><input type="radio" checked={cat === "politics"} name='Cat' value="politics" id='politics' onChange={e => setCat(e.target.value)} />
            <label htmlFor="art">Politics</label></span>
          <span><input type="radio" checked={cat === "art"} name='Cat' value="art" id='art' onChange={e => setCat(e.target.value)} />
            <label htmlFor="art">Art</label></span>

        </div>

      </div>
    </div>
  )
}
