import { Navigate,Outlet } from "react-router";
import {useSelector} from 'react-redux';

const ProtectedRoutes = () =>{
    const isLogged = useSelector(state => state.user)
    let token = localStorage.getItem("Token")
    console.log("log",isLogged);
    return isLogged? <Outlet /> : <Navigate to ="/" />;
};

export default ProtectedRoutes;