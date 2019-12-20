import React, {useState}  from "react";
import {Button,Progress} from "antd";

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
      <h2>{props.text}<Button type="primary" onClick={handleClick}>Click me!</Button></h2>
      <div> <Progress percent={percent} status="active" /></div>
    </header>
  );
};

export default Header;
