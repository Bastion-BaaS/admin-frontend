import React from 'react';
import { Link } from 'react-router-dom';

const BastionSidebarLink = ({ active, title, bastionName }) => {
  const linkCSS = active === title ? 'bg-midnightblue2' : 'hover:bg-midnightblue2'

  return (
    <Link
      to={`/bastions/${bastionName}/${title.toLowerCase()}`}
      className={'w-full flex flex-col px-4 py-2 h-12 rounded-md text-white2 hover:text-tomato ' + linkCSS}
    >
      <div className='flex flex-row items-center'>
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
        <p className='pl-1 pt-1'>{title}</p>
      </div>
    </Link>
  );
};

export default BastionSidebarLink;
