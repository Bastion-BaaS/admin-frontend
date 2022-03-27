import React from 'react';
import Card from './Card';

const Overview = ({bastions, handleDelete}) => {
  return (
    <div className='max-w-screen-lg flex flex-col mb-8'>
      <h1 className='flex-none text-2xl font-semibold text-gray-900'>
        Current Bastion Instances
      </h1>
      <div className='flex-none text-lg text-gray-700 mt-2'>
          <p className=''>You have {bastions.length !== 0 ? bastions.length : 'no'} instances deployed</p>
      </div>
      <div className='flex flex-col mt-6'>
        {bastions.map(bastion => <Card key={bastion._id} bastion={bastion} handleDelete={handleDelete} />)
        }
      </div>
    </div>
  )
}

export default Overview;
