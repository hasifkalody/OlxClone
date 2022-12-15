import React, { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ProfileDropDown from '../Components/ProfileDropDown/ProfileDropDown'
import LoginOptions from '../Components/LoginOptions/LoginOptions'
import Options from '../Components/Options/Options'
import MyAds from '../Components/MyAds/MyAds'
import '../Components/MyAds/MyAds.css'

function Ads() {
    const [DontShowLogin, setLoginStatus] = useState(true)
    const [ShowDropDown, setShowDropDown] = useState(false)
    const [favLogin, setfavLogin] = useState(false)

  return (
    <div className='mA_Container'>
      {ShowDropDown && <ProfileDropDown setShowDropDown={setShowDropDown} />}
      {DontShowLogin ? "" : <LoginOptions setLoginStatus={setLoginStatus} favLogin={favLogin} setfavLogin={setfavLogin} />}
      <Header setShowDropDown={setShowDropDown} setLoginStatus={setLoginStatus}/> 
      <Options/>
      <MyAds/>
      <Footer/>
      
    </div>
  )
}

export default Ads
