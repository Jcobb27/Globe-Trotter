import React from "react";
import LoginBtn from "../LoginBtn";
import "./Hero.css";

const Hero = props => (
  <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
   <LoginBtn 
   style={{ opacity: props.image ? 1 : 0 }}
   onClick={props.handleBtnClick}
   data-value="login"
   />
  </div>
  
);

export default Hero;
