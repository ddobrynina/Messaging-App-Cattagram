import React from 'react'

const Message = ({message}) => {
  return (
    <div>
      <p>{message.message}</p>
      <p>{message.time}</p>
    </div>
  )
}

export default Message
