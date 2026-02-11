import Contact from '../components/contact';
import contacts from '../data/messages.json';
import { Link } from 'react-router-dom'

const ContactList = () => {

  const contactsArray = contacts.contacts;
  return (
    <div>
      { contactsArray.map((contact) =>
        <Link to={"/messages/"+contact.userID}>
            <Contact key={contact.userID} contact={contact.name} message={contact.messages[contact.messages.length-1]}/>
        </Link>
      )
    }
    </div>
  )
}

export default ContactList
