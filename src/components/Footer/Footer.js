import React from 'react';
import { Link } from 'react-router-dom';
import logowithoutlap from '../../images/logowithoutlap.png';

export default function Footer() {
  return (
    <div className='items-end content-end self-end'>
      <div className='bg-blue-500 text-gray-200 p-4'>
        <div className='grid grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-4 text-center'>
          <div className='col-span-1 flex justify-center'>
            <ul>
              <li className='p-2'>
                <a href='endev.codes'>Main page</a>
              </li>
              <li className='p-2'>
                <Link to='/login'>Teach </Link>
              </li>
              <li className='p-2'>
                <Link to='/'>About us</Link>
              </li>
            </ul>
          </div>
          <div className='col-span-1 flex justify-center'>
            <ul>
              <li className='p-2'>
                <Link to='/'>Contact us</Link>
              </li>
              <li className='p-2'>
                <Link to='/login'>Careers </Link>
              </li>

              <li className='p-2'>
                <Link to='/'>Help and Support</Link>
              </li>
            </ul>
          </div>
          <div className='col-span-1 flex justify-center'>
            <ul>
              <li className='p-2'>
                <Link to='/'>Affilate</Link>
              </li>
              <li className='p-2'>
                <Link to='/login'>Sitemap </Link>
              </li>

              <li className='p-2'>
                <Link to='/'>Featired Courses</Link>
              </li>
            </ul>
          </div>
          <div className='col-span-1'>
            <div className=' w-1/2 bg-white rounded-full p-4 py-10 mx-auto'>
              <img
                src={logowithoutlap}
                alt='logo'
                className='max-w-full mx-auto justify-end'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
