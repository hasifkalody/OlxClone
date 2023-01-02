import React, { useContext, useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import LoginOptions from '../Components/LoginOptions/LoginOptions';
import ProfileDropDown from '../Components/ProfileDropDown/ProfileDropDown';
import { cntxtCmngFrmFldOprtn } from '../Helpers/Helpers';
import { doc, updateDoc } from 'firebase/firestore';
import { Contextuser } from '../App';
import { db } from '../Firebase/Auth';
import Options from '../Components/Options/Options';
import '../Pages/stylesForPages.css'
import CtgrsMob from '../Components/CategoriesSectionForMobile/CtgrsMob';
import SellButton from '../assets/SellButton';
import SellButtonPlus from '../assets/SellButtonPlus';
import { useNavigate } from 'react-router-dom';
import HumburgerMenu from '../Components/HumburgerMenu/HumburgerMenu';


function Home() {
  const nav=useNavigate()
  const user = useContext(Contextuser)
  const LogedUserName=user.name
  const toSell=()=>{
    LogedUserName?nav('/sell'):nav('/login')
  }
 


  const {ShowDropDown, setShowDropDown,DontShowLogin, setLoginStatus,favLogin, setfavLogin}= useContext(cntxtCmngFrmFldOprtn)


  return (
    <div className="homeParentDiv">
      {ShowDropDown && <ProfileDropDown setShowDropDown={setShowDropDown} />}
      {DontShowLogin ? "" : <LoginOptions setLoginStatus={setLoginStatus} favLogin={favLogin} setfavLogin={setfavLogin} />}
      <Header setLoginStatus={setLoginStatus} setShowDropDown={setShowDropDown} />
      <HumburgerMenu/>
      <Options/>
      <Banner/>
      <CtgrsMob/>
      <Posts/>
        <div className="fo_sellMenu" onClick={toSell} > 
            <SellButton/>
            <div className="fo_sellMenuContent">
              <SellButtonPlus/>
              <span>SELL</span>
            </div>
        </div> 
      <Footer/>
    </div>
  );
}

export default Home;

