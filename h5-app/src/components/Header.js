import React, {useState,useEffect}  from "react";
import {Icon,Menu,Dropdown} from "antd";
import {request} from "../utils/request";
import { withRouter } from 'react-router-dom';

const UserDropdown=()=>(
  <Menu>
    <Menu.Item>个人中心</Menu.Item>
    <Menu.Item>我的团队</Menu.Item>
    <Menu.Item>退出登录</Menu.Item>
  </Menu>
);

const Header = props => {
  const [user,setUser]=useState(undefined);
  useEffect(()=>{
    console.log("user changed:",user?user.name:"empty user");
  },[user]);

  const handleLogin=()=>{
    const params={
      username:"guest",
      password:"guest"
    }
    request.post("/test/user/login",undefined,params)
    .then(()=>{
      setUser({name:"guest"});
    }).catch(err=>{
      console.log(err);
    });
  };

  const handleGoLoginPage=()=>{
    console.log(props);
    props.history.push('/login');
  };

  return (
    <header className="qy-header">
      <div className="header-left">
        <Icon type="home" />
        <span>千叶日历</span>
      </div>
      <div className="header-right">
  {user===undefined?(<div className="header-user">
          <span className="mr-m" onClick={handleGoLoginPage}>登录</span>
          <span>注册</span>
      </div>):
      (<Dropdown overlay={UserDropdown}>
            <div className="header-user">
               <img src={process.env.PUBLIC_URL+'/lu.jpg'}/>
               <Icon type="down" style={{fontSize:"20px"}} />
               </div>
         </Dropdown>)}
      </div>
    </header>
  );
};

export default withRouter(Header);
