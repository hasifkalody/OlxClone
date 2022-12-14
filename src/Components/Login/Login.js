import React, {useState} from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import {logInWithEmailAndPassword,signInWithGoogle} from '../../Firebase/Auth'
import {useNavigate} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [LoginErr, LoginErrstatus] = useState();
  const nav= useNavigate()
  const login=()=>{
    const callback=(loginResponse)=>{
      if(loginResponse.loginError)LoginErrstatus(loginResponse.loginError)
      else nav(loginResponse)
    }
    
    logInWithEmailAndPassword(email,password,callback);
  }
  const loginWithGoogle=()=>{
    signInWithGoogle()
  }
  const PreventFormSubmission=(event)=>{
    event.preventDefault()
  }
  const NavigatToSignUp=()=>{
   nav('/Signup')
  }
  
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form on onSubmit={PreventFormSubmission}>
          <label htmlFor="fname">Email</label>
          <br />
          <input onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input onChange={(e) => setPassword(e.target.value)}
            className={LoginErr?"loginError":"input" }
            type="password"
            id="lname"
            name="password"
          />
          <br />
          <p style={{color:"red"}}>{LoginErr?LoginErr:""}</p>
          <br />
          <button onClick={login}>Login</button>
          <button onClick={loginWithGoogle}>Login With Google</button>
        </form>
        <a onClick={NavigatToSignUp} >Signup</a>
      </div>
    </div>
  );
}

export default Login;
