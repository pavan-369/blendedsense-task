import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

const Forgot = ({setIsModalVisible}) => {
    const [forgot, setForgot] = useState({email:""})
  
  const changeHandler = e => {
      setForgot({...forgot, [e.target.name] : e.target.value})
  } 
  return <div>
      <Form>
      <p className="text1">RECOVER PASSWORD</p>
      <p className='text2'>Enter the email address associated with your account.</p>
      <Form.Item
        name="email"
        rules={[{type: 'email',
            message: 'The input is not valid E-mail!',},
          {required: true,
            message: 'Please input your E-mail!',},]}>
      <Input className="login-input" 
              type="email" 
              name="email"
              id="email" 
              onChange={changeHandler} 
              value={forgot.email} /></Form.Item>
        <Button className="forgot-cancel-button" type="default" htmlType='submit' >Cancel</Button>
      <Button className="forgot-submit-button" type="primary" htmlType='submit' >Send Reset Link</Button></Form>
  </div>;
};

export default Forgot;
