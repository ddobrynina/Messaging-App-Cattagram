import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import {FaArrowLeft, FaPhoneAlt, FaEllipsisV} from 'react-icons/fa';

type ContactProps = {
  contact: string;
  avatar: string;
  contactId: string;
};

const MessageHeader = ({contact, avatar, contactId}:ContactProps):React.JSX.Element => {
  return (
    <div className="grid grid-cols-5 justify-center items-center bg-[#57A8FF] text-white w-screen position-sticky p-2 relative">
        <NavLink to='/' >
            <FaArrowLeft />
        </NavLink>
         <div className='h-12 w-12'><img className='rounded-[50%]' src={avatar} alt="" /></div>
        <Link to={`/profile/${contactId}`}>{contact}</Link>
        <FaPhoneAlt />
        <FaEllipsisV className='absolute right-2'/>
    </div>
  )
}

export default MessageHeader
