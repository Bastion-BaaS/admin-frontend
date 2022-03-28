import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../actions/UserActions';

const AddUserForm = ({ onCancel, bastionName }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleCancelAndResetForms = () => {
    onCancel();
    resetForms();
  };

  const handleCreate = () => {
    if ([username, email, password].some(value => value.length === 0)) {
      alert('All fields required');
      return;
    }
    
    dispatch(createUser(bastionName, { username, email, password }));
    resetForms();
  };

  const resetForms = () => {
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col pr-4 mt-4'>
        <input
          name='username'
          className='border-bdazzledblue text-black border px-4 py-1 inline-flex rounded-xl mr-4 w-48 mb-2'
          id='username'
          type='text'
          value={username}
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}>
        </input>
        <input
          name='email'
          className='border-bdazzledblue text-black border px-4 py-1 inline-flex rounded-xl mr-4 w-48 mb-2'
          id='newUserEmail'
          type='email'
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}>
        </input>
        <input
          name='password'
          className='border-bdazzledblue text-black border px-4 py-1 inline-flex rounded-xl mr-4 w-48'
          id='newUserPassword'
          type='text'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}>
        </input>
      </div>
      <div className='flex flex-row text-white'>
        <button className='border-bdazzledblue border px-4 my-2 py-1 inline-flex rounded-l-xl bg-bdazzledblue hover:bg-midnightblue hover:text-redorange'
          onClick={handleCreate}>
          Create
        </button>
        <button className='border-bdazzledblue border px-4 my-2 py-1 inline-flex rounded-r-xl bg-black hover:bg-gray-600'
          onClick={handleCancelAndResetForms}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddUserForm;
