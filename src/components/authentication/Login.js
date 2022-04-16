import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const loginFormRef = useRef();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLoginButton = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/authenticate", {
        email: loginFormRef.current["email"].value,
        password: loginFormRef.current["password"].value,
      })
      .then((res) => {
        setAuth(res.data);
        navigate("/posts");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form" ref={loginFormRef}>
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" type="password" />
          <button type="submit" onClick={handleLoginButton}>
            login
          </button>
          <p className="message">
            Not registered? <a href="/login">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
