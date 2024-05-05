/* eslint-disable no-unused-vars */
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Layout.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Layout = () => {
  return (
    <div className="layout">
      <div className="Navbar">
        {/* First component */}
        <Navbar />
      </div>

      <div className="content">
        {/* First route */}
        <Outlet />
      </div>
    </div>
  );
};

const RequireAuth = () => {

  // accessing my current user because this a protected layout
  const { currentUser } = useContext(AuthContext);

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="layout">
      <div className="Navbar">
        {/* First component */}
        <Navbar />
      </div>

      <div className="content">
        {/* First route */}
        <Outlet />
      </div>
    </div>
  );
};

export { Layout, RequireAuth };
