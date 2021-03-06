import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles, deleteFile } from '../../actions/FileActions';
import File from './File';

const Files = () => {
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
    <div className='max-w-screen-lg flex flex-col mb-2'>
      <h1 className='flex-none text-lg text-black ml-2'>
        {files.length > 0 ? 'Files' : 'You have no files'}
      </h1>
      {files.length > 0 &&
        <div className='flex flex-col max-w-screen-lg border rounded-xl border-gray-400 my-2'>
          {files.map((file, i) =>
            <File key={file.id} file={file} index={i} handleDelete={handleDelete}/>
          )}
        </div>
      }
    </div>
  );
};

export default Files;