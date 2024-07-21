import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './registration.css';
 
function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [checkone, setCheckone] = useState(false);
  const [checktwo, setChecktwo] = useState(false);
  const [address, setAddress] = useState('');
  const [city,setCity] = useState('');
 
  const handleInputChange = (e) => {
    const { id, value, checked } = e.target;
    if (id === 'firstName') {
      setFirstName(value);
    }
    if (id === 'lastName') {
      setLastName(value);
    }
    if (id === 'email') {
      setEmail(value);
    }
    if(id === 'address'){
      setAddress(value);
    }
    if(id === 'city'){
      setCity(value);
    }
    if (id === 'password') {
      setPassword(value);
    }
    if (id === 'confirmPassword') {
      setConirmPassword(value);
    }
    if (id === 'gender') {
      setGender(value);
    }
 
    if (id === 'checkone') {
      setCheckone(checked);
    }
    if (id === 'checktwo') {
      setChecktwo(checked);
    }
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email, address,city,password, confirmPassword, gender, checkone, checktwo);
  };
 
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="form">
        <h2>Registration Form</h2><br/><br/>
        <label>Enter First Name : </label>
        <input type='text' id='firstName' value={firstName} onChange={handleInputChange} /><br /><br />
 
        <label>Enter Last Name : </label>
        <input type='text' id='lastName' value={lastName} onChange={handleInputChange} /><br /><br />
 
        <label>Enter Email : </label>
        <input type='email' id='email' value={email} onChange={handleInputChange} /><br /><br />
 
        <label>Address : </label>
        <textarea id="address" value={address} onChange={handleInputChange}></textarea><br /><br />
 
        <label>Select City : </label>
        <select id="city" value={city} onChange={handleInputChange}>
          <option value="">Select City</option>
          <option value="Mumabi">Mumbai</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Pune">Pune</option>
          <option value="Nashik">Nashik </option>
        </select><br /><br />
 
 
        <label>Enter Password : </label>
        <input type='password' id='password' value={password} onChange={handleInputChange} /><br /><br />
 
        <label>Select gender : </label>
        <input type="radio" id="gender" name="gender" value="Male" checked={gender === 'Male'} onChange={handleInputChange} /> Male
        <input type="radio" id="gender" name="gender" value="Female" checked={gender === 'Female'} onChange={handleInputChange} /> Female<br /><br />
 
        <label>Select Languages : </label>
        <input type="checkbox" id="checkone" name="checkone" value="Python" checked={checkone} onChange={handleInputChange} /> Python
 
        <input type="checkbox" id="checktwo" name="checktwo" value="React" checked={checktwo} onChange={handleInputChange} /> React<br /><br />
 
        <button type='submit' className='btn1'>Register</button>
      </form>
    </div>
 
  );
}
export default RegistrationForm; 