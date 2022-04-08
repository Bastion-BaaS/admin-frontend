import React from 'react';
import { Link } from 'react-router-dom';

const SidebarInstanceLink = ({ bastion }) => {

  return (
    <div className='w-full'>
      <Link
        to={`/bastions/${bastion.StackName}/collections`}
        className='w-full flex flex-col px-4 py-2 h-12 rounded-md hover:bg-midnightblue2 text-white2 hover:text-tomato'>
        <div className='flex flex-row items-center'>
          <svg className="w-6 h-100 inline-flex" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
          <p className='pl-4 pt-1'>{bastion.StackName}</p>
        </div>
      </Link>
    </div>
  );
};

export default SidebarInstanceLink;