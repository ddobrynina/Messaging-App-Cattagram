import Contact from '../components/contact';
import { Link } from 'react-router-dom'

const ContactList = ({contacts}) => {

  return (
    <div>
      { contacts.map((contact) =>
        <Link to={`/messages/+${contact.userID}`}>
            <Contact key={contact.userID} contact={contact.name} message={contact.messages[contact.messages.length-1]}/>
        </Link>
      )
    }
    </div>
  )
}

export default ContactList
