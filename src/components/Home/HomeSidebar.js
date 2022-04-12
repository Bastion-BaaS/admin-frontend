import React from 'react';
import LinkHome from '../Links/LinkHome';
import HomeSidebarInstance from './HomeSidebarInstance';
import SidebarLogout from '../Links/SidebarLogout';

const HomeSidebar = ({ bastions=[], logout=false }) => {
  return (
    <div className='w-2/12 flex flex-col items-center bg-midnightblue py-12'>
      <LinkHome />
      <div className="w-full flex flex-col grow items-center px-2 pb-4">
        <div className="w-full h-full flex flex-col items-center grow">
          {bastions.map(bastion =>
            <HomeSidebarInstance key={bastion.StackName} bastion={bastion} />
            )}
        </div>
        {logout &&
          <SidebarLogout />
        }
      </div>
    </div>
  );
};

export default HomeSidebar;