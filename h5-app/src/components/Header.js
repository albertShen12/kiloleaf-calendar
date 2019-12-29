import React, {useState}  from "react";
import {Icon,Menu,Dropdown} from "antd";

const UserDropdown=()=>(
  <Menu>
    <Menu.Item>个人中心</Menu.Item>
    <Menu.Item>我的团队</Menu.Item>
    <Menu.Item>退出登录</Menu.Item>
  </Menu>
);

const Header = props => {
  const [percent,setPercent]=useState(70);
  const handleClick=()=>{
    setPercent(30);
    setTimeout(()=>{
      setPercent(70);
    },2000);
  };

  return (
    <header className="qy-header">
      <div className="header-left">
        <Icon type="home" />
        <span>千叶日历</span>
      </div>
      <div className="header-right">
         <Dropdown overlay={UserDropdown}>

            <div className="header-user">
               <img src={process.env.PUBLIC_URL+'/lu.jpg'}/>
               <Icon type="down" style={{fontSize:"20px"}} />
               </div>
         </Dropdown>
      </div>
    </header>
  );
};

export default Header;
