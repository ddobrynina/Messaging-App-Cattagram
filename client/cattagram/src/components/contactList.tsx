import React from 'react'
import Contact from './contact';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

type MessageProps = {
  message: string;
  time: string;
  readStatus: boolean;
  currentUser: boolean;
};

type ContactsProps = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: MessageProps;
};

const ContactList = ():React.JSX.Element => {

  const [contacts, setContacts] = useState<ContactsProps[]>([]);
  
     useEffect(():void => {
      const fetchContacts = async ():Promise<void> => {
        const apiUrl = 'http://localhost:3000/dashboard';
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
      { contacts.map((contact):React.JSX.Element =>
        <Link to={`/messages/${contact.id}`}>
            <Contact key={contact.id} contact={contact.name} avatar={contact.avatar} message={contact.lastMessage}/>
        </Link>
      )
    }
    </div>
  )
}

export default ContactList
