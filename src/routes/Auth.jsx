import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  const {user} = useContext(AuthContext);

  if (user) 
    return <Navigate to="/" />;
  
  return <Outlet />;
}

export default Auth