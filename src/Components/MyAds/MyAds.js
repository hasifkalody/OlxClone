import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MyAds.css'

function MyAds() {
  const nav=useNavigate()
  return (
    <div className='mA_Ads'>
      <button >ADS</button>
      <button onClick={()=>{nav('/Favourites')}}>FAVOURITES</button>
      <div className='mA_Postings'>
        <div className='mA_Cntnts'>
          <img src="/images/no-publications.png" alt="" />
          <p>You haven't listed anything yet</p>
          <p>Let go of what you don't use anymore</p>
          <button>Start selling</button>
        </div>
      </div>
          
    </div>
  )
}

export default MyAds
