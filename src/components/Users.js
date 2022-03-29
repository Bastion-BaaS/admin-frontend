import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddUserForm from './AddUserForm';
import { fetchUsers, deleteUser } from '../actions/UserActions';
import User from './User';

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
    <div className='max-w-screen-lg flex flex-col mb-2'>
      <h1 className='flex-none text-lg text-black ml-2'>
        {users.length > 0 ? 'Users' : 'You have no users'}
      </h1>
      {users.length > 0 &&
        <div className='flex flex-col max-w-screen-md border rounded-xl border-gray-400 my-2 px-2'>
          {users.map((user, i) =>
            <User key={user.id} index={i} user={user} handleDelete={handleDelete} />
          )}
        </div>
      }
      {showAddForm ?
        <AddUserForm onCancel={handleCancel} bastionName={bastionName} />
      :
      <div className=''>
        <button className='mt-2 px-4 py-1 bg-bdazzledblue hover:bg-midnightblue hover:text-redorange text-md text-white2 rounded-xl'
          onClick={() => setShowAddForm(true)}>
          Create
        </button>
      </div>
      }
    </div>
  );
};

export default Users;
