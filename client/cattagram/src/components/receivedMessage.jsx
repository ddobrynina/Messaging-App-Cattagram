
const ReceivedMessage = ({message}) => {
  
  return (
    <div className='text-wrap m-1'>
      <div className='flex bg-white max-w-sm rounded-xl border p-2 relative'>
        <div className='flex-4'>{message.message}</div>
        <div className='flex-1 text-gray-400 absolute bottom-1 right-2'>{message.time}</div>
      </div>
    </div>
  )
}

export default ReceivedMessage
