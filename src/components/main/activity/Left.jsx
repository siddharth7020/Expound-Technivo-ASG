import React from 'react';

const Left = () => {
  return (
    <div className='border-r border-gray-300'>
      <div className='p-2  grid grid-cols-[50%_50%]'>
        <div className='mt-5'>
          <p className='text-sm'>Test</p>
          <h1 className='font-bold mt-2'>Rohit Sharma</h1>
          <div className='flex justify-between mt-2 font-bold text-sm'>
            <div className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
              <h3>Virat Kohli</h3>
            </div>
            <p>Event</p>
          </div>
        </div>
        <div className='mt-5'>
          <div className='flex gap-2 text-sm text-gray-500'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-exclamation-circle mt-1" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
            </svg>
            <p>Pending action</p>
          </div>
          <div className='flex gap-2 mt-2'>
            <p className='font-bold text-xs bg-green-200 text-green-500 rounded p-1'>
            Create Account
            </p>
            <p className='font-bold text-xs bg-orange-200 text-orange-500 rounded p-1'>
            Create Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Left;