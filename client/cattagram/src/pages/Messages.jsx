import Message from '../components/message'
import messages from './messages.json'

const Messages = () => {
  
  const messagesArray = messages;
  
  return (
    <div className='bg-linear-120 from-[#3EB37C] to-[#D6FFE7] w-screen h-screen'>
      {
        messagesArray.messages.map((message) => 
          <Message key={message.id} message={message} />
        )
      }
    </div>
  )
}

export default Messages
