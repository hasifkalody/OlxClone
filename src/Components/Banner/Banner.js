import React from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
import { useNavigate } from 'react-router-dom';
function Banner() {
  const nav=useNavigate()
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        
      </div>
      <div className="bannerChildDiv2">
       <img className="bannerChildDiv2img" src="gifs/value_proposition_cmc_v4_480.gif" alt="" /> 
      {/* <picture >
          <source media="(max-width:320px)" srcset="gifs/value_proposition_cmc_v4_320.gif"/>
          <source media="(max-width:360px)" srcset="gifs/value_proposition_cmc_v4_360.gif"/>
          <img className="bannerChildDiv2img" src="gifs/value_proposition_cmc_v4_480.gif" alt="Flowers"/>
        </picture> */}
      </div>
      <div className='ba_butContainer'>
          <span className='ba_button' onClick={()=>{nav('/Cars')}}>Buy Car</span>
          <span className='ba_button' onClick={()=>{nav('/sell')}}>Sell Car</span>
       </div>
      
    </div>
  );
}

export default Banner;
