import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Protected = () => {
  const {user} = useContext(AuthContext);

  if (user) 
  return <Outlet />
  
  return <Navigate to='/login' />
}

export default Protected