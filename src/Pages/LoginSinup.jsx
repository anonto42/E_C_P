import React from 'react'
import './Css/LoginSinup.css'

const LoginSinup = () => {
  return (
    <div className='loginSinup'>
      <div className="loginSinup-container">
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span> </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continnuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSinup