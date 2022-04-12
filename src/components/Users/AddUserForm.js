import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/UserActions';

const AddUserForm = ({ onCancelOrCreate, bastionName }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleCreate = () => {
    if ([username, email, password].some(value => value.length === 0)) {
      alert('All fields required');
      return;
    } else if (username.length < 3) {
      alert('Username must be at least 2 characters long');
      return;
    }
    
    try {
      dispatch(createUser(bastionName, { username, email, password }));
      resetForms();
    } catch(e) {
      console.log(e);
    }
  };

  const resetForms = () => {
    onCancelOrCreate();
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
          type='password'
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
          onClick={resetForms}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddUserForm;
