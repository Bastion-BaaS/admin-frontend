import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddUserForm from './AddUserForm';
import { fetchUsers, deleteUser } from '../actions/UserActions';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [showAddForm, setShowAddForm] = useState(false);
  const bastionName = useOutletContext().StackName;
  
  const handleCancel = () => {
    setShowAddForm(false);
  };

  const handleDelete = (userId) => {
    return () => {
      if (window.confirm('Are you sure you want to delete this user?')) {
        dispatch(deleteUser(bastionName, userId));
      }
    };
  };

  useEffect(() => {
    dispatch(fetchUsers(bastionName));
  }, [dispatch, bastionName]);

  return (
    <div className=''>
      {showAddForm ?
        <AddUserForm onCancel={handleCancel} bastionName={bastionName} />
      :
      <div className=''>
        <button className='m-5 bg-green-300 rounded-md px-2'
          onClick={() => setShowAddForm(true)}>
          Add User
        </button>
      </div>    
      }
      <div className='px-4'>
        <table>
          <thead>
            <tr>
              <td>Username</td>
              <td className='pl-4'>Email</td>
            </tr>
          </thead>
          <tbody>
            {users.map(user => 
              <tr key={user.id}>
               <td>{user.username}</td>
               <td className='pl-4'>{user.email}</td>
               <td>
                 <svg onClick={handleDelete(user.id)} className='hover:cursor-pointer hover:bg-red-400 m-2 w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                 </svg>
               </td>
             </tr> 
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
