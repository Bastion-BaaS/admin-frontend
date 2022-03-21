import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import SideBarBast from './SidebarBast';
import SidebarItems from './SidebarItems';


const Sidebar = () => {
  const path = useLocation().pathname;
  console.log(path)
  
  return (
    <div className='bg-green-600 w-36 flex flex-col'>
      <div className='overflow-y-auto'>
        <Link to={'/'} >
          <div className='border-b-2 border-black inline-flex px-3 hover:text-white hover:bg-teal-400 bg-green-300 font-bold w-full py-4'>
            <svg className='mr-3 h-6' xmlns='http://www.w3.org/2000/svg'  fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
            </svg>Home
          </div>
        </Link>
        
        {path === '/' || path === '/create' ?
        <>
          <Link to={'/bastions/:id'}> 
            <SideBarBast />
          </Link>
          <Link to={'/bastions/:id'}> 
            <SideBarBast />
          </Link>
          <Link to={'/bastions/:id'}> 
            <SideBarBast />
          </Link>
          <Link to={'/bastions/:id'}> 
            <SideBarBast />
          </Link>
          <Link to={'/bastions/:id'}> 
            <SideBarBast />
          </Link>
        </>
        : 
        <>
          <Link to={'/bastions/:id/models'}> 
            <SidebarItems title={'Models'}/> 
          </Link>
          <Link to={'/bastions/:id/users'}> 
          <SidebarItems title={'Users'}/> 
          </Link>
        </>
        } 
      </div>
      <Link to={'/create'}>
        <div className='flex w-full px-3 py-4 border-b-2 border-black hover:bg-pink-400'>
          <svg className='h-6 w-7 justify-center items-center' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg><span className='whitespace-nowrap overflow-hidden'>Create New Baas</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar 