import React from 'react';
import { useLocation } from 'react-router-dom';
import LinkHome from '../Links/LinkHome';
import BastionSidebarLink from '../Links/BastionSidebarLink';
import SidebarLogout from '../Links/SidebarLogout';

const BastionSidebar = ({ bastion }) => {
  const pathname = useLocation().pathname;
  let currentTab;

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
      <BastionSidebarLink active={currentTab} title={'Collections'} bastionName={bastion.StackName} />
      <BastionSidebarLink active={currentTab} title={'Users'} bastionName={bastion.StackName} />
      <BastionSidebarLink active={currentTab} title={'CloudCode'} bastionName={bastion.StackName} />
      <BastionSidebarLink active={currentTab} title={'Files'} bastionName={bastion.StackName} />
      <SidebarLogout />
    </div>
  );
};

export default BastionSidebar;