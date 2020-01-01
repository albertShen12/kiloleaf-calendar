import React, {useState,useEffect}  from "react";
import {Icon,Menu,Dropdown} from "antd";

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

  return (
    <header className="qy-header">
      <div className="header-left">
        <Icon type="home" />
        <span>千叶日历</span>
      </div>
      <div className="header-right">
  {user===undefined?(<div className="header-user">
          <span className="mr-m" onClick={()=>setUser({name:"guest"})}>登录</span>
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

export default Header;
