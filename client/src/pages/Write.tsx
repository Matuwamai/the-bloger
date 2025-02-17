import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export const Write = () => {
  const [value, setValue] = useState('');
  console.log(value)

  return (

    <div className='grid grid-cols-5 gap-2 mt-40 flex  w-9/10 mx-auto '>
      <div className='col-span-3   p-2'>
        <input type="text" placeholder='Title' />
        <section>
          <ReactQuill theme="snow" value={value} onChange={setValue} className='flex flex-col gap-4 h-100 scroll h-screen-relative'  />
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
          <input type="file" name="" id="file" className='hidden' />
          <label htmlFor="file" className='cusor-pointer underline' >Upload Image </label>
          <div className='flex gap-2 mb-1'>
            <button className='p-1 bg-gray-300 focus:cursor-pointer rounded-sm text-green-400 '>Save as a draft</button>
            <button className='p-1 bg-gray-300 focus:cursor-pointer rounded-sm bg-green-500 text-white'>Update</button>
          </div>
        </div>
        <div className='flex flex-col border-gray-400 border-solid border-1 p-2  '>

          <h1 className='text-2xl text-black font-semibold'>Category</h1>
          <span> <input type="radio" name='Cat' value="science" id='science' />
            <label htmlFor="art">Science</label></span>
          <span> <input type="radio" name='Cat' value="technolgy" id='technology' />
            <label htmlFor="technology">Technology</label></span>
          <span><input type="radio" name='Cat' value="education" id='education' />
            <label htmlFor="education">Education</label></span>
          <span><input type="radio" name='Cat' value="business" id='business' />
            <label htmlFor="business">Business</label></span>
          <span><input type="radio" name='Cat' value="fashion" id='fashion' />
            <label htmlFor="art">Fashion</label></span>
          <span><input type="radio" name='Cat' value="entertainment" id='entertainment' />
            <label htmlFor="art">Entertainment</label></span>
          <span><input type="radio" name='Cat' value="politics" id='politics' />
            <label htmlFor="art">Politics</label></span>
          <span><input type="radio" name='Cat' value="art" id='art' />
            <label htmlFor="art">Art</label></span>

        </div>

      </div>
    </div>
  )
}
