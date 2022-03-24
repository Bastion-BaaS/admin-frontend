import React from 'react';
import { Link } from 'react-router-dom';


const LinkHome = () => {
  return (
    <Link to={'/'} >
      <div className='border-b-2 border-black inline-flex px-3 hover:text-white hover:bg-teal-400 bg-green-300 font-bold w-full py-4'>
        <svg className='mr-3 h-6' xmlns='http://www.w3.org/2000/svg'  fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
        </svg>Home
      </div>
    </Link>
  );
};

export default LinkHome;