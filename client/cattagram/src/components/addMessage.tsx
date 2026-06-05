import React from 'react';
import { RiSendPlaneFill } from "react-icons/ri";
import { useState } from 'react';
import { useParams } from 'react-router-dom';


type RouteParams = {
  id: string
}


 

const AddMessage = ( ):React.JSX.Element => {

  const { id } = useParams<RouteParams>();
  const [ newMessage, setNewMessage ] = useState<string>();


  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>):Promise<void> => {
    event.preventDefault();
    const message = newMessage;
    setNewMessage("");
     const res = await fetch(`http://localhost:3000/conversations/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newMessage: message }),
    });    
    
  };

  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <textarea name="newMessage" id="newMessage" className='rounded-xl border bg-white' value={newMessage} onChange={event => setNewMessage(event.target.value)}></textarea>
            <button type="submit"><RiSendPlaneFill /></button>
        </form>
    </div>
  )
}

export default AddMessage;