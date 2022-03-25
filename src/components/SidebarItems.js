import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItems = ({ title, bastionName }) => {

  return (
    <Link to={`/bastions/${bastionName}/${title.toLowerCase()}`}> 
      <div className='bg-gray-600 px-3 text-center hover:bg-blue-400 hover:text-white py-4 border-b-2 border-black inline-flex w-full'>
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>{title}
      </div>
    </Link>
  );
};

export default SidebarItems;