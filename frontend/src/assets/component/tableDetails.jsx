import React from 'react'

// linear-gradient(to right, #0f0c29, #302b63, #24243e)
export default function tableDetails() {
  const gradientStyle = {
    background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
    // Add other styles or classes as needed
  };
  return (
    <>
      <div className="p-4">
        <div className="p-4 rounded-md" style={gradientStyle}>
          <div>
            <div>
              <div className="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                <div>
                  <span>Name</span>
                </div>
                <div>
                  <span>Email</span>
                </div>
                <div>
                  <span>Role</span>
                </div>
                <div>
                  <span>Time</span>
                </div>
              </div>
              <div className='text-white'>
                <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                  <div className="px-2 flex">
                    <span>John Deo</span>
                  </div>
                  <div>
                    <span>johndeo@gmail.com</span>
                  </div>
                  <div className="px-2">
                    <span>Admin</span>
                  </div>
                  <div className="px-2">
                    <span>28/12/2021</span>
                  </div>
                </div>
                <div className="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                  <div className="px-2">
                    <span>John Deo</span>
                  </div>
                  <div>
                    <span>johndeo@gmail.com</span>
                  </div>
                  <div className="px-2">
                    <span>Admin</span>
                  </div>
                  <div className="px-2">
                    <span>28/12/2021</span>
                  </div>
                </div>
                <div className="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                  <div className="px-2">
                    <span>John Deo</span>
                  </div>
                  <div>
                    <span>johndeo@gmail.com</span>
                  </div>
                  <div className="px-2">
                    <span>Admin</span>
                  </div>
                  <div className="px-2">
                    <span>28/12/2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
