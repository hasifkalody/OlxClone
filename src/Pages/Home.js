import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import LoginOptions from '../Components/LoginOptions/LoginOptions';
import ProfileDropDown from '../Components/ProfileDropDown/ProfileDropDown';
function Home() {
  const [DontShowLogin, setLoginStatus] = useState(true)
  const [ShowDropDown, setShowDropDown] = useState(false)
  const [favLogin, setfavLogin] = useState(false)


  // const [favAddFailDueToFalseLogin, setfavAddFailDueToFalseLogin] = useState(false)
  // const [favobj, setfavobj] = useState(false)

// useEffect(() => {
//  bring obj if adding to favourites was failed due to a nonlogin status {favAddFailDueToFalseLogin:true,addToFav:"function"}
//  favAddFailDueToFalseLogin(false)
// }, [])
  return (
    <div className="homeParentDiv">
      {ShowDropDown&&<ProfileDropDown setShowDropDown={setShowDropDown}/>}
      {DontShowLogin?"":<LoginOptions setLoginStatus={setLoginStatus} favLogin={favLogin} setfavLogin={setfavLogin}/>}
      <Header setLoginStatus={setLoginStatus} setShowDropDown={setShowDropDown} />
      <Banner />
      <Posts setLoginStatus={setLoginStatus} setfavLogin={setfavLogin} />
      <Footer />
    </div>
  );
}

export default Home;
 
