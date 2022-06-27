import React,{useState} from 'react';
import "./registerfour.css";
import {useNavigate} from "react-router-dom"
import About from "../../components/about/About";
import {MdArrowBackIosNew} from "react-icons/md";
import {TbLock} from "react-icons/tb";

const RegisterFour = () => {
  const navigate = useNavigate();
  const [value,setValue] = useState({
  verification:"",
  });
  const handleChange=(event)=>{
    const {name,value} = event.target;
  setValue({...value,[name]:value});
  }
  const handleClick=()=>{
    navigate("/pagethree");
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
navigate("/welcome");
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
        <div className='final'>
          <h1>Complete Your Profile!</h1>
          <p>For the purpose of industry regulation, your details are required.</p>
      <form onSubmit={handleSubmit} className='form'>
      <div className='input'>
      <label>Phone number</label>
      <input type="number" required onChange={handleChange} name="verification" value={value.verification}  placeholder='Enter verification code'/>
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

export default RegisterFour