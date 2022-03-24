import React from 'react';

import LinkHome from './LinkHome';
import SidebarBastionLink from './SidebarBastionLink';

const SidebarHome = ({ bastions }) => {
  
  return (
    <div className='bg-green-600 w-36 flex flex-col'>
      <div className='overflow-y-auto'>
        <LinkHome />
        <div>
          {bastions.map(bastion =>
            <SidebarBastionLink bastion={bastion} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarHome;