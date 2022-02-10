import React, { useState } from 'react';
import Navbar from './Navbar';
import {useSelector} from 'react-redux';

const EditDetails = () => {
    let data=useSelector(state => state.user);
    const [edits, setEdits] = useState({firstName:data.firstName, lastName:data.lastName, 
        number:data.profile.number, facebookUrl:data.profile.facebookUrl,
        slackId:data.profile.slackId,
        instagramUrl:data.profile.instagramUrl    
    })

    const changeHandler = e => {
        setEdits({...edits, [e.target.name] : e.target.value})
    }

  return<div> <Navbar/>
   <div className='edit'>
      <form className="editdetails">  
                <p className="text1">EDIT PROFILE</p>
                <label for="fname">First name: </label>
                <input className="editinput" 
                        type="text" 
                        name="firstName" required 
                        id="fname"  
                        onChange={changeHandler} 
                        value={edits.firstName} />  <br/>
                <label for="lname">Last name: </label>
                <input className="editinput" 
                        type="text" 
                        name="lastName" required 
                        id="lname"
                        onChange={changeHandler}   
                        value={edits.lastName} />  <br/>
                <label for="lname">Phone No: </label>
                <input className="editinput" 
                        pattern="[789][0-9]{2}-[0-9]{3}-[0-9]{4}"
                        name="number" required 
                        id="number"  
                        onChange={changeHandler} 
                        value={edits.number} />  <br/>
                <label for="lname">Facebook: </label>
                <input className="editinput" 
                        type="text"
                        name="facebookUrl" required 
                        id="facebookUrl"  
                        onChange={changeHandler} 
                        value={edits.facebookUrl} />  <br/>
                <label for="lname">Slack Id: </label>
                <input className="editinput" 
                        type="text"
                        name="slackId" required 
                        id="slackId"  
                        onChange={changeHandler} 
                        value={edits.slackId} />  <br/>
                <label for="lname">Instagram: </label>
                <input className="editinput" 
                        type="text"
                        name="instagramUrl" required 
                        id="instagramUrl"  
                        onChange={changeHandler} 
                        value={edits.instagramUrl} />  <br/>
                <button className="button" type="submit" >Edit</button>
            </form>
            </div>
  </div>;
};

export default EditDetails;
