import {useState, useEffect} from 'react'
import Message from '../components/message'
import messages from './messages.json'

const Messages = () => {
  
  const data = messages;
  console.log(data.messages);

  return (
    <div>
      <Message message={data.messages[0]} />
    </div>
  )
}

export default Messages
