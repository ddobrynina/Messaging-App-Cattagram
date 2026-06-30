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
          <div className='rounded-full border bg-white text-[15px] w-[350px] m-2 p-1 flex relative justify-center items-center'>
            <input name="newMessage" className="flex-3 border-none outline-hidden m-2" id="newMessage" type="text" value={newMessage} onChange={event => setNewMessage(event.target.value)}/>
            <button type="submit" className="text-[30px] flex-1"><RiSendPlaneFill className="bg-[#57A8FF] text-white rounded-[50%] p-1 m-1 ms-15" /></button>
          </div>
        </form>
    </div>
  )
}

export default AddMessage;