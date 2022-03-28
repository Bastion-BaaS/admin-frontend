import React from 'react';

import LinkHome from './LinkHome';
import SidebarBastionLink from './SidebarBastionLink';

const SidebarHome = ({ bastions }) => {

  return (
    <div className='w-2/12 flex flex-col items-center bg-midnightblue py-12'>
      <LinkHome />
      <div className="w-full flex flex-col grow items-center px-2 pb-4">
        {bastions.map(bastion =>
          <SidebarBastionLink key={bastion.StackName} bastion={bastion} />
        )}
      </div>
    </div>
  );
};

export default SidebarHome;
