/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate,  } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  // managing api loading state
  const [isLoading, setIsLoading] = useState(false);

  // hook to redirect user on login after registeration
  const navigate = useNavigate();

  // handling form submission
  const handleSubmit = async (e) => {
    // preventing form reload
    e.preventDefault();

    // fetching api
    setIsLoading(true);

    // getting connected with form data
    const formData = new FormData(e.target);

    // Accessing my from data to send it to the database
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      // now using axios making a post request to register user in the db
      const res = await axios.post("http://localhost:8700/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>
          <input
            type="text"
            required
            minLength={3}
            maxLength={20}
            name="username"
            placeholder="Username"
          />
          <input
            type="password"
            required
            minLength={3}
            maxLength={20}
            name="password"
            placeholder="Password"
          />
          {/* button is disabled when there is no api loading */}
          <button disabled={isLoading}>Login</button>
          <Link to="/register">Don't have an Account?</Link>
        </form>
      </div>

      {/* Image Container */}
      <div className="imgContainer">
        <img src="/bg.png" alt="background" />
      </div>
    </div>
  );
};

export default Login;
