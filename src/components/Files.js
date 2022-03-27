import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles, deleteFile } from '../actions/FileActions';

const Users = () => {
  const dispatch = useDispatch();
  const files = useSelector(state => state.files);
  const bastionName = useOutletContext().StackName;
  
  const handleDelete = (fileId) => {
    return () => {
      if (window.confirm('Are you sure you want to delete this file?')) {
        dispatch(deleteFile(bastionName, fileId));
      }
    };
  };

  useEffect(() => {
    dispatch(fetchFiles(bastionName));
  }, [dispatch, bastionName]);

  return (
    <div className='px-4'>
      <table>
        <thead>
          <tr>
            <td>Filename</td>
            <td className='pl-4'></td>
          </tr>
        </thead>
        <tbody>
          {files.map(file => 
            <tr key={file.id}>
              <td>{file.fileName}</td>
              <td>
                <svg onClick={handleDelete(file.id)} className='hover:cursor-pointer hover:bg-red-400 m-2 w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </td>
            </tr> 
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
