import {FaCheck, FaCheckDouble} from 'react-icons/fa'

const UserMessage = ({message}) => {

  const read = message.readStatus;

  return (
    <div className='text-wrap m-1'>
        <div className='flex bg-[#DEFFE7] max-w-sm rounded-xl border ml-8 p-1'>
            <div className='flex-4'>{message.message}</div>
            <div className='flex-1 text-[#5FB350]'>
                {message.time}
                {read? <FaCheckDouble /> : <FaCheck /> }
            </div>
        </div>
    </div>
  )
}

export default UserMessage
