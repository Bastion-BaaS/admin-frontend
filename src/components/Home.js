import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SidebarHome from './SidebarHome';
import Overview from './Overview';
import { fetchBastions, createBastion, deleteBastion } from '../actions/BastionActions';

const Home = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const bastions = useSelector(state => state.bastions);
  const navigate = useNavigate();

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

  const handleDelete = (name, id) => {
    try {
      dispatch(deleteBastion(name, id));
      navigate('/');
    } catch {
      console.log('Unable to delete instance.  Please try again later');
    }
  };

  return (
    <div className='App h-screen bg-white2 flex'>
      <SidebarHome bastions={bastions}/>
      <div className='w-10/12 overflow-auto flex flex-col p-12'>
        <Overview bastions={bastions} handleDelete={handleDelete} />
        {showCreateForm
        ?
          <div className='flex flex-col items-center max-w-screen-lg'>
            <div className='flex flex-row text-white text-xl'>
              <button className='border-bdazzledblue border px-4 my-4 py-4 inline-flex rounded-l-xl bg-bdazzledblue hover:bg-midnightblue hover:text-redorange'
                onClick={handleClickCreate}>
                Create
              </button>
              <button className='border-bdazzledblue border px-4 my-4 py-4 inline-flex bg-black hover:bg-gray-600'
                onClick={handleCancel}>
                Cancel
              </button>
              <div className='mt-4'>
                <input
                  name='bastionName'
                  className='border-bdazzledblue text-black border px-8 py-4 inline-flex rounded-r-2xl'
                  id='newBastionName'
                  type='text'
                  value={name}
                  placeholder='Name of your instance'
                  onChange={(e) => setName(e.target.value)}>
                </input>
              </div>
            </div>
          </div>
        :
        <div className='flex flex-col items-center max-w-screen-lg'>
          <button className='py-4 px-4 my-4 bg-bdazzledblue hover:bg-midnightblue hover:text-redorange text-xl text-white2 rounded-xl'
            onClick={() => setShowCreateForm(true)}>
            Create Instance
          </button>
        </div>
        }
      </div>
    </div>
  );
};

export default Home;
