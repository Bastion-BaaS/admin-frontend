import React from 'react';
import bastion_bw_logo from '../assets/images/bw_logo.svg';

const DataCard = ({bastion, handleDelete}) => {
  const maskedAPIKey = '*'.repeat(bastion.ApiKey.length - 4) + bastion.ApiKey.slice(-4);
  const instanceCreationDate = new Date(bastion.createdAt);
  return (
    <div className='h-24 flex flex-row items-center border border-bdazzledblue my-4 rounded-xl'>
      <img className="flex-none inline ml-8" width={30} height='auto' src={bastion_bw_logo} alt="bastion-bw-logo"></img>
      <div className='flex-none flex flex-col ml-8 py-4 px-8 w-1/4'>
        <p className='flex-none text-gray-800 text-sm'>Name</p>
        <p className='flex-auto text-black text-3xl'>{bastion.StackName}</p>
      </div>
      <div className='flex-none flex flex-col py-4 px-8 w-1/4'>
        <p className='flex-none text-gray-800 text-sm'>API Key</p>
        <p className='flex-auto text-black text-lg'>{maskedAPIKey}</p>
      </div>
      <div className='flex-none flex flex-col py-4 px-8 w-1/4'>
        <p className='flex-none text-gray-800 text-sm'>Started at</p>
        <p className='flex-auto text-gray-800 text-lg'>{instanceCreationDate.toLocaleString()}</p>
      </div>
      <div className='flex-auto flex flex-col items-end py-4 pr-16 stroke-redorange' onClick={() => handleDelete(bastion.StackName, bastion.StackId)}>
        <svg xmlns="http://www.w3.org/2000/svg" className='hover:cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      </div>
    </div>
  )
}

export default DataCard;
