import React,{useState} from 'react';
import {useNavigate} from "react-router-dom"
import "./registertwo.css"
import {FcGoogle} from "react-icons/fc";
import About from "../../components/about/About"
import {MdArrowBackIosNew} from "react-icons/md"
const RegisterTwo = () => {
  const [values,setValues] = useState({
    username:"",
    email:"",
    password:"",
    box:false,
  })
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate("/");
  }
  const handleChange=(event)=>{
    const {name,value} = event.target;
  setValues({...values,[name]:value})
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
navigate("/pagethree");
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
          <h6>STEP 01/03</h6>
          <p>Personal Info.</p>
        </div>
        </div>
        <div className='logincontainer'>
          <h1>Register Individual Account!</h1>
          <p>For the purpose of industry regulation, your details are required.</p>
      <form  onSubmit={handleSubmit} className='form'>
      <div className='input'>
      <label>Your fullname*</label>
        <input type="text" onChange={handleChange} name="username" value={values.username}  placeholder='Enter fullname' required />
        </div>
        <div className='input'>
        <label>Email address*</label>
        <input type="email" required onChange={handleChange}  name="email" value={values.email} placeholder='Enter email addres'/>
        </div>
        <div className='input'>
        <label>Create password*</label>
        <input type="password" required onChange={handleChange} name="password" value={values.password} placeholder='Enter password'/>
        </div>
        <div className='checkbox'>
        <input  onChange={handleChange} name="box"  value={values.box}  type="checkbox" required/>
        <span>I agree to terms & conditions</span>
        </div>
        <div className='btn-container'>
        <button type="submit" className='register-btn'>Register Account</button>
       <p>Or</p>
       <button type="submit" className='btn-google'><span><FcGoogle/></span>Register with Google</button>
        </div>
      </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RegisterTwo


 

