import React, { useContext } from 'react'
import OlxLogoMob from '../../assets/OlxLogoMob'
// import './HumburgerMenu.css'
import Camera from '../../assets/HumburgerList/Camera'
import P1 from '../../assets/ProfileDropDown/P1'
import Chat from '../../assets/HumburgerList/Chat'
import Language from '../../assets/HumburgerList/Language'
import P4 from '../../assets/ProfileDropDown/P4'
import P7 from '../../assets/ProfileDropDown/P7'
import {logout} from "../../Firebase/Auth";
import { useNavigate } from 'react-router-dom'
import {handleHmbrgrClck} from '../../Helpers/Helpers'
import {cntxtCmngFrmFldOprtn} from '../../Helpers/Helpers'

function HumburgerMenu({LogedUserName}) {
    const {setLoginStatus,HmbrgrClickd, setHmbrgrClickd}= useContext(cntxtCmngFrmFldOprtn)
      const nav =useNavigate()
    // const toSell=()=>{
    //     LogedUserName?nav('/sell'):nav('/login')
    //   }
     const HandleSell=()=>{
        if(LogedUserName){
            nav('/sell')
        }else
         {setLoginStatus(x=>!x);
            }
     }
     const HandleMyAds=()=>{
        LogedUserName?nav('/MyAds'):setLoginStatus(x=>!x)
        }
    const h1=()=>{
        handleHmbrgrClck(HmbrgrClickd,setHmbrgrClickd);
        setTimeout(() => {
            HandleSell()
        }, 180);
        
    }
    const h2=()=>{
        handleHmbrgrClck(HmbrgrClickd,setHmbrgrClickd);
        setTimeout(() => {
            HandleMyAds()
        }, 180);
        
    }
    const h3=()=>{
        handleHmbrgrClck(HmbrgrClickd,setHmbrgrClickd);
        setLoginStatus(x=>!x);   
    }
  return (
    <div id='hbrgrMenu' className='hbrgr_Container' > 
      <div className='hbrgr_fst'>
        <div>
            <img src="https://statics.olx.in/external/base/img/avatar_empty_state.png" alt="" />
        </div>
        <div className='hbrgr_fstr'>
            <div className='hbrgr_fstr1'>Welcome to OLX!</div>
            <div className='hbrgr_fstr2'>Take charge of your buying and selling journey.</div>
        </div>
      </div>
      {/* <div className='fo_mobEl'>

      </div> */}
      <div className='pd_thirdEl'>
            <div className='hbrgr_fst3frst' onClick={h1}>
                <div><Camera/></div>
                <div><p>Start selling</p></div>
            </div>
            <div className='hbrgr_fst3frst' onClick={h2}>
                <div><P1/></div>
                <div><p>My ADS</p></div>
            </div>
            <div className='hbrgr_fst3frst'>
                <div><Chat/></div>
                <div><p>Chat</p></div>
            </div>
       </div>
       <div className='pd_thirdEl'>
       <div className='hbrgr_fst3frst'>
                <div><P4/></div>
                <div><p>Help</p></div>
        </div>
        <div className='hbrgr_fst3frst'>
                <div><Language/></div>
                <div><p>Select language / भाषा चुनें</p></div>
        </div>
       {LogedUserName?<div className='hbrgr_fst3frst' onClick={()=>{logout();nav('/')}}>
                <div><P7/></div>
                <div><p>Logout</p></div>
        </div>:""} 
        {
         LogedUserName?"":<div className='hbrgr_butCont'>
         <button className='hbrgr_but' onClick={h3}>Login</button>
         </div>
        }
       
       </div>
    </div>
  )
}

export default HumburgerMenu
