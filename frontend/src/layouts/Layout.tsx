import { Footer, Navbar } from "../components/shared";
import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <div className="py-10 w-full"></div>
      <Footer />
    </React.Fragment>
  );
};
