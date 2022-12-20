import React, { useContext } from 'react'
import Categories from '../Components/Categories/Categories'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import LoginOptions from '../Components/LoginOptions/LoginOptions'
import Options from '../Components/Options/Options'
import ProfileDropDown from '../Components/ProfileDropDown/ProfileDropDown'
import { cntxtCmngFrmFldOprtn } from '../Helpers/Helpers'
function Cars() {
  const {ShowDropDown, setShowDropDown,DontShowLogin, setLoginStatus,favLogin, setfavLogin}= useContext(cntxtCmngFrmFldOprtn)

  return (
    <div className='ctgrs_page'>
       {ShowDropDown && <ProfileDropDown setShowDropDown={setShowDropDown} />}
      {DontShowLogin ? "" : <LoginOptions setLoginStatus={setLoginStatus} favLogin={favLogin} setfavLogin={setfavLogin} />}
      <Header setLoginStatus={setLoginStatus} setShowDropDown={setShowDropDown} />
      <Options/>
      <Categories Category={['Cars',"car",'Car','cars','vehicle','Vehicle','automobile','Automobile']}/>
      <Footer/>
    </div>
  )
}

export default Cars
