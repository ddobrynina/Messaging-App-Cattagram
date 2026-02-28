import Contact from '../components/contact';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ContactList = () => {

  const [contacts, setContacts] = useState([]);
  
     useEffect(() => {
      const fetchContacts = async () => {
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
      { contacts.map((contact) =>
        <Link to={`/messages/${contact.id}`}>
            <Contact key={contact.id} contact={contact.name} message={contact.lastMessage}/>
        </Link>
      )
    }
    </div>
  )
}

export default ContactList
