import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Layout.scss";

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

export default Layout;
