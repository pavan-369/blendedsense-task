import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import {useSelector} from 'react-redux';


function Dashboard () {
    let Navigate = useNavigate();

    function submitHandler1(e) {
        e.preventDefault();
        Navigate("/dashboard/profile");
    }

  return (
    <div>
    <Navbar/>
    <div className="Dashboard">
      
        <div className="welcome">
        <h3>welcome {useSelector(state => state.user.firstName)+" "+useSelector(state => state.user.lastName)} </h3>
        <button className='button' onClick={submitHandler1}>Profile</button>
        </div>
    </div>
    </div>
  );
}
export default Dashboard;