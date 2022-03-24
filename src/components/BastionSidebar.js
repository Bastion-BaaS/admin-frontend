import React from 'react';
import SidebarItems from './SidebarItems';
import LinkHome from './LinkHome';

const BastionSidebar = ({ bastion }) => {
  return (
    <div className='bg-green-600 w-36 flex flex-col'>
      <div className='overflow-y-auto'>
        <LinkHome />
        <SidebarItems title={'Collections'} bastionName={bastion.name} /> 
        <SidebarItems title={'Users'} bastionName={bastion.name} /> 
        <SidebarItems title={'Functions'} bastionName={bastion.name} /> 
      </div>
    </div>
  );
};

export default BastionSidebar;