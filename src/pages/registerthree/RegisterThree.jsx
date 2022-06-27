import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./registerthree.css";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import About from "../../components/about/About";
import {MdArrowBackIosNew} from "react-icons/md";
import {TbLock} from "react-icons/tb";

const RegisterThree = () => {
  const navigate = useNavigate();
  const [phone,setPhone] = useState("")
  const [items,setItems] = useState({
    address:"",
    country:"",
  })
  const handleChange=(event)=>{
    const {name,value} = event.target;
  setItems({...items,[name]:value})
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
    <PhoneInput
    className='phone'
    international
  defaultCountry="IN"
    placeholder="Enter phone number"
    value={phone}
    onChange={setPhone}/>
    </div>
        <div className='input'>
        <label>Your address</label>
        <input autoComplete="off" type="text" required onChange={handleChange}  name="address" value={items.address} placeholder='Please enter addres'/>
        </div>
        <div className='input'>
        <label>Country of residence</label>
        <input autoComplete="off" type="text" required onChange={handleChange} name="country" value={items.country} placeholder='please select'/>
        </div>
        <div className='btn-container'>
        <button type='submit' className='register-b'>Save & Continue</button>
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