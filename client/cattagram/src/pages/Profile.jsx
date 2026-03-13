import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import {FaArrowLeft, FaEllipsisV} from 'react-icons/fa';

const Profile = () => {

  const params = useParams();
  const userId = parseInt(params.id);
  const [contacts, setContacts] = useState({name:"", id: ""});
  
     useEffect(() => {
      const fetchContacts = async () => {
        const apiUrl = `http://localhost:3000/conversations/${userId}`;
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
    <div>
      <div className='flex justify-between p-2'>
        <NavLink to={`/messages/${userId}`}>
          <FaArrowLeft />
        </NavLink>
        <FaEllipsisV/>
      </div>
      <div className='h-25 w-25 m-auto'><img className='rounded-[50%]' src={contacts.avatar} alt="" /></div>
      <div className='text-[20px] text-center'><b>{contacts.name}</b></div>
    </div>
  )
}

export default Profile
