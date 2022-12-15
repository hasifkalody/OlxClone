import React,{useContext, useEffect, useState} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useNavigate } from 'react-router-dom';
import ArrowDwn from '../../assets/ArrowDwn';
// import { useAuthState } from "react-firebase-hooks/auth";
import {Contextuser} from '../../App'


const AfterLogin=()=>{
  return(
    <div className='hd_AfterLogin'>
      <div><img src="images/avatar_4.png" alt="Avatar" /></div>
      <div><ArrowDwn/></div>
    </div>
  )
}
const BeforeLogin=()=>{
  return(
    <div className='pd_beforeLogin'>
      <p>Login</p>
    </div>
  )
}

function Header({setLoginStatus,setShowDropDown}) {
  
  const LogedUser=useContext(Contextuser)
  const LogedUserName=LogedUser.name
  const nav = useNavigate()
  const HandlePopUP=()=>{
    setLoginStatus((x)=>!x);
  } 
  const HandleDropDown=()=>{
    setShowDropDown((state)=>!state)
  } 
  const LoginOptions =()=>{
    LogedUserName?HandleDropDown():HandlePopUP()
  }
  const toSell=()=>{
    LogedUserName?nav('/sell'):nav('/login')
  }
 
    

  useEffect(() => {
  
  },[] )



  return (
   <div className='headerTop'>
     <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>{nav('/')}}>
          <OlxLogo ></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
       <div>
            <div className="loginPage">
            <span onClick={LoginOptions}>{LogedUserName?<AfterLogin/>:<BeforeLogin/>}</span>
            </div>
       </div>

        <div onClick={toSell} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Header;
