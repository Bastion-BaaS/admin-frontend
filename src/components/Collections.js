import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections, fetchCollection, deleteCollection, createCollection } from '../actions/CollectionActions';
import CollectionSummary from './CollectionSummary';
import Collection from './Collection';

const Collections = () => {
  const dispatch = useDispatch();
  const collections = useSelector(state => state.collections);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCollectionTitle, setNewCollectionTitle] = useState('');
  const [active, setActive] = useState('');
  const bastionName = useOutletContext().StackName;

  useEffect(() => {
    dispatch(fetchCollections(bastionName));
  }, [dispatch, bastionName]);

  const handleDelete = (collection) => {
    return (e) => {
      e.stopPropagation();
      console.log('in handleDelete')
      if (window.confirm('Are you sure you want to delete this collection?')) {
        dispatch(deleteCollection(bastionName, collection.name));
        if (collection.name === active) { setActive(''); }
      }
    };
  };

  const handleActive = (collection) => {
    return () => {
      console.log('in handleActive')
      setActive(collection.name);
      dispatch(fetchCollection(bastionName, collection.name));
    }
  };

  const handleSave = () => {
    if (newCollectionTitle.length === 0 || collections.some(col => col.name === newCollectionTitle)) {
      alert('Name is required, and has to be unique');
      return
    }
    dispatch(createCollection(bastionName, newCollectionTitle));
    resetFields();
  };

  const resetFields = () => {
    setShowAddForm(false);
    setNewCollectionTitle('');
  };

  return (
    <div>
      <div className='flex flex-row'>
        <div className='flex-none w-1/3 flex flex-col mb-2'>
          <h1 className='flex-none text-lg text-black ml-2' onClick={() => setActive('')}>
            {collections.length > 0 ? 'Collections' : 'You have no collections'}
          </h1>
          {collections.length > 0 &&
            <div className='flex flex-col max-w-screen-md border rounded-xl border-gray-400 my-2 px-2 bg-white'>
              {collections.map((collection, i) =>
                <Collection active={active === collection.name} key={collection.name} index={i}
                  name={collection.name} handleDelete={handleDelete(collection)} handleActive={handleActive(collection)} />
              )}
            </div>
          }
          {showAddForm ?
            <div className='flex flex-col'>
              <div className='mt-2'>
                <input
                  name='newCollectionTitle'
                  className='border-bdazzledblue text-black border px-4 py-1 inline-flex rounded-xl mr-4'
                  id='newCollectionName'
                  type='text'
                  value={newCollectionTitle}
                  placeholder='Enter Name'
                  onChange={(e) => setNewCollectionTitle(e.target.value)}>
                </input>
              </div>
              <div className='flex flex-row text-white'>
                <button className='border-bdazzledblue border px-4 my-4 py-1 inline-flex rounded-l-xl bg-bdazzledblue hover:bg-midnightblue hover:text-redorange'
                  onClick={handleSave}>
                  Save
                </button>
                <button className='border-bdazzledblue border px-4 my-4 py-1 inline-flex rounded-r-xl bg-black hover:bg-gray-600'
                  onClick={resetFields}>
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
        <div className='flex-none w-2/3 flex flex-col'>
          <CollectionSummary collection={collections.find(c => c.name === active)}/>
        </div>
      </div>
    </div>
  );
};

export default Collections