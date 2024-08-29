import React from 'react'



const ToastNotification = ({messages}) => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center items-center">
      <div className="bg-gray-800 text-white px-4 py-2 rounded-lg">
        {messages.map((message, index) => (
          <div key={index} className={`p-2 border-l-4 ${message.type==='success' ? 'border-green-500' : message.type==='error' ? 'border-red-500' : message.type==='warning' ? 'border-yellow-500' : 'border-blue-500'}`}>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToastNotification