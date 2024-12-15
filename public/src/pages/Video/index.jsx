import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../../components/Logout";

const Video = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  

  return (
    <div
      style={{
        
        background: "linear-gradient(-45deg, #1A315E, #2C529E, #3766C4, #ee7752)",
        backgroundsize: "1000% 1000%",
        animation: "gradient 10s ease infinite",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", 
      }}
    >
      <Logout / >
      <br></br>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Room Code"
        style={{ marginBottom: "10px",
                height: "50px",
                backgroundcolor: "transparent",
                padding: "1rem",
                border: "0.1rem solid #0E6AB5",
                borderradius: "0.4rem",
                color: "black",
                width: "300px",
                textAlign: "center",
                borderRadius: "12px",
                fontsize: "30px"
                
    }} 
      />
      <button onClick={handleJoinRoom} style={{ backgroundcolor: "#0E6AB5;",
    color: "black",
    padding: "1rem 2rem",
    border: "NamedNodeMap",
    fontweight: "bold",
    cursor: "pointer",
    borderradius: "0.4rem",
    fontsize: "1rem",
    texttransform: "uppercase",
    borderRadius: "10px",
    
  
    }} >Join</button>
    </div>
  );
};

export default Video;
