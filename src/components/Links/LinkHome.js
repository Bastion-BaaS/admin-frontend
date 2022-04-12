import React from 'react';
import { Link } from 'react-router-dom';
import bastion_dark from '../../assets/images/bastion_logo_dark.png'

const LinkHome = () => {
  return (
    <div className="w-full flex flex-col items-center pb-6">
      <Link to={'/'} >
        <div className="pb-8">
          <img src={bastion_dark} alt="bastion-logo" width={140} height='auto'></img>
        </div>
      </Link>
      <div className='px-2 w-full'>
        <Link
          to='/'
          className='w-full flex flex-col px-4 py-2 h-12 rounded-md hover:bg-midnightblue2 text-white2 hover:text-tomato'>
          <div className='flex flex-row items-center'>
            <svg
              className="mr-3 h-6 w-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <p className='pt-1'>Home</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LinkHome;
