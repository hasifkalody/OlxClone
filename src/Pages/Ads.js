import React, { useContext, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ProfileDropDown from '../Components/ProfileDropDown/ProfileDropDown'
import LoginOptions from '../Components/LoginOptions/LoginOptions'
import Options from '../Components/Options/Options'
import MyAds from '../Components/MyAds/MyAds'
import '../Components/MyAds/MyAds.css'
import {cntxtCmngFrmFldOprtn} from '../Helpers/Helpers'
import HumburgerMenu from '../Components/HumburgerMenu/HumburgerMenu'
import { Contextuser } from '../App';

function Ads() {
  const {setLoginStatus}= useContext(cntxtCmngFrmFldOprtn)
  const user = useContext(Contextuser)
  const LogedUserName=user.name

  return (
    <div className='mA_Container'>
      <Header setLoginStatus={setLoginStatus}/> 
      <Options/>
      <HumburgerMenu LogedUserName={LogedUserName}/>
      <MyAds/>
      <Footer/>
      
    </div>
  )
}

export default Ads
