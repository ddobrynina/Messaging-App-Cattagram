import React from 'react'

type MessageProps = {
  message: string;
  time: string;
}

type ReceivedMessageProps = {
  message: MessageProps;
};

const ReceivedMessage = ({message}:ReceivedMessageProps):React.JSX.Element => {
  
  const time = new Date(message.time).toLocaleTimeString();

  return (
    <div className='text-wrap m-1'>
      <div className='flex bg-white max-w-sm rounded-xl border p-2 relative'>
        <div className='flex-4'>{message.message}</div>
        <div className='flex-1 text-gray-400 absolute bottom-1 right-2'>{time}</div>
      </div>
    </div>
  )
}

export default ReceivedMessage
