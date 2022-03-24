import React from 'react';
import ReactJson from 'react-json-view';

const CollectionSummary = ({ collection }) => {

  const handleAddDocument = (obj) => {
    console.log('added', obj)
  }

  const handleEditDocument = (obj) => {
    console.log(obj)
  }

  return (
    <div>
      {collection
        ?
        <div className='flex-1 px-4 mt-4 border-2 border-black p-2'>
          <ReactJson src={collection} name={null} onAdd={handleAddDocument} onEdit={handleEditDocument} enableClipboard={false} />
        </div>
        :
        <div className="border-black border-2 rounded px-2 bg-yellow-300">Choose a collection to view details</div>
        }
    </div>
  );
};

export default CollectionSummary;

