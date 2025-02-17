import React from 'react'
import { Link } from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Menu } from '../components/Menu';


const Single = () => {
  return ( <div className='flex flex-col  md:w-4/5    mx-auto'>
    <div className='mt-40 flex flex-col    md:mx-10 grid grid-cols-6 gap-10'>
      <div className='col-span-4'>
        <div>
          <img src="/7.jpg" alt="" className='w-full h-80 flex justify-center items-center' />
        </div>
        <div className='flex gap-2'>
          <img src="8.jpg" alt="" className='w-15 h-15 rounded-full' />
          <div className='flex flex-col justify-center '>
            <span className='text-xl font-bold'>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <section className='flex items-center justify-center gap-2'>
            <Link to={'/write/:id'} className='h-8 w-8 rounded-full bg-green-400 flex justify-center items-center'>
              <ModeEditIcon />
            </Link>
            <DeleteIcon className='h-12 w-12 rounded-full bg-red-600' />
          </section>
        </div>
        <h1 className='text-xl font-bold text-gray-900'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, fuga optio. Laborum officiis nulla omnis hic in pariatur, optio neque voluptate molestias? Provident perferendis vel officiis? Numquam dolorum aspernatur fugiat?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, doloribus reiciendis aspernatur magni fugiat, rem cumque exercitationem animi eveniet eum at, natus voluptates impedit incidunt? Corporis placeat vitae voluptate deleniti.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero officiis reiciendis repellat qui, repellendus consequatur labore esse ipsum nulla eaque voluptatibus nemo rem voluptates laborum, debitis, odit at. Id, perspiciatis.
        </p>
      </div>
      <div className='col-span-2 flex justify-center items-center'>
        < Menu />
      </div>
    </div>
    </div>
  )
}

export default Single