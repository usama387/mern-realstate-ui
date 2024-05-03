import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  // managing api loading state
  const [isLoading, setIsLoading] = useState(false);

  // hook to redirect user on login after registeration
  const navigate = useNavigate();

  // handling form submit

  const handleSubmit = async (e) => {
    // preventing form reload
    e.preventDefault();

    // fetching the api
    setIsLoading(true);

    // getting connected with form data
    const formData = new FormData(e.target);

    // Accessing my from data to send it to the database
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      // now using axios making a post request to register user in the db
      const res = await axios.post("http://localhost:8700/api/auth/register", {
        username,
        email,
        password,
      });

      console.log(res);

      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          <Link to="/login">Already have an Account?</Link>
        </form>
      </div>

      <div className="imgContainer">
        <img src="/bg.png" alt="background-image" />
      </div>
    </div>
  );
};

export default Register;
