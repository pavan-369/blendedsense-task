import React from 'react'
import { PageHeader, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { logout } from '../../redux/Actions/action';


function Navbar() {
  const dispatch = useDispatch();
  let Navigate = useNavigate();
  function submitHandler1(e) {
    e.preventDefault();
    dispatch(logout());
    console.log("logout");
    Navigate("/");
}

  return (
    <div>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          title="Header"
          extra={[
            <Button key={1} type="primary" onClick={submitHandler1}>
              LogOut
            </Button>
          ]}>
        </PageHeader>
      </div>
    </div>
  )
}

export default Navbar;
