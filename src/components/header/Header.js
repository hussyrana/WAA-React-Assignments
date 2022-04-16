import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import authContext from "../../context/AuthProvider";
import "./Header.css";
function Header() {
  const {auth, setAuth} = useContext(authContext);
  const navigate = useNavigate();
  
  const handleLogout = ()=>{
    setAuth(null);
    navigate('/login');
  }
  return (
    <header className="header">
      {auth?.accessToken?
      <nav className="nav">
        <ul>
          <li>
            <Link className="link" to="/posts">DashBoard</Link>
          </li>
          <li>
            <Link className="link" to="/new-post">New Post</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>Logout</button>
      </nav>:null}
    </header>
  );
}

export default Header;
