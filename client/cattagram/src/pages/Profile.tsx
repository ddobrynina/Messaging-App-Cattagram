import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import {FaArrowLeft, FaEllipsisV, FaRegBell, FaPhoneAlt} from 'react-icons/fa';
import { BsCameraVideo } from 'react-icons/bs';
import { TbMessageCircle } from "react-icons/tb";

type RouteParams = {
  id: string
}

type ProfileProps = {
  name: string;
  avatar: string;
};

const Profile = ():React.JSX.Element => {

  const { id } = useParams<RouteParams>();
  const [contacts, setContacts] = useState<ProfileProps>({name:"", avatar: ""});
  
     useEffect(():void => {
      const fetchContacts = async ():Promise<void> => {
        const apiUrl = `http://localhost:3000/conversations/${id}`;
        try {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setContacts(data);
        } catch (error) {
          console.log('Error fetching data', error);
        } 
      };
  
      fetchContacts();
    }, []);

  return (
    <div className='bg-gray-200'>
      <div className='flex justify-between p-2'>
        <NavLink to={`/messages/${id}`}>
          <FaArrowLeft />
        </NavLink>
        <FaEllipsisV/>
      </div>
      <div className='h-25 w-25 m-auto'><img className='rounded-[50%]' src={contacts.avatar} alt="" /></div>
      <div className='text-[20px] text-center'><b>{contacts.name}</b></div>
      <div className='flex justify-center text-[20px] m-2'>
        <button className='bg-white rounded-xl p-2 m-1 w-17'><TbMessageCircle className='m-auto text-[25px]'/> <p className='text-[10px]'>Message</p></button>
        <button className='bg-white rounded-xl p-2 m-1 w-17'><FaRegBell className='m-auto text-[25px]' /><p className='text-[10px]'>Mute</p></button>
        <button className='bg-white rounded-xl p-2 m-1 w-17'><FaPhoneAlt className='m-auto' /><p className='text-[10px]'>Call</p></button>
        <button className='bg-white rounded-xl p-2 m-1 w-17'><BsCameraVideo className='m-auto text-[25px]' /><p className='text-[10px]'>Video</p></button>
      </div>
    </div>
  )
}

export default Profile
