import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return <React.Fragment>
      <Header text="头部"></Header>
      <section className="qy-body">section</section>
      <Footer></Footer>
  </React.Fragment>;
};

export default Layout;
