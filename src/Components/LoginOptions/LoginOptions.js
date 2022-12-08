import React, { useState } from 'react'
import  './LoginOptions.css'
import AngleBracketLeft from '../../assets/AngleBracketLeft'
import AngleBracketRight from '../../assets/AngleBracketRight'

function LoginOptions() {
  // const [nx, setn] = useState(0)
var nx=0
  const slideTo=(n)=>{
    // setn((y)=>n)
    nx=n;
    console.log("argument"+n)
    console.log(nx)
    const slider=document.getElementById("idSlider")
    const f1=()=>{slider.style.left="0"}
    const f2=()=>{slider.style.left="-100%"}
    const f3=()=>{slider.style.left="-200%"}
    n==1&&f1()
    n==2&&f2()
    n==3&&f3() 
  }

  const handleN=(x)=>{
    // setn((y)=>y+x);
    console.log("argument"+x)
    console.log(nx);
    nx+=x;
    if (nx >3){nx=1};
    if (nx <1){nx=3}
    slideTo(nx)
  }

  return (
    <div className='lo_Conatainer'>
      <div className='lo_card'>
        <div className='lo_sliderDisplay'>
          <div className='lo_sliderButtonLeft' onClick={()=>{handleN(-1)}} ><AngleBracketLeft/></div>
          <div className='lo_sliderButtonRight'  onClick={()=>{handleN(1)}}><AngleBracketRight/></div>
          {/* <div id='first'></div>
          <div id='second'></div>
          <div id='third'></div> */}
          
          <div id='idSlider' className='lo_slider'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='lo_butDiv'>
          <div className='lo_button' onClick={()=>{slideTo(1)}}></div>
          <div className='lo_button' onClick={()=>{slideTo(2)}}></div>
          <div className='lo_button' onClick={()=>{slideTo(3)}}></div>
          {/* <a href="#first" className='lo_button'></a>
          <a href="#second" className='lo_button'></a>
          <a href="#third" className='lo_button'></a> */}
        </div>
       
        
        <div></div>
        <div></div>

      </div>
    </div>
  )
}

export default LoginOptions
