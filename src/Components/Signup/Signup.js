import React, { useState,useEffect} from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import {registerWithEmailAndPassword} from '../../Firebase/Auth'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, changeName] = useState()
  const [email, changeEmail] = useState()  
  const [Phone, changePhone] = useState()    
  const [password, changePassword] = useState()
  const nav = useNavigate()
  const callback=(path)=>{
    nav(path)
  }
  const SubmitAction = (e) => {
    e.preventDefault()
    registerWithEmailAndPassword(name, email, password,Phone,callback);
  }
  const toLogin =()=>{
    nav('/login')
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={SubmitAction}>
          <label htmlFor="fname">Username</label>
          <br />
          <input onChange={(e)=>{changeName(e.target.value)}}
            className="input"
            type="text"
            id="fname"
            name="name"
            
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input onChange={(e)=>{changeEmail(e.target.value)}}
            className="input"
            type="email"
            id="fname"
            name="email"
            
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input onChange={(e)=>{changePhone(e.target.value)}}
            className="input"
            type="text"
            id="lname"
            name="phone"
           
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input onChange={(e)=>{changePassword(e.target.value)}}
            className="input"
            type="password"
            id="lname"
            name="password"
            
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={toLogin}>Login</a>
      </div>
    </div>
  );
}
