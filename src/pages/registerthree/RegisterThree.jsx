import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./registerthree.css";
import PhoneInput from "../../components/phone/phone" 
import About from "../../components/about/About";
import {MdArrowBackIosNew} from "react-icons/md";
import {TbLock} from "react-icons/tb"
const RegisterThree = () => {
  const navigate = useNavigate();
  const [value,setValue] = useState({
    phone:"",
    address:"",
    country:"",
  })
  const handleChange=(event)=>{
    const {name,value} = event.target;
  setValue({...value,[name]:value})
  }
  const handleClick=()=>{
    navigate("/pagetwo");
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
navigate("/pagefour");
  }
  return (
    <div className='container'>
    <div className='mainContainer'>
      <About/>
      <div className='registertwo'>
       <div className='register'>
        <div className='stepback'>
        <MdArrowBackIosNew/>
          <span onClick={handleClick}>Back</span>
        </div>
        <div className="stepinfo">
          <h6>STEP 02/03</h6>
          <p>Residency Info.</p>
        </div>
        </div>
        <div className='logindetails'>
          <h1>Complete Your Profile!</h1>
          <p>For the purpose of industry regulation, your details are required.</p>
      <form onSubmit={handleSubmit} className='form'>
      <div className='input'>
      <label>Phone number</label>
    <PhoneInput/>
        </div>
        <div className='input'>
        <label>Your address</label>
        <input autocomplete="off" type="text" required onChange={handleChange}  name="email" value={value.address} placeholder='Please enter addres'/>
        </div>
        <div className='input'>
        <label>Country of residence</label>
        <input autocomplete="off" type="text" required onChange={handleChange} name="country" value={value.country} placeholder='please select'/>
        </div>
        <div className='btn-container'>
        <button className='register-b'>Save & Continue</button>
       <p><TbLock/>Your Info is safely secured</p>
        </div>
      </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RegisterThree