import { Navigate,Outlet } from "react-router";
import {useSelector} from 'react-redux';

const ProtectedRoutesDashboard = () =>{
  const isLogged = useSelector(state => state.user)
  const token = localStorage.getItem("Token")
    return isLogged ? <Navigate to ="/dashboard" /> : <Outlet /> ;
};

export default ProtectedRoutesDashboard;