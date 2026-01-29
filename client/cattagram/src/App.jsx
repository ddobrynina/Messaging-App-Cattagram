import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import './App.css'

function App() {
  
   const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/profile' element={<Profile />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
