import React from 'react';
import SidebarItems from './SidebarItems';
import LinkHome from './LinkHome';

const BastionSidebar = ({ bastion }) => {
  return (
    <div className='w-2/12 flex flex-col items-center bg-midnightblue py-12'>
      <LinkHome />
      <SidebarItems title={'Collections'} bastionName={bastion.StackName} />
      <SidebarItems title={'Users'} bastionName={bastion.StackName} />
      <SidebarItems title={'CloudCode'} bastionName={bastion.StackName} />
      <SidebarItems title={'Files'} bastionName={bastion.StackName} />
    </div>
  );
};

export default BastionSidebar;
