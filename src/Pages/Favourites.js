import React, { useContext } from 'react'
import FavItems from '../Components/FavItems/FavItems'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import {cntxtCmngFrmFldOprtn} from '../Helpers/Helpers'
import ProfileDropDown from '../Components/ProfileDropDown/ProfileDropDown'
import LoginOptions from '../Components/LoginOptions/LoginOptions'

function Favourites() {
  const {ShowDropDown, setShowDropDown,DontShowLogin, setLoginStatus,favLogin, setfavLogin}= useContext(cntxtCmngFrmFldOprtn)

  return (
    <div className='Fav_Container'>
      {ShowDropDown && <ProfileDropDown setShowDropDown={setShowDropDown} />}
      {DontShowLogin ? "" : <LoginOptions setLoginStatus={setLoginStatus} favLogin={favLogin} setfavLogin={setfavLogin} />}
      <Header setShowDropDown={setShowDropDown} setLoginStatus={setLoginStatus}/> 
      <FavItems/>
      <Footer/>
    </div>
  )
}

export default Favourites
