import React,{Component} from "react";
import '../main.css';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Youtube from "../assets/youtube.png";
import Gmail from "../assets/gmail.png";
import Icon from "../assets/icon.png";
import Logo from "../assets/logo.png";
import { BsYoutube } from "react-icons/bs";

export class Contacts extends Component{
    render(){
        return(<div>
            <main style={{textAlign: "center"}}>
            <Header />
            <section className={'home-intro-con'}>
              
            <img src={Logo} alt="Logo.png"/>
            <h1>Contacts</h1>
            </section>
            <div style={{background: "gray", width: "100%", minHeight: "20px", opacity: "50%"}}></div>
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{width: "80%", background: "white", minHeight: "500px", margin: "5%", borderRadius: "13px", fontFamily: "Poppins"}}>
                <h1 style={{margin: "10% 0% 1%", fontWeight: "bold", fontSize: "35px"}}>Contacts</h1>
                <p style={{fontSize: "20px"}}>Have a question/suggestion/complaint? Reach us out!</p>
              <hr style={{width: '90%', marginLeft: "5%", height: "2px"}} />
              <div className="img-columns">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d723.619706
        3631031!2d20.587913829234303!3d42.35909799869919!2m3!1f0!2f0!3f0!3m2!1i1024!2i7
        68!4f13.1!3m3!1m2!1s0x1353bb9687c9c2bb%3A0xe160f60dfcf07625!2sGani%20Paqarizi%2
        0Agim%20Kelmendi%2C%20Tafil%20Zyberaj%20n%C3%AB%20Fortes%C3%AB!5e1!3m2!1sen!2s!4v1640538063961!5m2!1sen!2s"
         width="30%" height="300px" style={{border: "0"}} allowFullScreen loading="lazy"></iframe>
         <div>
          <div style={{margin: "50% auto"}}>
           <img src={Icon}  style={{width: "20px", height: "20px"}} /> +383 49 570 576
          </div>
          <div>
            <img src={Icon} style={{width: "20px", height: "20px"}} /> +383 49 570 576
           </div>
         </div>
        </div>
        <div style={{textAlign: "center", marginTop: "10%"}}>
          <h2 style={{fontWeight: "bold"}}>Check us out!</h2>
          <br />
         <p>Reach us through one of the following methods!
         </p>
         </div>
        <div className="img-columns" style={{padding: "2%"}}>
         <div className="linkicon">
          <a target="_blank" href="https://www.facebook.com/Flow-Entertainment-100628881531882/?modal=admin_todo_tour%22%3E"><img className="ftimg" src={Facebook} height="100" width="100" alt="Facebook.png"/></a>
          <h3>Facebook</h3>
         </div>
         <div className="linkicon">
          <a target="_blank" href="https://www.instagram.com/flow.entertainment.games/"><img className="ftimg" src={Instagram} height="100" width="100" alt="Instagram.png"/></a>
          <h3>Instagram</h3>
         </div>
         <div className="linkicon">
          <a target="_blank" href="https://www.youtube.com/channel/UCk1H9Uwr8k82EouBomBjosA?view_as=subscriber%22%3E"><img className="ftimg" src={Youtube} height="100" width="100" alt="Youtube.png"/></a>
          <h3>YouTube</h3>
         </div>
         <div className="linkicon">
           <a target="_blank" href="https://www.google.com/gmail/"><img src={Gmail}  width="100px" height="100px"/></a>
           <h3>Gmail</h3>
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