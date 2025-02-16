import React from 'react';
import Left from './activity/Left';
import Right from './activity/Right';

const Activity = () => {
  return (
    <div className='grid grid-cols-[35%_65%] border-b border-gray-300'>
        <Left />
        <Right />
    </div>
  )
}

export default Activity