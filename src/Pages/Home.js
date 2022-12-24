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

function Home() {
  const {ShowDropDown, setShowDropDown,DontShowLogin, setLoginStatus,favLogin, setfavLogin}= useContext(cntxtCmngFrmFldOprtn)


  return (
    <div className="homeParentDiv">
      {ShowDropDown && <ProfileDropDown setShowDropDown={setShowDropDown} />}
      {DontShowLogin ? "" : <LoginOptions setLoginStatus={setLoginStatus} favLogin={favLogin} setfavLogin={setfavLogin} />}
      <Header setLoginStatus={setLoginStatus} setShowDropDown={setShowDropDown} />
      <Options/>
      <Banner/>
      <CtgrsMob/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default Home;

