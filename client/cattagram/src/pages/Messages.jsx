import MessageHeader from '../components/messageHeader';
import Message from '../components/message';
import UserMessage from '../components/userMessage';
import messages from './messages.json';

const Messages = () => {
  
  const messagesArray = messages;

  return (
    <>
      <MessageHeader />
      <div className='bg-linear-120 from-[#3EB37C] to-[#D6FFE7] w-screen h-screen'>
      {
        messagesArray.messages.map((message) => 
          message.currentUser? 
            <UserMessage key={message.id} message={message} /> :
            <Message key={message.id} message={message} />
        )
      }
    </div>
    </>
  )
}

export default Messages
