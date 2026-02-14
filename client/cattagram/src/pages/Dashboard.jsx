import Header from '../components/header';
import ContactList from '../components/contactList';


const Dashboard = ({contacts}) => {
  
  return (
    <>
      <Header />
      <ContactList contacts={contacts}/>
    </>
  )
}

export default Dashboard
