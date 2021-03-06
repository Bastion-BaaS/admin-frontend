import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeSidebar from './HomeSidebar';
import Overview from './Overview';
import { fetchBastions, createBastion, deleteBastion } from '../../actions/BastionActions';

const Home = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const bastions = useSelector(state => state.bastions);

  useEffect(() => {
    dispatch(fetchBastions());
  }, [dispatch])

  const resetFields = () => {
    setShowCreateForm(false);
    setName('');
  };

  const handleClickCreate = () => {
    try {
      dispatch(createBastion({ name }));
      resetFields();
    } catch {
      console.log('Unable to create instance. Please try again later');
    }
  };

  const handleDelete = (name) => {
    try {
      dispatch(deleteBastion(name));
    } catch {
      console.log('Unable to delete instance. Please try again later');
    }
  };

  return (
    <div className='App h-screen bg-white2 flex'>
      <HomeSidebar bastions={bastions} logout={true}/>
      <div className='w-10/12 overflow-auto flex flex-col p-12'>
        <div className='flex flex-col items-center max-w-screen-lg mt-12'>
          <div className='fle flex-col items-center'>
            <h1 className='flex-none text-2xl text-gray-900 mb-24'>
              Welcome to Admin Dashboard
            </h1>
          </div>
        </div>
        <div>
          <Overview bastions={bastions} handleDelete={handleDelete} />
          {showCreateForm ?
            <div className='flex flex-col items-center max-w-screen-lg'>
              <div className='flex flex-row text-white text-xl'>
                <button id='createBastion' className='border-bdazzledblue border px-4 my-4 py-4 inline-flex rounded-l-xl bg-bdazzledblue hover:bg-midnightblue hover:text-redorange'
                  onClick={handleClickCreate}>
                  Create
                </button>
                <button className='border-bdazzledblue border px-4 my-4 py-4 inline-flex bg-black hover:bg-gray-600'
                  onClick={resetFields}>
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
    </div>
  );
};

export default Home;