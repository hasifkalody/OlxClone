import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import LoginOptions from '../Components/LoginOptions/LoginOptions';
import ProfileDropDown from '../Components/ProfileDropDown/ProfileDropDown';
function Home() {
  const [DontShowLogin, setLoginStatus] = useState(true)
  const [ShowDropDown, setShowDropDown] = useState(false)
  return (
    <div className="homeParentDiv">
      {ShowDropDown&&<ProfileDropDown setShowDropDown={setShowDropDown}/>}
      {DontShowLogin?"":<LoginOptions setLoginStatus={setLoginStatus}/>}
      <Header setLoginStatus={setLoginStatus} setShowDropDown={setShowDropDown} />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 
