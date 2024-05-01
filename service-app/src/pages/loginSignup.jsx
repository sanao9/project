import React, { useState } from 'react'
import "./loginSignup.css"
import userImage from  "../components/assets/user.png"
import Image2 from  "../components/assets/email.png"
import Image3 from  "../components/assets/password.png"

const LoginSignup = () => {
  const[action,setAction] = {useState}("login");
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        
      </div>
        <div className='inputs'>
          {action==="Login"?<div></div>:<div className='input'>
              <img src={ userImage} alt="image1"/>
              <input type='text' placeholder='Name'/>
          </div>}
          
          <div className='input'>
              <img src={Image2} alt=""/>
              <input type='email' placeholder='email Id'/>
          </div>
          <div className='input'>
              <img src={Image3} alt=""/>
              <input type='password' placeholder='password'/>
              
          </div>
        </div>
        {action==="Sign up"?<div></div>: <div className='forgot-password'>Forgot password? <span>click here!</span></div>}
       
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign up")}}>Sign Up</div>
          <div className={action==="Sign up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  );
};

export default LoginSignup
