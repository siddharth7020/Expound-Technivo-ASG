import React from 'react';

const Left = () => {
  return (
    <div className='border-r border-gray-300'>
      <div className='p-2  grid grid-cols-[50%_50%]'>
        <div className='mt-10'>
          <p className='text-sm'>Test</p>
          <h1 className='font-bold mt-8'>Rohit Sharma</h1>
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
        <div className='mt-10'>
          <div className='flex gap-2 text-sm text-gray-500'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-exclamation-circle mt-1" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
            </svg>
            <p>Pending action</p>
          </div>
          <div className='flex gap-2 mt-8'>
            <p className='font-bold text-xs bg-green-200 text-green-500 rounded p-1'>
              Create Account
            </p>
            <p className='font-bold text-xs bg-orange-200 text-orange-500 rounded p-1'>
              Create Contact
            </p>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-300 mt-8'>
        <div className=" flex gap-4 p-2 relative text-xs text-gray-500 font-bold">
          <div className="relative inline-block">
            <p className="inline-block text-custom-blue">Basic Details</p>
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              10
            </span>
          </div>
          <p>Account Details</p>
          <div className="relative inline-block">
            <p className="inline-block">Lead Details</p>
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              8
            </span>
          </div>
          <p>Team </p>
          <p>Other Contacts</p>
        </div>

      </div>
      <div className='border-t border-gray-300'>
        <div className='p-2 flex justify-between'>
          <div>
            <p className='font-bold text-sm'>Titel</p>
            <p className='text-gray-500 text-xs' >Test</p>
          </div>
          <div>
            <p className='font-bold text-sm'>First Name</p>
            <p className='text-gray-500 text-xs' >Virat</p>
          </div><div>
            <p className='font-bold text-sm'>Last Name</p>
            <p className='text-gray-500 text-xs' >Kohali</p>
          </div>

        </div>
      </div>
      <div className='border-t border-gray-300'>
        <div className='p-2'>
          <h2 className='font-bold mt-5'>
            Address Details
          </h2>
          <div className=' flex justify-between mt-2 mb-20'>
            <div>
              <p className='font-bold text-sm'>Region</p>
              <p className='text-gray-500 text-xs' >Test</p>
            </div>
            <div>
              <p className='font-bold text-sm'>Country</p>
              <p className='text-gray-500 text-xs' >India</p>
            </div><div>
              <p className='font-bold text-sm'>Zone</p>
              <p className='text-gray-500 text-xs' >Maharashtra</p>
            </div>

          </div>

          <div className='flex justify-between mt-20'>
            <div className='flex gap-2 text-sm text-gray-500'>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-exclamation-circle mt-1" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
              </svg>
              <p>10 Empty files fill the pending ingformation</p>
            </div>
            <button className='p-2 bg-custom-blue text-white text-xs rounded'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Left;