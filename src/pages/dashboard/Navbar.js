import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import { logout } from '../../redux/Actions/action';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";



function Navbar() {
  const data = useSelector(state => state.user)
  const dispatch = useDispatch();
  let Navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    dispatch(logout());
    console.log("logout");
    Navigate("/");
    localStorage.clear();
}

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">
      <img src={data.profilePic} className='header-logo' alt='linkdin logo'width="50px" height="50px"></img>
      {data.firstName+" "+data.lastName}
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/dashboard/profile">
      <a>Edit profile</a></Link>
    </Menu.Item>
    <Menu.Item key="2">
      <a onClick={submitHandler}>Log out</a>
    </Menu.Item>
  </Menu>
);

  return (
    <div>
      <div className='header-title'><h2>Dashboard</h2></div>
      <div className='header-dropdown'>
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <img src={data.profilePic} className='header-logo' alt='linkdin logo'width="50px" height="50px"></img>
            <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

export default Navbar;
