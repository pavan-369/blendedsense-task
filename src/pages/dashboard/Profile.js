import react, { useState } from 'react';
import Navbar from './Navbar';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Profile() {
    let data=useSelector(state => state.user);
    let Navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        Navigate("/dashboard/profile/edit");
    }
    
        return (
            <div> <Navbar/>
        <div className="Dashboard">
           
            <div className="welcome">
            <div className='editprofile' onClick={submitHandler}>
            <img src="https://png.pngtree.com/png-vector/20190307/ourmid/pngtree-vector-edit-profile-icon-png-image_762931.jpg" alt='edit image' width="20px" height="20px" />
            </div>
            <img src={data.profilePic} alt='Profile Pic' title='Profile picture' width="150px" height="150px" />

            <h3>Name: {data.firstName+" "+data.lastName} </h3>
            <h3>Email Id: {data.email} </h3>
            <div className='address'>
                <div className='address-head'>
                    <h3>Address:</h3>
                </div>
                <div className='address-body'>
                    <h3>zipcode - {data.address.zip}</h3>
                    <h3>city Name - {data.address.city}</h3>
                    <h3>state Name - {data.address.state}</h3>
                    <h3>country - {data.address.country}</h3>
                </div>
            
            <div className='contact'><h3>Contact: {data.profile.number}</h3></div><br/>
            <div className='icons'>
            <div className='facebook'><a href={data.profile.facebookUrl}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/384px-Facebook_icon.svg.png' alt='linkdin logo'width="40px" height="40px"></img></a></div>
            <div className='slack'><a href={data.profile.slackId}><img src='https://images.prismic.io/smarttask/1c150a8e-9f13-420e-8b0f-e6365219250f_slack.png?auto=compress,format' alt='slack logo'width="40px" height="40px"></img></a></div>
            <div className='instagram'><a href={data.profile.instagramUrl}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png' alt='slack logo'width="40px" height="40px"></img></a></div>
            </div>
            </div>
            </div>
        </div>
        </div>
         );
        }
export default Profile;
