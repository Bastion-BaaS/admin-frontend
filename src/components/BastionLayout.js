import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BastionSidebar from './BastionSidebar';
import { fetchBastion } from '../actions/BastionActions';

const BastionLayout = () => {
  const dispatch = useDispatch();
  const name = useParams().name;
  const bastion = useSelector(state => state.bastions).find(b => b.StackName === name);

  useEffect(() => {
    dispatch(fetchBastion(name));
  }, [dispatch, name])

  return (
    <div>
      {bastion
      ?
        <div className='App h-screen bg-white2 flex'>
          <BastionSidebar bastion={bastion} />
          <div className='w-10/12 overflow-auto flex flex-col p-12'>
            <h1 className='flex-none text-2xl font-semibold text-gray-900 mb-4'>
              Your <span className='italic text-blueryb'>{name}</span> instance
            </h1>
            <Outlet context={bastion}/>
          </div>
        </div>
      :
      <p>Bastion not found</p>
      }
    </div>
  );
};

export default BastionLayout;
