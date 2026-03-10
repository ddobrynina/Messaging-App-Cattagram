import { NavLink } from 'react-router-dom';
import {FaArrowLeft, FaPhoneAlt, FaEllipsisV} from 'react-icons/fa';



const MessageHeader = ({contact, avatar}) => {
  return (
    <div className="grid grid-cols-5 justify-center items-center bg-[#57A8FF] text-white w-screen position-sticky p-2">
        <NavLink to='/' >
            <FaArrowLeft />
        </NavLink>
         <div><img className='rounded-[50%] h-12 w-12' src={avatar} alt="" /></div>
        <p>{contact}</p>
        <FaPhoneAlt />
        <FaEllipsisV className='justify-end'/>
    </div>
  )
}

export default MessageHeader
