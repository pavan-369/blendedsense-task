import react, { useState } from 'react';
import Navbar from './Navbar';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EditOutlined ,CameraFilled,PhoneOutlined,MailOutlined,GlobalOutlined,CalendarOutlined} from '@ant-design/icons';
import "./Profile.css";
import { Col, Divider, Row ,Form ,Input, Button} from 'antd';
import { update } from '../../redux/Actions/action';

function Profile() {
    const { TextArea } = Input;
    let data=useSelector(state => state.user); 
    let token=useSelector(state=>state.token);
    let Navigate = useNavigate();
    let dispatch = useDispatch();

    const [edits, setEdits] = useState({
        agreements: [],
        businessTypeIds:data.businessTypeIds,
        id:data.profile.id,
        isDefaultContact:data.isDefaultContact,
        isTrainee:data.isTrainee,
        isTraine:data.profile.isTraine,
        firstName:data.firstName, 
        lastName:data.lastName, 
        email:data.email,
        number:data.profile.number,
        website:data.profile.website,
        facebookUrl:data.profile.facebookUrl,
        slackId:data.profile.slackId,
        instagramUrl:data.profile.instagramUrl,
        calendly:data.calendly,
        zip:data.address.zip,
        bio:data.bio
    })

    const [style, setStyle] = useState("profile");
    const [styleEdit, setStyleEdit] = useState("profile1");
    const [stylebio, setStylebio] = useState("profile-bio");
    const [stylebioEdit ,setStylebioEdit] = useState("profile1")

    const changeHandler = e => {
        setEdits({...edits, [e.target.name] : e.target.value})
    }
  
    function submitHandler(e) {
        e.preventDefault();
        setStyle("profile1");
        setStyleEdit("edit-profile")
    }
    function submitBioHandler(e){
        e.preventDefault();
        setStylebio("profile1");
        setStylebioEdit("profile-bio")
    }
    function cancelHandler(e){
        e.preventDefault();
        setStyle("profile");
        setStyleEdit("profile1")
    }
    function cancelBioHandler(e){
        e.preventDefault();
        setStylebio("profile-bio");
        setStylebioEdit("profile1")
    }
    function updateHandler(e){
        dispatch(update({edits,token}));
        setStyle("profile");
        setStyleEdit("profile1")
    }
    function updateBioHandler(e){
        dispatch(update({edits,token}));
        setStylebio("profile-bio");
        setStylebioEdit("profile1")
    }
    
        return (
           <div>
            <Row>
                <Col span={8}>
            <div className={style}>
            <div className='profile-edit'>
            <p className='profile-heading'>PROFILE</p><EditOutlined className='editprofile' onClick={submitHandler}/>
            </div>
            <div className='profile-pic'>
            <div className="profilepic">
                  <img className="profilepic__image" src={data.profilePic} width="96px" height="96px" alt="Profibild" />
                  <div className="profilepic__content">
                    <span className="profilepic__icon"><CameraFilled/></span>
                    <span className="profilepic__text">Update</span>
                  </div>
                </div>
                </div>
            <p className='profile-name'>{data.firstName+" "+data.lastName}</p>
            <p className='profile-contact'>Contact</p>
            <Divider className='profile-devider'/>
            <div className='profile-contact-data'>
            <div className='profile-phone'><img src='https://stage.blendedsense.com/img/phone-outline.5e83911b.svg' width={20} height={20} className="profile-phone-logo"></img><p >{data.profile.number}</p></div>
            <div className='profile-email'><img src='https://stage.blendedsense.com/img/email-outline.4dd966fe.svg' width={20} height={20} className="profile-email-logo"></img><p >{data.email}</p></div>
            <div className='profile-website'><img src='https://stage.blendedsense.com/img/globe-outline.0a5b3d48.svg' width={20} height={20} className="profile-website-logo"></img><p className='profile-website-data'>{data.profile.website}</p></div>
            <div className='profile-calender'><img src='https://stage.blendedsense.com/img/calendly.1dcb0984.svg' width={20} height={20} className="profile-calender-logo"></img><p>{data.calendly}</p></div>
            <div className='profile-location'><img src='https://stage.blendedsense.com/img/location-outline.de42c616.svg' width={20} height={20} className="profile-location-logo"></img><p>{data.address.zip}</p></div>
            </div>
            <p className='profile-segment'>Segment</p>
            <Divider className='profile-devider'/>
            <p className='profile-segment-data'>Technology</p>
            <p className='profile-social'>Social</p>
            <Divider className='profile-devider'/>
            <div className='profile-social-data'>
            <div className='profile-instagram'><img src='https://stage.blendedsense.com/img/instagram-outline.279983e7.svg' width={20} height={20} className="profile-instagram-logo"></img><a className='profile-instagram-url' href={data.profile.instagramUrl} >{data.profile.instagramUrl}</a></div>
            <div className='profile-facebook'><img src='https://stage.blendedsense.com/img/facebook-outline.9b5e3f76.svg' width={20} height={20} className="profile-facebook-logo"></img><a className='profile-facebook-url' href={data.profile.facebookUrl}>{data.profile.facebookUrl}</a></div>
            <div className='profile-slack'><img src='https://stage.blendedsense.com/img/slack-outline.83835bbe.svg' width={20} height={20} className="profile-slack-logo"></img><a className='profile-slack-url' href={data.profile.slackId} >{data.profile.slackId}</a></div>
            </div>
            </div>
            

            <Form className={styleEdit} 
            layout="vertical"
            onFinish={updateHandler}
            initialValues={{
                firstName: edits.firstName,
                lastName: edits.lastName,
                number: edits.number,
                email: edits.email,
                website: edits.website,
                calendly:edits.calendly,
                zip:edits.zip,
                instagramUrl:edits.instagramUrl,
                facebookUrl:edits.facebookUrl,
                slackId:edits.slackId
              }}>
            <div className='profile-edit'>
            <p className='profile-heading'>EDIT-PROFILE</p>
            <div className='editprofile'>
                <a className="profile-edit-cancel" onClick={cancelHandler}>Cancel</a>
                <Button className="profile-edit-save" htmlType='submit' >Save</Button>
                </div>
            </div>
            <div className='profile-pic'>
            <div className="profilepic">
                  <img className="profilepic__image" src={data.profilePic} width="96px" height="96px" alt="Profibild" />
                  <div className="profilepic__content">
                    <span className="profilepic__icon"><CameraFilled/></span>
                    <span className="profilepic__text">Update</span>
                  </div>
                </div>
                </div>
            <Form.Item
            className='profile-firstName'
            name="firstName"
            label="First Name"
            required={false}
            rules={[{ required: true, message: 'Please provide your First Name' }]}>
                <Input className="profile-firstName-input" 
                     type="text" 
                     name="firstName"
                     id="firstName"  
                     onChange={changeHandler} 
                     value={edits.firstName} />
            </Form.Item>
            <Form.Item
            className='profile-lastName'
            name="lastName"
            label="Last Name"
            required={false}
            rules={[{ required: true, message: 'Please provide your Last Name' }]}>
                <Input className="profile-lastName-input" 
                     type="text" 
                     name="lastName"
                     id="lastName"  
                     onChange={changeHandler} 
                     value={edits.lastName} />
            </Form.Item>
            <p className='profile-contact'>Contact</p>
            <Divider className='profile-devider'/>
            <div className='profile-contact-data'>
            
            <Row><Col className='profile-phone-logo-edit' span={2}><img src='https://stage.blendedsense.com/img/phone-outline.5e83911b.svg' width={20} height={20} className="profile-phone-logo"/></Col>
            <Col span={22}>
            <Form.Item
            className='profile-number'
            name="number"
            label="Phone Number"
            required={false}
            rules={[{ required: true, message: 'Please provide your Last Name' }]}>
                <Input className="profile-number-input" 
                     type="text" 
                     name="number"
                     id="number"  
                     onChange={changeHandler} 
                     value={edits.number} />
            </Form.Item></Col></Row>

            <Row><Col className='profile-email-logo-edit' span={2}><img src='https://stage.blendedsense.com/img/email-outline.4dd966fe.svg' width={20} height={20} className="profile-email-logo"/></Col>
            <Col span={22}>
            <Form.Item
            className='profile-edit-email'
            name="email"
            label="Email"
            required={false}
            rules={[{ required: true, message: 'Please provide your Last Name' }]}>
                <Input className="profile-email-input" 
                     type="email" 
                     name="email"
                     id="email"  
                     onChange={changeHandler} 
                     value={edits.email} />
            </Form.Item></Col></Row>

            <Row><Col className='profile-website-logo-edit' span={2}><img src='https://stage.blendedsense.com/img/globe-outline.0a5b3d48.svg' width={20} height={20} className="profile-website-logo"/></Col>
            <Col span={22}>
            <Form.Item
            className='profile-edit-website'
            name="website"
            label="Website"
            required={false}
            rules={[{ required: true, message: 'Please provide your Last Name' }]}>
                <Input className="profile-website-input" 
                     type="website" 
                     name="website"  
                     onChange={changeHandler} 
                     value={edits.website} />
            </Form.Item></Col></Row>

            <Row><Col className='profile-calendly-logo-edit' span={2}><img src='https://stage.blendedsense.com/img/calendly.1dcb0984.svg' width={20} height={20} className="profile-calendly-logo"/></Col>
            <Col span={22}>
            <Form.Item
            className='profile-edit-calendly'
            name="calendly"
            label="calendly"
            required={false}
            rules={[{ required: true, message: 'Please provide your Last Name' }]}>
                <Input className="profile-calendly-input" 
                     type="calendly" 
                     name="calendly"  
                     onChange={changeHandler} 
                     value={edits.calendly} />
            </Form.Item></Col></Row>

            <Row><Col className='profile-location-logo-edit' span={2}><img src='https://stage.blendedsense.com/img/location-outline.de42c616.svg' width={20} height={20} className="profile-location-logo"/></Col>
            <Col span={22}>
            <Form.Item
            className='profile-edit-location'
            name="zip"
            label="location"
            required={false}
            rules={[{ required: true, message: 'Please provide your Last Name' }]}>
                <Input className="profile-location-input" 
                     type="location" 
                     name="zip"  
                     onChange={changeHandler} 
                     value={edits.zip} />
            </Form.Item></Col></Row>

            </div>
            
            <p className='profile-social'>Social</p>
            <Divider className='profile-devider'/>
            <div className='profile-social-data'>

            <Row><Col className='profile-instagram-logo-edit' span={2}><img src='https://stage.blendedsense.com/img/instagram-outline.279983e7.svg' width={20} height={20} className="profile-instagram-logo"/></Col>
            <Col span={22}>
            <Form.Item
            className='profile-edit-instagram'
            name="instagramUrl"
            label="instagram"
            required={false}
            rules={[{ required: true, message: 'Please provide your Last Name' }]}>
                <Input className="profile-instagram-input" 
                     type="instagram" 
                     name="instagramUrl"  
                     onChange={changeHandler} 
                     value={edits.instagramUrl} />
            </Form.Item></Col></Row>

            <Row><Col className='profile-facebook-logo-edit' span={2}><img src='https://stage.blendedsense.com/img/facebook-outline.9b5e3f76.svg' width={20} height={20} className="profile-facebook-logo"/></Col>
            <Col span={22}>
            <Form.Item
            className='profile-edit-facebook'
            name="facebookUrl"
            label="facebook"
            required={false}
            rules={[{ required: true, message: 'Please provide your Last Name' }]}>
                <Input className="profile-facebook-input" 
                     type="facebook" 
                     name="facebookUrl"  
                     onChange={changeHandler} 
                     value={edits.facebookUrl} />
            </Form.Item></Col></Row>

            <Row><Col className='profile-slack-logo-edit' span={2}><img src='https://stage.blendedsense.com/img/slack-outline.83835bbe.svg' width={20} height={20} className="profile-slack-logo"/></Col>
            <Col span={22}>
            <Form.Item
            className='profile-edit-slack'
            name="slackId"
            label="slack"
            required={false}
            rules={[{ required: true, message: 'Please provide your Last Name' }]}>
                <Input className="profile-slack-input" 
                     type="slack" 
                     name="slackId"  
                     onChange={changeHandler} 
                     value={edits.slack} />
            </Form.Item></Col></Row>
            </div>
            </Form>
            </Col>

            <Col span={16}>
            <div className={stylebio}>
            <div className='profile-edit'>
            <p className='profile-heading'>BIO</p><EditOutlined className='editprofile' onClick={submitBioHandler}/>
            </div>
                <p className='profile-bio-subheading'>Write a little bit about yourself here for others to see.</p>
                <p className='profile-bio-description'>{data.bio}</p>
            </div>

            <Form 
            onFinish={updateBioHandler}
            initialValues={{
                bio:edits.bio
              }}
            className={stylebioEdit}>
            <div className='profile-edit'>
            <p className='profile-heading'>EDIT BIO</p>     
            <div className='editprofile' >       
            <a className="profile-edit-cancel" onClick={cancelBioHandler}>Cancel</a>
                <Button className="profile-edit-save" htmlType='submit' >Save</Button>
            </div></div> 

            <p className='profile-bio-subheading'>Write a little bit about yourself here for others to see.</p>
            <Form.Item
            className='profile-edit-sbio'
            name="bio"
            required={false}
            rules={[{ required: true, message: 'Please provide your Last Name' }]}>
                <TextArea rows={3} className="profile-bio-input" 
                     type="text" 
                     name="bio"  
                     onChange={changeHandler} 
                     value={edits.bio} />
            </Form.Item>
            </Form>

            <div className='profile-ha'>
                <p className='profile-ha-heading'>HANDBOOKS & AGREEMENTS</p>
                <p className='profile-ha-content'>You do not have any agreements at this time</p>
            </div></Col>
            </Row>
            </div>
         );
        }
export default Profile;