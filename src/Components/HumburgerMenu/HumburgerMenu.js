import React from 'react'
import OlxLogoMob from '../../assets/OlxLogoMob'
import './HumburgerMenu.css'
import Camera from '../../assets/HumburgerList/Camera'

function HumburgerMenu() {
  return (
    <div className='hbrgr_Container'> 
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
            <div className='pd_thirdElContents'>
                <div><Camera/></div>
                <div><p>Start selling</p></div>
            </div>
            <div className='hbrgr_fst3frst'>
                <div>jkh</div>
                <div><p>My ADS</p></div>
            </div>
            <div className='hbrgr_fst3frst'>
                <div>jkh</div>
                <div><p>Chat</p></div>
            </div>
       </div>
       <div className='pd_thirdEl'>
       <div className='hbrgr_fst3frst'>
                <div>jkh</div>
                <div><p>Help</p></div>
        </div>
        <div className='hbrgr_fst3frst'>
                <div>jkh</div>
                <div><p>Select language / भाषा चुनें</p></div>
        </div>
       <button className='hbrgr_but'>Login</button>
       </div>
    </div>
  )
}

export default HumburgerMenu
