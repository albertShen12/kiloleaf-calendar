import React from "react";
import { Form, Button,Input,Icon } from "antd";
import { request } from "src/utils/request";
import { withRouter } from "react-router-dom";
import storage from "good-storage";
import "src/styles/view-login.less";

let Login = props => {
  const handleLogin = () => {
    const params = {
      username: "guest",
      password: "guest"
    };
    request
      .post("/test/user/login", undefined, params)
      .then(res => {
        storage.set("user", res.data);
        props.history.push("/home");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="view-login">
      <Form className="app-login-form">
        <h3 className="text-center">千叶日历</h3>
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Button type="primary" onClick={handleLogin}>
          登录
        </Button>
      </Form>
    </div>
  );
};

Login = withRouter(Login);

export { Login };
