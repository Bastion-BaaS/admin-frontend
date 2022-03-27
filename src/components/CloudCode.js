import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFunctions, deleteFunction, createFunction } from '../actions/CloudCodeActions';

const CloudCode = () => {
  const dispatch = useDispatch();
  const cloudCodeFunctions = useSelector(state => state.cloudCode);
  const [ fileState, setFileState ] = useState();
	const [ isFileSelected, setIsFileSelected ] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFunctionTitle, setNewFunctionTitle] = useState('');
  const bastionName = useOutletContext().name;

  useEffect(() => {
    dispatch(fetchFunctions(bastionName));
  }, [dispatch, bastionName]);

  const handleCancel = () => {
    resetFields();
  };

  const handleDelete = (id) => {
    return () => {
      if (window.confirm('Are you sure you want to delete this function?')) {
        dispatch(deleteFunction(bastionName, id));
      }
    };
  };

  const handleUploadFile = (e) => {
    console.log('loaded')
    setFileState(e.target.files[0]);
    setIsFileSelected(true);
  }

  const handleSubmit = () => {
    if (!isFileSelected) {
      alert('No file selected');
      return;
    }
    const formData = new FormData();
    formData.append('file', fileState)
    dispatch(createFunction(newFunctionTitle, formData));
    resetFields();
  };

  const resetFields = () => {
    setShowAddForm(false);
    setNewFunctionTitle('');
    setIsFileSelected(false);
  };

  return (
    <div>
      <div>
        {showAddForm ?
          <div className='flex flex-col'>
            <div className='px-4 mt-4'>
              <label htmlFor='newFunctionTitle'>Function Name:</label>
              <input className='border-black border-2 px-2 mx-2'
                name='newFunctionTitle'
                id='newFunctionName'
                type='text'
                value={newFunctionTitle}
                placeholder='Enter Name'
                onChange={(e) => setNewFunctionTitle(e.target.value)}
              />
              <input className='px-2'
                type='file' 
                name='file' 
                onChange={handleUploadFile}
              />
            </div>
            <div className='flex flex-row'>
              <button className='border-black border-2 px-2 m-4 inline-flex rounded bg-orange-400'
                onClick={handleSubmit}>
                Submit
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
              onClick={() => setShowAddForm(true)}>
              Create a Function
            </button>
          </div>    
        }
        <div className='flex flex-row'>
          <div className='flex-none pl-4 pr-6 overflow-x-auto'>
            <h2>Cloud Code Functions:</h2>
            {cloudCodeFunctions.map(func =>
              <div key={func.id} className='flex flex-row py-2'>
                <p>{func.name}</p>
                <svg onClick={handleDelete(func.id)}
                  className='hover:cursor-pointer hover:bg-red-500 ml-2 w-6 h-6'
                  fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudCode;
