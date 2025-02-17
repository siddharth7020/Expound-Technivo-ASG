

const Right = () => {
  return (
    <>
      <div className='grid grid-rows-[80%_20%]'>
        <div className='grid grid-cols-[70%_30%] '>
          <div className='border-r border-gray-300'>
            <div className='flex gap-4 p-2 relative text-xs text-gray-500 font-bold '>
              <p className='text-custom-blue'>Activity</p>
              <p>Actinables</p>
              <p>Task</p>
              <p>Note & File</p>

            </div>
            <div className='border-t border-gray-300'>
              <div className='p-2 mt-1'>
                <div className='flex justify-between text-xs'>
                  <div className="flex items-center border border-gray-400 px-3 py-2 rounded-lg text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone text-green-500" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                    <div className="w-px h-5 bg-gray-400 mx-3"></div>
                    <p className="text-sm font-medium">Call</p>
                  </div>
                  <div className="flex items-center border border-gray-400 px-3 py-2 rounded-lg text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill text-gray-500" viewBox="0 0 16 16">
                      <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                      <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                    </svg>
                    <div className="w-px h-5 bg-gray-400 mx-3"></div>
                    <p className="text-sm font-medium">Email</p>
                  </div>
                  <div className="flex items-center border border-gray-400 px-3 py-2 rounded-lg text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-event text-orange-500" viewBox="0 0 16 16">
                      <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <div className="w-px h-5 bg-gray-400 mx-3"></div>
                    <p className="text-sm font-medium">Event</p>
                  </div>

                </div>
                <div className='mt-1 text-xs font-bold '>
                  <p>Subject *</p>
                  <input type="text" className='w-full p-1 border border-gray-400 rounded' />
                  <div className='flex justify-between mt-1'>
                    <div className="relative w-64">
                      <p>Add team member</p>
                      <input type="text" placeholder="Search team member..." className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>

                    <div className="relative w-64">
                      <p>Add team contact</p>
                      <input type="text" placeholder="Search team contact..." className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>


                  </div>
                  <div className='flex justify-between mt-1 mb-2'>
                    <div className="relative w-64">
                      <p>Due Date*</p>
                      <input type="date" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div className="relative w-64">
                      <p>Time*</p>
                      <input type="time" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>

                  </div>

                  <p>Description</p>
                  <textarea className='w-full p-1 border border-gray-400 rounded' name="" id="" cols="10" rows="3"></textarea>
                </div>
              </div>
            </div>
            <div className='flex justify-end  p-2'>
              <button className='p-1 text-sm bg-custom-blue text-white rounded hover:bg-custom-blue-hover'>Submit</button>
            </div>
          </div>


        </div>

        <div className='border-t border-gray-300'>
          <div className='p-2 text-sm'>
            <div className='flex justify-between'>
              <div>
                <p>Overdue Activity</p>
                <div className='mt-1 flex gap-2'>
                  <div className="bg-gray-100 shadow-lg rounded-lg p-1">
                    <div className="flex justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone text-green-500" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
                      </svg>
                      <p className="text-gray-700 font-medium">Share Catalog</p>
                    </div>
                    <hr className="my-1 border-gray-300" />
                    <div className="flex gap-5 text-gray-600 text-xs">
                      <p className="font-medium">Due Date & Time</p>
                      <p>15-02-2023 / 10:00 AM</p>
                    </div>
                  </div>

                  <div className="bg-gray-100 shadow-lg rounded-lg p-1">
                    <div className="flex justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone text-green-500" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
                      </svg>
                      <p className="text-gray-700 font-medium">Introductor Call</p>
                    </div>
                    <hr className="my-1 border-gray-300" />
                    <div className="flex gap-5 text-gray-600 text-xs">
                      <p className="font-medium">Due Date & Time</p>
                      <p>15-02-2023 / 10:00 AM</p>
                    </div>
                  </div>
                  {/* <div className="bg-gray-100 shadow-lg rounded-lg p-1">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone text-green-500" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
                      </svg>
                      <p className="text-gray-700 font-medium">Share Catalog</p>
                    </div>

                    <hr className="my-1 border-gray-300" />

                    <div className="flex gap-5 text-gray-600 text-sm">
                      <div>
                        <p className="font-medium">Due Date</p>
                        <p>15-02-2023</p>
                      </div>
                      <div>
                        <p className="font-medium">Time</p>
                        <p>10:00 AM</p>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="bg-gray-100 shadow-lg rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone text-green-500" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
                      </svg>
                      <p className="text-gray-700 font-medium">Introductor Call</p>
                    </div>

                    <hr className="my-1 border-gray-300" />

                    <div className="flex gap-5 text-gray-600 text-sm">
                      <div>
                        <p className="font-medium">Due Date</p>
                        <p>15-02-2023</p>
                      </div>
                      <div>
                        <p className="font-medium">Time</p>
                        <p>10:00 AM</p>
                      </div>
                    </div>
                  </div> */}


                </div>
              </div>
              <p>View Upcomming</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Right;