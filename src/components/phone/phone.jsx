import React,{useState} from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import "./phone.css"
const Phone = () => {
    const [value,setValue] = useState()
  return (
    <div className='phone'>
    <PhoneInput
    className='phone'
    international
  defaultCountry="IN"
    placeholder="Enter phone number"
    value={value}
    onChange={setValue}/>
    </div>
  )
}

export default Phone