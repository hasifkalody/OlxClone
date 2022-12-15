import React from 'react'
import FavItems from '../Components/FavItems/FavItems'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function Favourites() {
  return (
    <div className='Fav_Container'>
      <Header/>
      <FavItems/>
      <Footer/>
    </div>
  )
}

export default Favourites
