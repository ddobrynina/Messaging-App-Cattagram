import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Contact from '../components/contact';
import messages from './messages.json';

const Dashboard = () => {
  const messagesArray = messages;
  const contactName = "Scott";
  
  return (
    <>
      <Header />
      <Link to="/messages">
        <Contact contact={contactName} message={messagesArray.messages[messagesArray.messages.length-1]}/>
      </Link>
    </>
  )
}

export default Dashboard
