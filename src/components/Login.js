import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeSidebar from './HomeSidebar';
import { loginAdmin } from '../actions/AdminActions';

const Login = () => {
  const dispatch = useDispatch();
  const [loginError, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const admin = useSelector(state => state.admin);

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
      <HomeSidebar logout={false} />
      <div className='w-10/12 overflow-auto flex flex-col p-12'>
        <div className='flex flex-col items-center max-w-screen-lg mt-12'>
          <div className='flex flex-col items-center'>
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
        </div>
      </div>    
    </div>
  )
}

export default Login;