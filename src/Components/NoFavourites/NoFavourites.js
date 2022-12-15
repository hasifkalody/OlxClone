import React from 'react'
import './NoFavourites.css';

function NoFavourites() {
  return (
    <div className='mA_Postings'>
        <div className='mA_Cntnts'>
          <img src="/images/no-favorites.png" alt="" />
          <p>You haven't liked any ads yet</p>
          <p>Like ads and share them with the world</p>
          <button>Discover</button>
        </div>
      </div>
  )
}

export default NoFavourites
