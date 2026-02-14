import MessageHeader from '../components/messageHeader';
import ReceivedMessage from '../components/receivedMessage';
import SentMessage from '../components/sentMessage';
import { useParams } from 'react-router-dom'

const Messages = ({contacts}) => {
  
  const params = useParams();
  const userId = parseInt(params.id);
  const contact = contacts[userId-1].name;
  const messagesArray = contacts[userId-1].messages;

  return (
    <>
      <MessageHeader contact={contact}/>
      <div className='bg-linear-120 from-[#3EB37C] to-[#D6FFE7] w-screen h-screen'>
      {
        messagesArray.map((message) => 
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
