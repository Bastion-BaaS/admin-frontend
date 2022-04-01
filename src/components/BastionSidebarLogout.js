import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAdmin, logoutAdmin } from '../actions/AdminActions';

const SidebarBastionLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector(state => state.admin);

  useEffect(() => {
    dispatch(fetchAdmin());
    if (!admin) {
      navigate('/');
    }
  }, [navigate, admin, dispatch])

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate('/');
  };

  return (
    <div className='flex flex-col-reverse h-full w-full pb-2'>
      {admin &&
        <div
          onClick={handleLogout}
          className='w-full flex flex-col px-4 py-2 h-12 rounded-md hover:bg-midnightblue2 text-white2 hover:text-tomato hover:cursor-pointer'
        >
          <div className='flex flex-row items-center'>
            <svg className="w-6 h-100 inline-flex" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            <p className='pl-3 pt-1'>Logout</p>
          </div>
        </div>
      }
    </div>
  );
};

export default SidebarBastionLogout;
