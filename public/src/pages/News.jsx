import React,{Component, useState, useEffect} from "react";
import '../main.css'
import axios from 'axios';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../assets/logo.png";

export default function NewsForum(props){

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your Node.js server
    axios.get('http://localhost:5001/api/mssql/data') // Replace with your server's URL
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

        return(<div style={{textAlign: "center"}}>
            <main>
            <Header />
            <section className='home-intro-lib'>
              
            <img src={Logo} alt="Logo.png"/>
            <h1>News</h1>
            </section>
            <div style={{background: "gray", width: "100%", minHeight: "20px", opacity: "50%"}}></div>
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{width: "80%", background: "white", minHeight: "500px", margin: "5%", borderRadius: "13px", fontFamily: "Poppins"}}>
                <h1 style={{margin: "10% 0% 1%", fontWeight: "bold", fontSize: "35px"}}>Our News Collection</h1>
                <p style={{fontSize: "20px"}}>Browse through our latest article for anything that catches your eye!</p>
              <hr style={{width: '90%', marginLeft: "5%", height: "2px"}} />
              <div className="img-columns">
                {data.map((item) =>(
                <div className="whitediv" style={{width: '500px'}}>
                  <img style={{width: '250px', height: '300px'}} src={`http://localhost:5001/uploads/${item.NewsIcon}`}alt="News Icon"/>
                  <h1>{item.NewsTitle}</h1>
                  <h4>{item.NewsAuthor}</h4>
                  <p>{item.NewsDesc}</p>
                  <p>{item.PublishDate}</p>
                </div>
                ))}
       </div>
       </div>
            </div>
            <Footer />
            </main>
            </div>
        )
    }