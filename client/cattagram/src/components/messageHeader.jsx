import { NavLink } from 'react-router-dom';
import {FaArrowLeft, FaPhoneAlt, FaEllipsisV} from 'react-icons/fa';
import cat from '../assets/cat_avatar.jpg';


const MessageHeader = ({contact}) => {
  return (
    <div className="flex gap-4 justify-center items-center bg-[#57A8FF] text-white w-screen">
        <NavLink to='/' >
            <FaArrowLeft />
        </NavLink>
         <div><img className='rounded-[50%] h-15 w-15' src={cat} alt="" /></div>
        <p>{contact}</p>
        <FaPhoneAlt />
        <FaEllipsisV />
    </div>
  )
}

export default MessageHeader
