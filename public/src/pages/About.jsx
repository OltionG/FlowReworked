import React,{Component} from "react";
import '../main.css';
import Logo from "../assets/logo.png";
import Bardhi from "../assets/lorik.png";
import Lorik from "../assets/bardhi.jpeg";
import Olti from "../assets/Olti.jpg";
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

export class About extends Component{
    render(){
        return(<div>
            <main style={{background: "linear-gradient(-45deg, #23d5ab, #23a6d5, #163391, #e73c7e)",
     backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite"}}>
            <Header />
            <section className='home-intro-abt'>
              
            <img src={Logo} alt="Logo.png"/>
            <h1>About</h1>
            </section>
            <div style={{background: "gray", width: "100%", minHeight: "20px", opacity: "50%"}}></div>
            <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
              <div style={{width: "80%", background: "white", minHeight: "500px", margin: "5%", borderRadius: "13px", fontFamily: "Poppins",}}>
                <h1 style={{margin: "10% 0% 1%", fontWeight: "bold", fontSize: "35px"}}>About us</h1>
                <p style={{fontSize: "20px", padding: "0 4%"}}>The people working behind the scenes trying to make something you might enjoy. Learn a bit about their 
                personalities, roles, and the vital importance they all have to the company.</p>
              <hr style={{width: '90%', marginLeft: "5%", height: "2px"}} />
              <div className="img-columns" style={{margin: "3% 0 5%"}}>
              <div className="blackdiv" style={{padding: "4% 2%", maxWidth: "300px"}}>
            <img src={Bardhi} alt="bardhi.jpeg" width="250px" height="250px" style={{borderRadius: "100%", marginTop: "10%"}}/>
            <h2 style={{marginTop: "5%", fontWeight: "bold"}}>Lorik Popaj</h2>
          <h5 style={{fontWeight: "bold", fontSize: "15px"}}>CEO / Assistand Designer</h5>
          <hr className="blackhr" />
          <p> The more business oriented of the three, their childhood friend assists them by taking care of marketing, sales and PR management. He has a way 
          with words and people which makes him a wonderful asset to the team. A joy to be around, you are bound to have a few laughs whenever you get to
          see and hear him cracking a few jokes.
        </p>
          </div>
          <div className="whitediv" style={{padding: "4% 2%", maxWidth: "300px"}}>
            <img src={Olti} alt="Olti.jpg" width="250px" height="250px" style={{borderRadius: "100%", marginTop: "10%"}}/>
            <h2 style={{marginTop: "5%", fontWeight: "bold"}}>Oltion Gashi</h2>
          <h5 style={{fontWeight: "bold", fontSize: "15px"}}>Founder / CEO / Lead Designer</h5>
          <hr className="blackhr" />
          <p>Olti started following his career as a programmer at a young age. He has been working on a personal project for
          about 2 years now and he is excited to see the community reaction. He is the founder of the company and an essential
        part of it, inspiring everyone around him to do their best, and reminding them to have fun!
        </p>
          </div>
          <div className="blackdiv" style={{padding: "4% 2%", maxWidth: "300px"}}>
            <img src={Lorik} alt="lorik.png" width="250px" height="250px" style={{borderRadius: "100%", marginTop: "10%"}}/>
            <h2 style={{marginTop: "5%", fontWeight: "bold"}}>Fatbardh Fetoshi</h2>
          <h5 style={{fontWeight: "bold", fontSize: "15px"}}>Sales and Marketing/PR Management</h5>
          <hr className="blackhr" />
          <p>Lorik has been Olti's parter throughout his entire life. He started getting into programming about 2 years ago,
          and decided to also pursue his career with his friend. Although he may have only started recently, his determination
          and quick learning has helped the company plenty, and are looked up to by the entire staff.
        </p>
          </div>
          
       </div>
       </div>
            </div>
            <Footer />
            </main>
            </div>
        )
    }
}