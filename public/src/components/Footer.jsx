import React,{Component} from "react";
import '../main.css';
import YouTube from "../assets/youtube.png"
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import {BrowserRouter, Route, Routes, NavLink, useNavigate} from 'react-router-dom';

function Footer(props){
return(
  
<div className="footer">
        <div className="home-about-foot">
          <div className="columns" style={{flexDirection: "column"}}>
            <div style={{margin: "2%", display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
            <NavLink to="../home" className="logo" aria-label="homepage">flow.</NavLink>
              <ul className="nav_list" style={{marginTop: "-5px"}}>
            <li className="nav_list-item"><NavLink to="../about" className="nav_link">About</NavLink></li>
            <li className="nav_list-item"><NavLink to="../chat" className="nav_link">Chat</NavLink></li>
            <li className="nav_list-item"><NavLink to="../voice" className="nav_link">Voice Call</NavLink></li>
            <li className="nav_list-item"><NavLink to="../news" className="nav_link">News</NavLink></li>
            <li className="nav_list-item"><NavLink to="../contacts" className="nav_link">Contacts</NavLink></li>
            <li className="nav_list-item"><NavLink to="../dashboard" className="nav_link">Dashboard</NavLink></li>
          
              </ul>
                <a target="_blank" href="https://www.facebook.com/Flow-Entertainment-100628881531882/?modal=admin_todo_tour%22%3E"><img className="ftimg" src={Facebook} height="30" width="30" alt="Facebook.png" /></a>
                <a target="_blank" href="https://www.instagram.com/flow.entertainment.games/%22%3E"><img className="ftimg" src={Instagram} height="30" width="30" alt="Instagram.png" /></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCk1H9Uwr8k82EouBomBjosA?view_as=subscriber%22%3E"><img src={YouTube} height="30" width="30" alt="Youtube.png" /></a>
            </div>
            <hr />
            <div style={{margin: "2%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
            <div style={{fontSize: "11px"}}>
              <h2>Our Company</h2>
              <p>Flow Entertainment aims to create entertainment for you, from you, and with you.</p>
            </div>
            <hr style={{height: "50px", margin: "2%"}} />
            <div style={{fontSize: "10px", opacity: "80%"}}>© 2021 Flow Entertainment, Inc, All Rights Reserved.</div>
          </div>
           </div>
          </div>
        </div>

    )
}

export default Footer;