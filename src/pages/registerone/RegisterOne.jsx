import React from 'react';
import { useNavigate}  from 'react-router-dom';
import "./registerone.css";
import About from "../../components/about/About";
import Polygon1 from "../../assets/Polygon 1.png";
 import Polygon2 from "../../assets/Polygon 2.png";
import {BsArrowRightShort} from "react-icons/bs";
 import {BiUser} from "react-icons/bi";
import {FiBriefcase} from "react-icons/fi"


const RegisterOne = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate("/pagetwo");
  }
  return (
    <div className='container'>
    <div className='mainContainer'>
    <>
      <About/>
      </>
      <div className='registerone'>
        <div className='signup'>
          <p>Already have an account?</p><span>Sign In</span>
        </div>
        <div className='registercontainer'>
          <h1>Join Us!</h1>
          <p>To begin this journey, tell us what type of account you'd be opening.</p>
     <button onClick={handleClick} className='btn-navigate'>
     <div className='btn-main'>
     <div className='btn-maintext'>
      <img className="polygonone" src={Polygon1} alt="polygon"/>
      <BiUser className="user"/>
     </div>
     <div className='btn-maintext details'>
      <h5>Individual</h5>
      <p>Personal account to manage all you activities.</p>
     </div>
     <div className='btn-maintext arrow'>
      <BsArrowRightShort/>
     </div>
     </div>
     </button>
     <button onClick={handleClick} className='btn-navigate'>
     <div className='btn-main'>
     <div className='btn-maintext'>
      <img className="polygotwo" src={Polygon2} alt="polygon"/>
      <FiBriefcase className="bag"/>
     </div>
     <div className='btn-maintext detail'>
      <h5>Business</h5>
      <p>Own or being to a company, this is for you.</p>
     </div>
     <div className='btn-maintext arrow'>
      <BsArrowRightShort/>
     </div>
     </div>
     </button>

        </div>
      </div>
    </div>
    </div>
  )
}

export default RegisterOne;