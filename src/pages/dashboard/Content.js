import React, { useState } from 'react';
import { Modal, Button, Form, Input, Divider, Switch ,Table} from 'antd';
import { Footer } from 'antd/lib/layout/layout';

const Content = () => {
  const { Column} = Table;

    const [credentials, setCredentials] = useState({currentPassword:"pavan", newPassword:""})

    const changeHandler = e => {
        setCredentials({...credentials, [e.target.name] : e.target.value})
      }

      const data = [
        {
          key: '1',
          notifications: <div className='content-row'><p className='nofication1'>Project Responses</p><p className='notication2'>Notify you when a creative accepts or declines a project</p></div> ,
          email: <Switch defaultChecked className='email-switch'  />,
          sms: <Switch  defaultChecked className='sms-switch' />,
        },
        {
          key: '2',
          notifications: <div><p className='nofication1'>Project Responses</p><p className='notication2'>Notify you when a creative accepts or declines a project</p></div> ,
          email: <Switch defaultChecked className='email-switch'  />,
          sms: <Switch  defaultChecked className='sms-switch' />,
        },
        {
          key: '3',
          notifications: <div><p className='nofication1'>Project Responses</p><p className='notication2'>Notify you when a creative accepts or declines a project</p></div> ,
          email: <Switch defaultChecked className='email-switch'  />,
          sms: <Switch  defaultChecked className='sms-switch' />,
        },
      ];

  return (
    <div className='content-bar'>
        <p className='password-heading'>Password</p>

        <Form layout="vertical" className="content-form" 
        // onFinish={submitHandler}
        >
        <Form.Item
               name="password"
               label="Current Password *"
               required={false}
               rules={[{ required: true, message: 'Please provide your password' }]}
             >
             <Input.Password className="content-passowrd-input" 
                    iconRender={visible => (visible=false )}
                     type="password" 
                     name="currentPassword"
                     id="pwd1"  
                     onChange={changeHandler} 
                     value={credentials.currentPassword} /></Form.Item>
        <Form.Item
                 label="New Password * "
                  name="New password"
                  required={false}
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    
                <Input.Password className="content-passowrd-input" 
                iconRender={visible => (visible=false )}
                        type="password" 
                        name="newPassword"
                        id="pwd2"  
                        onChange={changeHandler} 
                        value={credentials.newPassword} /></Form.Item>
        <Form.Item
                 name="confirm"
                 label="Confirm New Password *"
                 required={false}
                 dependencies={['password']}
                 hasFeedback
                 rules={[
                   {
                     required: true,
                     message: 'Please confirm your password!',
                   },
                   ({ getFieldValue }) => ({
                     validator(_, value) {
                       if (!value || getFieldValue('password') === value) {
                         return Promise.resolve();
                       }
                       return Promise.reject(new Error('The two passwords that you entered do not match!'));
                     },
                   }),
                 ]}
               >
                 <Input.Password
                 iconRender={visible => (visible =false )}
                 className="content-passowrd-input"/>
               </Form.Item>
               <Button type='primary' htmlType='submit' className='content-button'>Change Password</Button>
        </Form>
        <Table dataSource={data} className="content-table" >
            <Column title={<div>NOTIFICATION <br/><span className="table-row-sub"> Notify me when ...</span></div>} dataIndex="notifications" key="notifications" width={471}/>
            <Column title="Email" dataIndex="email" key="email" width={117.5}/>
            <Column title="SMS" dataIndex="sms" key="sms" width={117.5}/>
        </Table>
    </div>
  )
}

export default Content