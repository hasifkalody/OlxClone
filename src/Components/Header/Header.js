import React,{useEffect, useState} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useNavigate } from 'react-router-dom';

// import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout} from "../../Firebase/Auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import{onAuthStateChanged} from 'firebase/auth';
function Header() {
  const [LogedIn, setLogedIn] = useState()
  const [dropdownClicked, dropdownstatus] = useState(false)
  const nav = useNavigate()
  const toggleClass=()=>{dropdownstatus(!dropdownClicked)}
  const toLogin =()=>{
    LogedIn?toggleClass():nav('/login')
    
  }
  const toLogOut =()=>{
    logout();
    dropdownstatus(!dropdownClicked)
    
  }
  onAuthStateChanged(auth,async (user) => {
    if (user) {
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setLogedIn(doc.data().name);
      });
      
      }
      else{
        setLogedIn(false);
        console.log('User is signed out++++')}
    })
    

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
            <span onClick={toLogin}>{LogedIn?`${LogedIn} >`:"Login"}</span>
            <hr />
            </div>
         
            <div className={dropdownClicked?"loginPage":"hideDropDown"}>
            <span onClick={toLogOut}>LogOut</span>
            <hr />
            </div>
       </div>
            
    

        <div className="sellMenu">
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
