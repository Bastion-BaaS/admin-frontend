import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SidebarHome from './SidebarHome';
import { fetchBastions } from '../actions/BastionActions';
import { createBastion } from '../actions/BastionActions';

const Home = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const bastions = useSelector(state => state.bastions);
  useEffect(() => {
    dispatch(fetchBastions());
  }, [dispatch])

  const handleCancel = () => {
    setShowCreateForm(false);
    setName('');
  };

  const handleClickCreate = () => {
    dispatch(createBastion({ name }));
  };

  return (
    <div className='App h-screen bg-white2 flex'>
      <SidebarHome bastions={bastions}/>
      <div className='w-10/12 overflow-auto'>
        {showCreateForm 
        ?
          <div className='flex flex-col'>
            <div className='px-4 mt-4'>
              <label htmlFor='bastionName' className='inline-flex'>Name of your new Bastion:</label>
              <input
                name='bastionName'
                className='border-black border-2 px-2 mx-2 inline-flex'
                id='newBastionName'
                type='text'
                value={name}
                placeholder='Enter name'
                onChange={(e) => setName(e.target.value)}>
              </input>
            </div>

            <div className='flex flex-row'>
              <button className='border-black border-2 px-2 m-4 inline-flex rounded bg-orange-400'
                onClick={handleClickCreate}>
                Create
              </button>
              <button className='border-black border-2 px-2 m-4 inline-flex rounded bg-orange-400'
                onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        :
        <div className=''>
          <button className='m-5 bg-green-300 rounded-md px-2'
            onClick={() => setShowCreateForm(true)}>
            Create Bastion
          </button>
        </div>    
        }
        <div>
          Total bastions: {bastions.length}
        </div>
      </div>
    </div>
  );
};

export default Home;
