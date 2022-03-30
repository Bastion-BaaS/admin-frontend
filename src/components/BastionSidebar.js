import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarItems from './SidebarItems';
import LinkHome from './LinkHome';

const BastionSidebar = ({ bastion }) => {
  const pathname = useLocation().pathname;
  let currentTab;
  console.log(pathname, useLocation())

  if (pathname.includes('users')) {
    currentTab = 'Users';
  } else if (pathname.includes('cloudcode')) {
    currentTab = 'CloudCode';
  } else if (pathname.includes('files')) {
    currentTab = 'Files';
  } else {
    currentTab = 'Collections';
  }

  return (
    <div className='w-2/12 flex flex-col items-center bg-midnightblue py-12'>
      <LinkHome />
      <SidebarItems active={currentTab} title={'Collections'} bastionName={bastion.StackName} />
      <SidebarItems active={currentTab} title={'Users'} bastionName={bastion.StackName} />
      <SidebarItems active={currentTab} title={'CloudCode'} bastionName={bastion.StackName} />
      <SidebarItems active={currentTab} title={'Files'} bastionName={bastion.StackName} />
    </div>
  );
};

export default BastionSidebar;
