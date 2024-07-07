import React from "react";
import NavScrollExample from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <div>
        <NavScrollExample />
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
      
    </>
  );
};

export default Layout;
