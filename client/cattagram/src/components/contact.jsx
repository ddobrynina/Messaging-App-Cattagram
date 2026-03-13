import {FaCheck, FaCheckDouble} from 'react-icons/fa';
import cat from '../assets/cat_avatar.jpg'

const Contact = ({contact, avatar, message}) => {

  const read = message.readStatus;
  const currentUser = message.currentUser;
  return (
    <>
        <div className='grid grid-cols-3 m-4 items-center'>
            <div className='row-span-2'>
                <div className='h-15 w-15'><img className='rounded-[50%]' src={avatar} alt="" /></div>
            </div>
            <div><b>{contact}</b></div>
            <div className='flex justify-end gap-1 items-center'>
                <div className='text-[#5FB350]'>{currentUser && (read? <FaCheckDouble /> : <FaCheck />) }</div>
                <div className='text-gray-400'>{message.time}</div>                           
            </div>
            <div className='col-span-2 text-gray-400'>
                <div className='text-gray-400'>{message.message}</div>
            </div>
        </div>
    </>
  )
}

export default Contact
