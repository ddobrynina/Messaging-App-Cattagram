import {FaCheck, FaCheckDouble} from 'react-icons/fa';
import cat from '../assets/cat_avatar.jpg'

const Contact = ({contact, message}) => {

  const read = message.readStatus;
  const currentUser = message.currentUser;
  return (
    <>
        <div className='grid grid-cols-3 border'>
            <div className='row-span-2'>
                <div><img className='rounded-[50%] h-15 w-15' src={cat} alt="" /></div>
            </div>
            <div><b>{contact}</b></div>
            <div>
                {currentUser && (read? <FaCheckDouble /> : <FaCheck />) }
                {message.time}                            
            </div>
            <div className='col-span-2'>
                {message.message}
            </div>
        </div>
    </>
  )
}

export default Contact
