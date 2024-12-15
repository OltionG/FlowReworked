import React,{Component} from "react";
import Logo from "../assets/logo.png";
import '../main.css'
import {BrowserRouter, Route, Routes, NavLink, useNavigate} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
function Home(props){
        return(<div>
            <main>   
              <Header />
            <section className='home-intro'>
              
            <img src={Logo} alt="Logo.png"/>
            <h1>A continuous stream of entertainment</h1>
            </section>
            <div style={{background: "gray", width: "100%", minHeight: "20px", opacity: "50%"}}></div>
            <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
              <div style={{width: "80%", background: "white", minHeight: "500px", margin: "5%", borderRadius: "13px", fontFamily: "Poppins"}}>
                <h1 style={{margin: "10% 0% 1%", fontWeight: "bold", fontSize: "35px"}}>Flow Entertainment</h1>
                <p style={{fontSize: "20px"}}>Let the relaxing flow guide you.</p>
              <hr style={{width: '90%', marginLeft: "5%", height: "2px"}} />
              <div className="columns">
          <div style={{borderRight: "1px solid gray", height: "auto", padding: "0 2%"}}>
            <h3 style={{margin: "10% 0% 1%", fontWeight: "bold", fontSize: "25px"}}>Who are we?</h3>
            <p style={{fontSize: "15px"}}>
              A small indie company, made by the dreams of some ambitious college students.
            </p>
          </div>
          <div style={{borderRight: "1px solid gray", height: "auto", padding: "0 2%"}}>
            <h3 style={{margin: "10% 0% 1%", fontWeight: "bold", fontSize: "25px"}}>What do we do?</h3>
            <p style={{fontSize: "15px"}}>
              Attemp to bring you video-games that provide you with the entertainment you rightfully deserve.
            </p>
          </div>
          <div style={{padding: "0 2%"}}>
            <h3 style={{margin: "10% 0% 1%", fontWeight: "bold", fontSize: "25px"}}>What's so special about you?</h3>
            <p style={{fontSize: "15px"}}>
              We try to work more with the community, and attempt to create something beautiful together.
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

export default Home;