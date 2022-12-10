import React from 'react'
import './ProfileDropDown.css'
import P1 from '../../assets/ProfileDropDown/P1'
import P2 from '../../assets/ProfileDropDown/P2'
import P3 from '../../assets/ProfileDropDown/P3'
import P4 from '../../assets/ProfileDropDown/P4'
import P5 from '../../assets/ProfileDropDown/P5'
import P6 from '../../assets/ProfileDropDown/P6'
import P7 from '../../assets/ProfileDropDown/P7'
import {logout} from "../../Firebase/Auth";

function ProfileDropDown({setShowDropDown}) {
  const handleLogout=()=>{
      logout();
      setShowDropDown((state)=>!state)
  }

  return (
      <div className='pd_profileCard'>
        <div className='pd_arrow'>
        </div>
        <div className='pd_firstEl'>
            <div className='pd_userPhoto'>
                <img src="images/avatar_4.png" alt="" />
            </div>
            <div className='pd_userDetails'>
                <p>Hello,</p>
                <p>AsifAli</p>
                <p>View and edit profile</p>
            </div>
        </div>
        <div className='pd_secondEl'>
         <p>4 steps left</p>
         <div className='pd_progress'>
            <div className='pd_bg'></div>
            <div className='pd_bg'></div>
            <div className='pd_bg'></div>
            <div className='pd_bg'></div>
            <div className='pd_bg'></div>
            <div className='pd_bg'></div>
            
         </div>
         <p>We are built on trust. Help one another to get to know each other better.</p>
        </div>
        <div className='pd_thirdEl'>
            <div className='pd_thirdElContents'>
                <div><P1/></div>
                <div><p>My ADS</p></div>
            </div>
            <div className='pd_thirdElContents'>
                <div><P2/></div>
                <div><p>Buy Business Packages</p></div>
            </div>
            <div className='pd_thirdElContents'>
                <div><P3/></div>
                <div><p>Bought Packages & Billing</p></div>
            </div>
        </div>
        <div className='pd_thirdEl'>
            <div className='pd_thirdElContents'>
                <div><P4/></div>
                <div><p>Help</p></div>
            </div>
        </div>
        <div className='pd_thirdEl'>
            <div className='pd_thirdElContents'>
                <div><P5/></div>
                <div><p>Settings</p></div>
            </div>
        </div>
        <div className='pd_thirdEl'>
            <div className='pd_thirdElContents'>
                <div><P6/></div>
                <div><p>Install OLX Lite app</p></div>
            </div>
            <div id='pd_LogOut' className='pd_thirdElContents' onClick={handleLogout}>
                <div><P7/></div>
                <div><p>Logout</p></div>
            </div>
        </div>
      </div>
  )
}

export default ProfileDropDown
