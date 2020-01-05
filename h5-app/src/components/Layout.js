import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "antd";

const Layout = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 3) {
      import("../utils/print").then(module => {
        let print = module.default;
        print.alert();
      });
    }
  }, [count]);
  return (
    <React.Fragment>
      <Header text="头部"></Header>
      <section className="qy-body">
        section
        <Button type="primary" onClick={()=>setCount(count+1)}>You`ve clicked me {count} times</Button>
      </section>
      <Footer></Footer>
    </React.Fragment>
  );
};

export {Layout};
