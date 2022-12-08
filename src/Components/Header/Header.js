import React,{useContext, useEffect, useState} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useNavigate } from 'react-router-dom';

// import { useAuthState } from "react-firebase-hooks/auth";
import {logout} from "../../Firebase/Auth";
import {Contextuser} from '../../App'
import { contextForPostedItem } from '../../Helpers/Helpers';
function Header({setLoginStatus}) {
  
  const LogedUser=useContext(Contextuser)
  const LogedUserName=LogedUser.name
  const [dropdownClicked, dropdownstatus] = useState(false)
  const nav = useNavigate()
  const toggleClass=()=>{
    dropdownstatus(!dropdownClicked)}
  const HandlePopUP=()=>{
    setLoginStatus((x)=>!x);
    document.body.style.height="100vh"
    document.body.style.overflow="hidden"
  } 
  const HandleDropDown=()=>{
    
  } 
  const toLogin =()=>{ 
  }
  const LoginOptions =()=>{
    LogedUserName?HandleDropDown():HandlePopUP()
  }
  const toLogOut =()=>{
    logout();
    dropdownstatus(!dropdownClicked)
    
  }
  const toSell=()=>{
    LogedUserName?nav('/sell'):nav('/login')
  }
 
    

  useEffect(() => {
  
  },[] )



  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
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
            <span onClick={LoginOptions}>{LogedUserName?`${LogedUserName} >`:"Login"}</span>
            <hr />
            </div>
         
            <div className={dropdownClicked?"logOutButon":"hideDropDown"}>
            <span onClick={toLogOut}>LogOut</span>
            <hr />
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
  );
}

export default Header;
