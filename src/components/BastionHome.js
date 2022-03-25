import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBastion } from '../actions/BastionActions';

const BastionHome = () => {
  const bastion = useOutletContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    try {
      dispatch(deleteBastion(bastion.name, id));
      navigate('/');
    } catch {
      console.log('Unable to delete instance.  Please try again later');
    }
  };

  return (
    <div className='p-4'>
      <p className='px-5'>{bastion.name}</p>
      
      <p className='px-5'>{bastion.APIKey}</p>
      <button className='px-2 border-black border-2 rounded bg-red-400' onClick={handleDelete}>Delete Bastion</button>
    </div>
  );
};

export default BastionHome;