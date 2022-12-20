import React from 'react'
import { useNavigate } from 'react-router-dom'
import Arrow from '../../assets/Arrow'
import './Options.css'


function Options() {
  const nav=useNavigate()
  return (
    
      <div className="op_menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>{nav('/Cars')}}>Cars</span>
            <span onClick={()=>{nav('/Bikes')}}>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
   
  )
}

export default Options
