import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SidebarHome from './HomeSidebar';
import Overview from './Overview';
import { fetchBastions, createBastion, deleteBastion } from '../actions/BastionActions';
import { fetchAdmin, loginAdmin } from '../actions/AdminActions';

const Home = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setError] = useState('');
  const dispatch = useDispatch();
  const bastions = useSelector(state => state.bastions);
  const admin = useSelector(state => state.admin);
  console.log(admin)

  useEffect(() => {
    dispatch(fetchAdmin());
    if (admin) {
      dispatch(fetchBastions());
    }
  }, [dispatch, admin])


  const resetFilds = () => {
    setShowCreateForm(false);
    setName('');
  };

  const handleClickCreate = () => {
    try {
      dispatch(createBastion({ name }));
      resetFilds();
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

  const handleLogin = () => {
    dispatch(loginAdmin({username, password}));
    setTimeout(() => {
      setUsername('');
      setPassword('');
      if (!admin) {
        setError('Wrong credentials. Please try again.');
      }
      setTimeout(() => {
        setError('');
      }, 3000);
    }, 2000);
  }

  return (
    <div className='App h-screen bg-white2 flex'>
      <SidebarHome bastions={bastions}/>
      <div className='w-10/12 overflow-auto flex flex-col p-12'>
        <div className='flex flex-col items-center max-w-screen-lg mt-12'>
          {!admin &&
            <div className='fle flex-col items-center'>
                <h1 className='flex-none text-2xl text-gray-900 mb-24'>
                  Welcome to Admin Dashboard
                </h1>
                {
                  loginError &&
                  <div className="mt-12 flex flex-col items-center">
                    <p className='text-lg text-tomato font-semibold mb-2'>{loginError}</p>
                  </div>
                }
              <div className='mt-4 flex flex-col items-center'>
                <input
                  name='username'
                  className='border-bdazzledblue text-black border px-8 py-4 inline-flex rounded-2xl mb-6 w-80'
                  id='username'
                  type='text'
                  value={username}
                  placeholder='Your username'
                  onChange={(e) => setUsername(e.target.value)}>
                </input>
                <input
                  name='password'
                  className='border-bdazzledblue text-black border px-8 py-4 inline-flex rounded-2xl w-80'
                  id='password'
                  type='text'
                  value={password}
                  placeholder='Password provided by Bastion CLI'
                  onChange={(e) => setPassword(e.target.value)}>
                </input>
                <div className="text-white2">
                  <button className='border-bdazzledblue border px-8 my-4 py-2 inline-flex rounded-xl bg-bdazzledblue hover:bg-midnightblue hover:text-redorange'
                    onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
        {admin &&
          <div>
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
                    onClick={resetFilds}>
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
        }
      </div>
    </div>
  );
};

export default Home;
