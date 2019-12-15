import React from "react";
import {Button} from "antd";

const Header = props => {
  return (
    <header className="qy-header">
      <h2>{props.text}<Button type="primary">Click me!</Button></h2>
    </header>
  );
};

export default Header;
