import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BastionSidebar from './BastionSidebar';
import { fetchBastion } from '../actions/BastionActions';

const BastionLayout = () => {
  const name = useParams().name;
  const dispatch = useDispatch();
  const bastion = useSelector(state => state.bastions).find(b => b.name === name);

  useEffect(() => {
    dispatch(fetchBastion());
  }, [])

  return (
    <div>
      {bastion
      ?
        <div className='App h-screen bg-blue-400 flex flex-row'>
          <BastionSidebar bastion={bastion} />
          <div className='flex-1 overflow-auto'>
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