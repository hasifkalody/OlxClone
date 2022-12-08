import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import LoginOptions from '../Components/LoginOptions/LoginOptions';

function Home() {
  const [DontShowLogin, setLoginStatus] = useState(true)
  return (
    <div className="homeParentDiv">
      {DontShowLogin?"":<LoginOptions/>}
      <Header setLoginStatus={setLoginStatus} />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 
