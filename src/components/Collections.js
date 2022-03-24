import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CollectionSummary from './CollectionSummary';
import { fetchCollections, deleteCollection, createCollection } from '../actions/CollectionActions';

const Collections = () => {
  const dispatch = useDispatch();
  const collections = useSelector(state => state.collections);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCollectionTitle, setNewCollectionTitle] = useState('');
  const [active, setActive] = useState('');
  const bastionName = useOutletContext().name;

  useEffect(() => {
    dispatch(fetchCollections(bastionName));
  }, []);

  console.log(collections)

  const handleCancel = () => {
    resetFields();
  };

  const handleDelete = (id) => {
    return () => {
      if (window.confirm('Are you sure you want to delete this collection?')) {
        dispatch(deleteCollection(bastionName, id));
        if (id === active) { setActive(''); }
      }
    };
  };

  const handleSave = () => {
    dispatch(createCollection(newCollectionTitle));
  };

  const resetFields = () => {
    setShowAddForm(false);
    setNewCollectionTitle('');
  };

  const activeClass = 'font-bold hover:cursor-pointer hover:bg-slate-300 w-36 my-2 px-2'
  const inactiveClass = 'hover:cursor-pointer hover:bg-slate-300 w-36 px-2 my-2'

  return (
    <div>
      {showAddForm ?
        <div className='flex flex-col'>
          <div className='px-4 mt-4'>
            <label htmlFor='newCollectionTitle'>Collection Name:</label>
            <input
              name='newCollectionTitle'
              className='border-black border-2 px-2 mx-2'
              id='newCollectionName'
              type='text'
              value={newCollectionTitle}
              placeholder='Enter new title'
              onChange={(e) => setNewCollectionTitle(e.target.value)}>
            </input>
          </div>
          <div className='flex flex-row'>
            <button className='border-black border-2 px-2 m-4 inline-flex rounded bg-orange-400'
              onClick={handleSave}>
              Save
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
          Create a Collection
        </button>
      </div>    
      }
      <div className='flex flex-row'>
        <div className='flex-none pl-2 pr-6 overflow-x-auto'>
          <h2 className='hover:cursor-pointer' onClick={() => setActive('')}>Collections:</h2>
          {collections.map(collection =>
            <div key={collection.id} className='flex flex-row'>
              <p className={collection.id === active ? activeClass : inactiveClass}
                onClick={() => setActive(collection.id)}>
                  {collection.id}
              </p>
              <svg onClick={handleDelete(collection.id)}
                className='my-2 hover:cursor-pointer hover:bg-red-500 ml-2 w-6 h-6'
                fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            </div>
          )}
        </div>
        <div>
          <CollectionSummary collection={collections.find(c => c.id === active)}/>
        </div>
      </div>
    </div>
  );
};

export default Collections