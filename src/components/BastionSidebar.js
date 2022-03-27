import React, { useState } from 'react';
import SidebarItems from './SidebarItems';
import LinkHome from './LinkHome';

const BastionSidebar = ({ bastion }) => {
  const [active, setActive] = useState('Collections');

  const changeActive = (title) => {
    setActive(title);
  };

  return (
    <div className='w-2/12 flex flex-col items-center bg-midnightblue py-12'>
      <LinkHome />
      <SidebarItems active={active} setActive={changeActive} title={'Collections'} bastionName={bastion.StackName} />
      <SidebarItems active={active} setActive={changeActive} title={'Users'} bastionName={bastion.StackName} />
      <SidebarItems active={active} setActive={changeActive} title={'CloudCode'} bastionName={bastion.StackName} />
      <SidebarItems active={active} setActive={changeActive} title={'Files'} bastionName={bastion.StackName} />
    </div>
  );
};

export default BastionSidebar;
