

const Middle = () => {
  return (
    <div className='p-1 flex justify-between items-center '>
      <div className='flex gap-4 font-bold'>
        <button className='p-2 bg-green-500 text-white rounded'>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
          </svg>
        </button>
        <button className='p-2 bg-green-500 text-white rounded'>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
          </svg>
        </button>
        <button className='p-2 bg-orange-200 text-orange-500 text-xs rounded'>Nurturing</button>
        <button className='p-2 bg-gray-200 text-gray-500 text-xs rounded'>Convert</button>
      </div>
      <button className='flex gap-2 p-2 bg-custom-blue text-white text-sm rounded fotn-bold'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2 mt-1" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
        </svg>
        Mark as aconverted
      </button>
    </div>
  )
}

export default Middle