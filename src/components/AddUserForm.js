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
      <div className='px-4 mt-4'>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor='username' className='inline-flex'>Username:</label></td>
              <td>
                <input
                name='username'
                className='border-black border-2 px-2 mx-2 inline-flex'
                id='username'
                type='text'
                value={username}
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}>
                </input>
              </td>
            </tr>
            <tr>
              <td><label htmlFor='email' className='inline-flex'>Email:</label></td>
              <td>
                <input
                name='email'
                className='border-black border-2 px-2 mx-2 inline-flex'
                id='newUserEmail'
                type='email'
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}>
                </input>
              </td>
            </tr>
            <tr>
              <td><label htmlFor='email'>Password:</label></td>
              <td>
                <input
                name='password'
                className='border-black border-2 px-2 mx-2'
                id='newUserPassword'
                type='text'
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}>
                </input>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex flex-row'>
        <button className='border-black border-2 px-2 m-4 inline-flex rounded bg-orange-400'
          onClick={handleCreate}>
          Create User
        </button>
        <button className='border-black border-2 px-2 m-4 inline-flex rounded bg-orange-400'
          onClick={handleCancelAndResetForms}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddUserForm;