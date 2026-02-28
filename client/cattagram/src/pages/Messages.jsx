import { useState, useEffect } from 'react';
import MessageHeader from '../components/messageHeader';
import ReceivedMessage from '../components/receivedMessage';
import SentMessage from '../components/sentMessage';
import { useParams } from 'react-router-dom'

const Messages = () => {

  const params = useParams();
  const userId = parseInt(params.id);
  const [contacts, setContacts] = useState({name:"", id: "", messages: [] });
  
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
    <>
      <MessageHeader contact={contacts.name}/>
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
