import React from 'react';
import { useOutletContext } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const BastionHome = () => {
  const bastion = useOutletContext();

  return (
    <div className='p-4'>
      <p className='px-5'>{bastion.name}</p>
      
      <p className='px-5'>{bastion.APIKey}</p>
      {/* <button className='px-2 border-black border-2 rounded bg-red-400' onClick={handleDelete}>Delete Bastion</button> */}
    </div>
  );
};

export default BastionHome;
