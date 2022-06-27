import React from 'react'
import "./about.css";
import Logo from "../../assets/Union.png"
import LogoName from "../../assets/Oasis..png"
import Comma from "../../assets/comma.png";
import {MdVerified} from "react-icons/md";
import Vector1 from "../../assets/Vector 1.png";
import Vector2 from "../../assets/Vector (1).png";
import Group from "../../assets/Group.png";

const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='textContainer'>
<div className='logo'><img src={Logo} alt="logo"/><img alt="logo"src={LogoName}/></div>
<div className='group'>
<img src={Group} alt="group"/>
</div>
<div className='aboutText'>
<span><img src={Comma} alt="comma"/></span>
  <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. </p>
  <div className='text'>
    <p>Vicent Obi</p><span><MdVerified/></span>
  </div>
  <div className='vectorone'>
  <img src={Vector1} alt="vectorone"/></div>
</div>
      </div>
      <img className='vectortwo' src={Vector2} alt="vector2"/>

    </div>
  )
}

export default About