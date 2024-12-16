import React, { useState, useEffect } from "react";
import '../main.css';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";

function Header(props) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const asyncFunction = async () => {
      const userData = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
      if (userData && userData.username) {
        setUserName(userData.username);
      } else {
        setUserName(""); 
      }
    };
    asyncFunction();
  }, []);

  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )?._id;
    if (id) {
      const data = await axios.get(`${logoutRoute}/${id}`);
      if (data.status === 200) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0.5% 3%", background: "white", position: "fixed", width: "100%", zIndex: "1", boxShadow: '0 1px 20px rgba(0 0 0.2)' }}>
      <NavLink to="../home" className="logo" aria-label="homepage">flow.</NavLink>
      <nav className="main_nav">
        <ul className="nav_list">
          <li className="nav_list-item"><NavLink to="../home" className="nav_link">Home</NavLink></li>
          <li className="nav_list-item"><NavLink to="../about" className="nav_link">About</NavLink></li>
          <li className="nav_list-item"><NavLink to="../chat" className="nav_link">Chat</NavLink></li>
          <li className="nav_list-item"><NavLink to="../video" className="nav_link">Voice Call</NavLink></li>
          <li className="nav_list-item"><NavLink to="../forum" className="nav_link">News</NavLink></li>
          <li className="nav_list-item"><NavLink to="../contacts" className="nav_link">Contacts</NavLink></li>
          <li className="nav_list-item"><NavLink to="../dashboard" className="nav_link">Dashboard</NavLink></li>
        </ul>
      </nav>
      <nav>
        <ul className="nav_list">
          <li className="nav_list-item">
            <NavLink to="../home" className="nav_link nav_link--btn">{userName || "Guest"}</NavLink>
          </li>
          <li className="nav_list-item">
            <NavLink to="../register" className="nav_link nav_link--btn nav_link--btn--highlight" onClick={handleClick}>Log Out</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
