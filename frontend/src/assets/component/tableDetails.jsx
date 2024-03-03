import React from 'react';

// linear-gradient(to right, #0f0c29, #302b63, #24243e)
export default function tableDetails({ history }) {
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
                <div className="flex-initial w-1/5">
                  <span>Payment Subject</span>
                </div>
                <div className="flex-initial w-1/5">
                  <span>Type</span>
                </div>
                <div className="flex-initial w-1/5">
                  <span>Address</span>
                </div>
                <div className="flex-initial w-1/5">
                  <span>Message</span>
                </div>
                <div className="flex-initial w-1/5">
                  <span>Amount</span>
                </div>
              </div>
              {history ? (
                history.map((obj, index) => (
                  <div key={index} className="text-white">
                    <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                      <div className="flex-initial w-1/5 px-2">
                        <span>{obj.subject}</span>
                      </div>
                      <div className="flex-initial w-1/5 px-2">
                        <span>{obj.type}</span>
                      </div>
                      <div className="flex-initial w-1/5 px-2">
                        <span>{obj.address}</span>
                      </div>
                      <div className="flex-initial w-1/5 px-2">
                        <span>{obj.message}</span>
                      </div>
                      <div className="flex-initial w-1/5 px-2">
                        <span>{obj.amount}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-white">
                  <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                    <div className="flex-initial w-1/5 px-2">
                      <span>Milk</span>
                    </div>
                    <div className="flex-initial w-1/5 px-2">
                      <span>Paid</span>
                    </div>
                    <div className="flex-initial w-1/5 px-2">
                      <span>cdedd</span>
                    </div>
                    <div className="flex-initial w-1/5 px-2">
                      <span>csdvcdsvds</span>
                    </div>
                    <div className="flex-initial w-1/5 px-2">
                      <span>100</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
