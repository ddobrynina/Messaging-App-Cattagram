import React from 'react'
import {FaCheck, FaCheckDouble} from 'react-icons/fa'

type MessageProps = {
  message: string;
  time: string;
  readStatus: boolean;
}

type SentMessageProps = {
  message: MessageProps;
};
const SentMessage = ({message}:SentMessageProps):React.JSX.Element => {

  const read = message.readStatus;

  return (
    <div className='text-wrap m-1'>
        <div className='flex bg-[#DEFFE7] max-w-sm rounded-xl border ml-8 p-2 relative'>
            <div className='flex-4'>{message.message}</div>
            <div className='flex flex-1 text-[#5FB350] items-center gap-1 absolute right-2 bottom-1'>
                {message.time}
                {read? <FaCheckDouble /> : <FaCheck /> }
            </div>
        </div>
    </div>
  )
}

export default SentMessage
