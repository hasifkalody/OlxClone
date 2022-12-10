import React from 'react'
import './ProfileDropDown.css'

function ProfileDropDown() {
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
        <div className='pd_secofEl'>
         <p>4 steps left</p>
         <div className='pd_progress'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
         <p>We are built on trust. Help one another to get to know each other better.</p>
        </div>
      </div>
  )
}

export default ProfileDropDown
