import React, { useContext } from 'react';
import Fb from '../../assets/Fb'
import Insta from '../../assets/Insta'
import Yt from '../../assets/Yt'
import Twit from '../../assets/Twit'
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'
import {Contextuser} from '../../App'

function Footer() {
  const LogedUser=useContext(Contextuser)
  const LogedUserName=LogedUser.name
  const nav=useNavigate()
  const HandleMobDropDown=(e)=>{
    e.target.classList.toggle("Forotate")
    e.target.parentElement.parentElement.children[1].classList.toggle("fo_showDrpdwn")
  }
  const toSell=()=>{
    LogedUserName?nav('/sell'):nav('/login')
  }
 
  return (
    <div className="he_footerParentDiv">
      <div className="he_content">
        <div className='he_inner' >
          <div className="he_heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="he_list">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div className='he_inner'>
          <div className="he_heading">
            <p>Trending Locations</p>
          </div>
          <div className="he_list">
            <ul>
              <li>Bhubaneshwar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
        </div>
        <div className='he_inner'>
          <div className="he_heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
              <li>Waah Jobs</li>
            </ul>
          </div>
        </div>
        <div className='he_inner'>
          <div className="he_heading">
            <p>OLX</p>
          </div>
          <div className="he_list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
        <div className='he_inner'>
          <div className="he_heading">
            <p>Follow Us</p>
          </div>
          <div className='he_social'>
            <span><Fb /> </span>
            <span><Insta /></span>
            <span><Yt /></span>
            <span><Twit /></span>
          </div>
          <div className='fo_app'>
            <div>
              <img src="https://statics.olx.in/external/base/img/playstore.png" alt="" />
            </div>
            <div>
              <img src="https://statics.olx.in/external/base/img/appstore.png" alt="" />
            </div>
          </div>

        </div>
      </div>
      <div className='fo_mob'>
        <div  className='fo_mobEl'>
          <div className='fo_mobFrstEl'>
            <div><span>Categories</span></div>
            <div className='fo_arrow' onClick={(e)=>{HandleMobDropDown(e)}}></div>
          </div>
          <div className='fo_mobElDrpDwn fo_mobElDrpDwnFst'>
          <div onClick={()=>{nav('/Cars')}}><span>OLX Autos (Cars)</span></div>
          </div>
        </div>
        <div  className='fo_mobEl'>
          <div className='fo_mobFrstEl'>
            <div><span>Popular Locations</span></div>
            <div className='fo_arrow' onClick={(e)=>{HandleMobDropDown(e)}}></div>
          </div>
          <div className='fo_mobElDrpDwn'>
            <div><span>Kolkata</span></div>
            <div><span>Mumbai</span></div>
            <div><span>Chennai</span></div>
            <div><span>Pune</span></div>
          </div>
        </div>
        <div  className='fo_mobEl'>
          <div className='fo_mobFrstEl'>
            <div><span>Trending Locations</span></div>
            <div className='fo_arrow' onClick={(e)=>{HandleMobDropDown(e)}}></div>
          </div>
          <div className='fo_mobElDrpDwn'>
            <div><span>Bhubaneshwar</span></div>
            <div><span>Hyderabad</span></div>
            <div><span>Chandigarh</span></div>
            <div><span>Nashik</span></div>
          </div>
        </div>
        <div  className='fo_mobEl'>
          <div className='fo_mobFrstEl'>
            <div><span>About Us</span></div>
            <div className='fo_arrow' onClick={(e)=>{HandleMobDropDown(e)}}></div>
          </div>
          <div className='fo_mobElDrpDwn'>
            <div><span>About OLX Group</span></div>
            <div><span>Careers</span></div>
            <div><span>Contact Us</span></div>
            <div><span>OLXPeople</span></div>
            <div><span>Waah Jobs</span></div>
          </div>
        </div>
        <div  className='fo_mobEl'>
          <div className='fo_mobFrstEl'>
            <div><span>OLX</span></div>
            <div className='fo_arrow' onClick={(e)=>{HandleMobDropDown(e)}}></div>
          </div>
          <div className='fo_mobElDrpDwn'>
            <div><span>Help</span></div>
            <div><span>Sitemap</span></div>
            <div><span>Legal & Privacy information</span></div>
            <div><span>Blog</span></div>
            <div><span>OLX Autos Sell Car</span></div>
          </div>
        </div>
        <div  className='fo_mobEl'>
          <div className='fo_mobFrstEl'>
            <div><span>Other Countries</span></div>
            <div className='fo_arrow' onClick={(e)=>{HandleMobDropDown(e)}}></div>
          </div>
          <div className='fo_mobElDrpDwn'>
            <div><span>Pakistan</span></div>
            <div><span>South Africa</span></div>
            <div><span>Indonesia</span></div>
          </div>
        </div>
        <div  className='fo_mobEl'>
          <div className='fo_mobFrstEl'>
            <div><span>Follow Us</span></div>
            <div className='fo_MobScl'>
              <Fb/>
              <Insta/>
              <Twit/>
              <Yt/>
            </div>
          </div>
          
        </div>
        <div  className='fo_mobEl '>
          <div className='fo_mobFrstEl fo_mobElRspsv '>
            <div className='fo_app'>
              <div>
                <img src="https://statics.olx.in/external/base/img/playstore.png" alt="" />
              </div>
              <div>
                <img src="https://statics.olx.in/external/base/img/appstore.png" alt="" />
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="fo_footer">
        <p><span>Other Countries</span> Pakistan - South Africa - Indonesia</p>
        <p>All rights reserved © 2006-2022 OLX</p>
      </div>
    </div>
  );
}

export default Footer;
