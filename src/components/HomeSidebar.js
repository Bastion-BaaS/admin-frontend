import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinkHome from './LinkHome';
import HomeSidebarInstance from './HomeSidebarInstance';
import BastionSidebarLogout from './BastionSidebarLogout';
import { fetchAdmin } from '../actions/AdminActions';

const HomeSidebar = ({ bastions=[], logout=false }) => {
  const dispatch = useDispatch();
  const admin = useSelector(state => state.admin);

  useEffect(() => {
    dispatch(fetchAdmin());
  }, [dispatch])

  return (
    <div className='w-2/12 flex flex-col items-center bg-midnightblue py-12'>
      <LinkHome />
      <div className="w-full flex flex-col grow items-center px-2 pb-4">
        {admin &&
          <div className="w-full h-full flex flex-col items-center grow">
            {bastions.map(bastion =>
              <HomeSidebarInstance key={bastion.StackName} bastion={bastion} />
              )}
          </div>
        }
        {logout &&
          <BastionSidebarLogout />
        }
      </div>
    </div>
  );
};

export default HomeSidebar;
