import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import { Modal, Button, Form, Input, Divider } from 'antd';
import logo from '../images/blendedsenselogin.svg' ;
import "antd/dist/antd.css";
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import img1 from '../images/blendedsense1.svg';
import img2 from '../images/blendedsense2.svg';
import img3 from '../images/blendedsense3.svg';
import img4 from '../images/blendedsense4.svg'
import Forgot from './Forgot';
import { login } from '../../redux/Actions/action';
import './App1.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Login = () => {

    let Navigate = useNavigate();
    const data = useSelector(state => state.user)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {setIsModalVisible(true);};
    const handleCancel = () => {setIsModalVisible(false);};
    const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({email:"", password:""})

  const changeHandler = e => {
    setCredentials({...credentials, [e.target.name] : e.target.value})
  }

    async function submitHandler(e) {
      await dispatch(login(credentials));
          if(data!== null){
            Navigate("/dashboard");   
          }
        }

  return <div className={isModalVisible ? 'login1': "login"}>
      <img className='logo1' src={img1}></img>
      <img className='logo2' src={img2}></img>
      <img className='logo3' src={img3} ></img>
      <img className='logo4' src={img4} ></img>
      <Divider className='divider'/>
      <Form layout="vertical" className="login-form" onFinish={submitHandler}>
          <img src={logo} className="logoblendedsense"/>
          <p className='loginheading'>LOGIN</p>  
        <div className='form-input'>
        <Form.Item
               name="email"
               rules={[{type: 'email',
                   message: 'The input is not valid E-mail!',},
                 {required: true,
                   message: 'Please provide your email address',},]}>
             <Input className="login-input" 
                     type="email" 
                     placeholder="Email Address" 
                     name="email"
                     id="email" 
                     onChange={changeHandler} 
                     value={credentials.email} /></Form.Item>
             <Form.Item
               name="password"
               rules={[{ required: true, message: 'Please provide your password' }]}
             >
             <Input.Password className="login-input" 
                    iconRender={visible => (visible ?<EyeInvisibleFilled />  :<EyeFilled /> )}
                     type="password" 
                     placeholder="Password" 
                     name="password"
                     id="pwd"  
                     onChange={changeHandler} 
                     value={credentials.password} /></Form.Item>     </div>   
            <Button className="login-button" type="primary" htmlType="submit">Login with Email</Button>
            <div className="forgotten" onClick={showModal} ><a className='login-forgot' >Forgot Password?</a></div>
            <div className="signup"><p>Need an accout?<a className='login-signup'> Sign Up</a></p></div>

        </Form>
        <ToastContainer autoClose={2000} />
        <Modal visible={isModalVisible} onCancel={handleCancel}
        className="forgot-form"
  title=""
  style={{ top: 240 }}
  header={null}
  footer={null}>
<Forgot
setIsModalVisible={setIsModalVisible}/>
      </Modal>

  </div>;
};
export default Login;
