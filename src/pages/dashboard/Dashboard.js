import react, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import {useDispatch, useSelector} from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from "../images/blendedsenselogin.svg";
import logoshort from "../images/blendedsenseloginshort.png";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import "./Dashboard.css";
import {
  SettingOutlined,
  FileImageOutlined,
  UserOutlined,
  LeftOutlined,
  RightOutlined,
  PictureOutlined,
} from '@ant-design/icons';
import React from 'react'
import { refresh } from '../../redux/Actions/action';



const { Header, Content, Footer, Sider } = Layout;


const Dashboard =() => {
  let data=useSelector(state => state.user); 
  const token = localStorage.getItem("Token")
  let dispatch = useDispatch();
// useEffect (()=>{
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info( "This page is reloaded" );
    dispatch(refresh(token));
  } else {
    console.info( "This page is not reloaded");
  }
// })   
//   useEffect = () =>{
//   if (data=null) {
//     dispatch(refresh(token));
//   }
// }


  let Navigate = useNavigate();
    const onHandleCollapse = (collapsed)=> {
      setCollapsed(collapsed);
    };
    const [collapsed, setCollapsed] = useState(false)

  return (
    <div>
    <Layout 
    className='dashboard-layout'
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
            {/* <Menu.Item key="1" icon={<FileImageOutlined />}>
              Projects
            </Menu.Item> */}
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/dashboard/profile">
              Profile
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />}>
              <Link to="/dashboard/settings">
              Settings
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PictureOutlined />}>
            <Link to="/dashboard/projects">
              Projects
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className='header' style={{ padding: 0 }} ><Navbar/></Header>
          <Content className='layout-content'>
            <div className="site-layout-background">
              <Outlet/>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default Dashboard;