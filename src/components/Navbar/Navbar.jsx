import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  // managing appearance of menu useState hook
  const [menuOpen, setMenuOpen] = useState(false);

  // To get logged in user details and show it in navbar
  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      {/* Nav is the parent html tag contains two child divs */}
      {/* Left div contains logo and nav links */}
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>TheEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>

      {/* Right div contains auth buttons and menu icon visible on smaller devices */}
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="user" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign In</a>
            <a href="/register" className="register">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <div className={menuOpen ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
