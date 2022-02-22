import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Contentbar from './Content';
import Profile from './Profile';
import {useSelector} from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from "../images/blendedsenselogin.svg";
import logoshort from "../images/blendedsenseloginshort.png";

import "./Dashboard.css";
import {
  SettingOutlined,
  FileImageOutlined,
  UserOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import React from 'react'



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const Dashboard =() => {
  const data = useSelector(state => state.user)

    // let Navigate = useNavigate();

    // function submitHandler1(e) {
    //     e.preventDefault();
    //     Navigate("/dashboard/profile");
    // }
    const onHandleCollapse = (collapsed)=> {
      console.log(collapsed);
      setCollapsed(collapsed);
    };
    const [collapsed, setCollapsed] = useState(false)


  return (
    <div>
    {/* <div className="Dashboard">
      
        <div className="welcome">
        <h3>welcome {useSelector(state => state.user.firstName)+" "+useSelector(state => state.user.lastName)} </h3>
        <button className='button' onClick={submitHandler1}>Profile</button>
        </div>
    </div> */}
    <Layout 
    style={{ minHeight: '100vh' }}
    >
        <Sider 
        icon={<FileImageOutlined />}
        width={256}
        trigger={<div className='layout-sider-trigger'>
        <LeftOutlined /><RightOutlined />
        </div>
      }
        className="sider"
        collapsible collapsed={collapsed} onCollapse={onHandleCollapse}
        >
          <div><img src={logo} width="180" height="80" className={collapsed?"sider-logo1":"sider-logo"}/></div>
          <div><img src={logoshort} width="40" height="40" className={collapsed?"sider-logo2":"sider-logo1"}/></div>
          <Menu defaultSelectedKeys={['1']} mode="inline" className='sider-menu'>
            <Menu.Item key="1" icon={<FileImageOutlined />}>
              Projects
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className='header' style={{ padding: 0 }} ><Navbar/></Header>
          <Content className='layout-content'>
            <div className="site-layout-background">
              {/* <Contentbar/> */}
              <Profile/>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default Dashboard;