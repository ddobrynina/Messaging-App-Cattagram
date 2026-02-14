import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Messages from './pages/Messages';
import './App.css'

function App() {

  const [contacts, setContacts] = useState([]);

   useEffect(() => {
    const fetchContacts = async () => {
      const apiUrl = 'http://localhost:3000/contacts';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setContacts(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } 
    };

    fetchContacts();
  }, []);
  
   const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Dashboard contacts={contacts}/>}/>
        <Route path='/profile' element={<Profile />} />
        <Route path='/messages/:id' element={<Messages contacts={contacts}/>} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
