import React from 'react'
import { useState, useEffect } from 'react';
import MessageHeader from '../components/messageHeader';
import ReceivedMessage from '../components/receivedMessage';
import SentMessage from '../components/sentMessage';
import { useParams} from 'react-router-dom'

type RouteParams = {
  id: string
}
type MessageProps = {
  id: string,
  user: string,
  currentUser:boolean,
  time: string,
  message: string,
  readStatus: boolean
};

type ContactProps = {
  name: string;
  id: string;
  avatar: string;
  messages: MessageProps[];
};

const Messages = ():React.JSX.Element => {

  const { id } = useParams<RouteParams>();
  const [contacts, setContacts] = useState<ContactProps>({name:"", id: "",avatar:"", messages: [] });
  
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
    <>
      <MessageHeader contact={contacts.name} avatar={contacts.avatar} contactId={contacts.id}/>
      <div className='bg-linear-120 from-[#3EB37C] to-[#D6FFE7] w-screen h-screen'>
      {
        contacts.messages.map((message) => 
          message.currentUser? 
            <SentMessage key={message.id} message={message} /> :
            <ReceivedMessage key={message.id} message={message} />
        )
      }
      </div>
    </>
  )
}

export default Messages
