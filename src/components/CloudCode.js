import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFunctions, deleteFunction, createFunction } from '../actions/CloudCodeActions';
import CloudCodeCard from './CloudCodeCard';

const CloudCode = () => {
  const dispatch = useDispatch();
  const cloudCodeFunctions = useSelector(state => state.cloudCode);
  const [ fileState, setFileState ] = useState();
	const [ isFileSelected, setIsFileSelected ] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFunctionTitle, setNewFunctionTitle] = useState('');
  const bastionName = useOutletContext().StackName;
  console.log(cloudCodeFunctions);

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
    setFileState(e.target.files[0]);
    setIsFileSelected(true);
  }

  const handleSubmit = () => {
    if (!isFileSelected) {
      alert('No file selected');
      return;
    } else if (newFunctionTitle.length < 1 || 
        cloudCodeFunctions.some(ccf => ccf.name === newFunctionTitle)) {
      alert('Function name is required and must be unique');
      return;
    }
    const formData = new FormData();
    formData.append('file', fileState);
    formData.append('fileName', newFunctionTitle);
    dispatch(createFunction(bastionName, formData));
    resetFields();
  };

  const resetFields = () => {
    setShowAddForm(false);
    setNewFunctionTitle('');
    setIsFileSelected(false);
  };

  return (
    <div>
      <div className='max-w-screen-lg flex flex-col mb-2'>
        <h1 className='flex-none text-lg text-black ml-2'>
          {cloudCodeFunctions.length > 0 ? 'Cloud Code Functions' : 'You have no cloud code cunctions'}
        </h1>
        {cloudCodeFunctions.length > 0 &&
          <div className='flex flex-col max-w-screen-md border rounded-xl border-gray-400 my-2 px-2'>
            {cloudCodeFunctions.map((func, i) =>
              <CloudCodeCard key={func.id} index={i} func={func} handleDelete={handleDelete(func.id)} />
            )}
          </div>
        }
      </div>
      {showAddForm ?
          <div className='flex flex-col'>
            <div className='pr-4 mt-4'>
              <input className='border-bdazzledblue text-black border px-4 py-2 inline-flex rounded-xl mr-4'
                name='newFunctionTitle'
                id='newFunctionName'
                type='text'
                value={newFunctionTitle}
                placeholder='Enter Name'
                onChange={(e) => setNewFunctionTitle(e.target.value)}
              />
              <input className=''
                type='file' 
                name='file' 
                onChange={handleUploadFile}
              />
            </div>
            <div className='flex flex-row text-white'>
              <button className='border-bdazzledblue border px-4 my-4 py-2 inline-flex rounded-l-xl bg-bdazzledblue hover:bg-midnightblue hover:text-redorange'
                onClick={handleSubmit}>
                Submit
              </button>
              <button className='border-bdazzledblue border px-4 my-4 py-2 inline-flex rounded-r-xl bg-black hover:bg-gray-600'
                onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
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

export default CloudCode;
