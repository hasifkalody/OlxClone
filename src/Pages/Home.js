import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import LoginOptions from '../Components/LoginOptions/LoginOptions';
import ProfileDropDown from '../Components/ProfileDropDown/ProfileDropDown';
function Home() {
  const [DontShowLogin, setLoginStatus] = useState(true)
  return (
    <div className="homeParentDiv">
      <ProfileDropDown/>
      {DontShowLogin?"":<LoginOptions setLoginStatus={setLoginStatus}/>}
      <Header setLoginStatus={setLoginStatus} />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 
