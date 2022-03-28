import React from 'react';
import ReactJson from 'react-json-view';

const CollectionSummary = ({ collection }) => {
  // to be implemented?
  const handleAddDocument = (obj) => {
    console.log('added', obj)
  }

  const handleEditDocument = (obj) => {
    console.log(obj)
  }

  return (
    <div>
      {collection?.data &&
        <div className='pt-8 mt-1 px-4'>
          <div className='px-8 py-8 border-2 border-midnightblue bg-white rounded-xl'>
            <ReactJson src={collection.data} name={null} onAdd={handleAddDocument} onEdit={handleEditDocument} enableClipboard={false} />
          </div>
        </div>
      }
    </div>
  );
};

export default CollectionSummary;
