import { Navigate,Outlet } from "react-router";
import {useSelector} from 'react-redux';

const ProtectedRoutes1 = () =>{
  const isLogged = useSelector(state => state.user)
  let token = localStorage.getItem("Token")

    return isLogged ? <Navigate to ="/dashboard" /> : <Outlet /> ;
};

export default ProtectedRoutes1;