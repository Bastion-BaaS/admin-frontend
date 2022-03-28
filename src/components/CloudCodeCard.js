import React from 'react';

const CloudCodeCard = ({func, index, handleDelete}) => {
  const instanceCreationDate = new Date(func.createdAt);
  return (
    <div
      key={func.id}
      className={'h-12 flex flex-row items-center' + (index === 0 ? '' : ' border-t border-gray-400')}
    >
      <div className='flex-none flex flex-row items-center py-4 px-8 w-1/3'>
        <p className='flex-none text-gray-600 text-md'>Name:</p>
        <p className='flex-auto text-bdazzledblue font-semibold text-md ml-2'>{func.functionName}</p>
      </div>
      <div className='flex-none flex flex-row items-center py-4 px-8 w-1/2'>
        <p className='flex-none text-gray-600 text-md'>Last update:</p>
        <p className='flex-auto text-bdazzledblue text-md font-light ml-2'>{instanceCreationDate.toLocaleString()}</p>
      </div>
      <div className='flex-auto flex flex-col items-end py-4 pr-4 stroke-redorange' onClick={() => handleDelete(func.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" className='hover:cursor-pointer' width="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      </div>
    </div>
  )
}

export default CloudCodeCard;
