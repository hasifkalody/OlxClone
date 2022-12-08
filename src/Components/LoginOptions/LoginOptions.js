import React, { useEffect, useState } from 'react'
import  './LoginOptions.css'
import AngleBracketLeft from '../../assets/AngleBracketLeft'
import AngleBracketRight from '../../assets/AngleBracketRight'
import imageForCarousel from '../../Components/LoginOptions/imageForCarousel.png'
function LoginOptions({setLoginStatus}) {
var nx=0
  const slideTo=(n)=>{
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
  const popDown=()=>{
    setLoginStatus((x)=>!x)
  }
// useEffect(() => {
//   document.body.style.height="100vh"
//   document.body.style.overflow="hidden"
//   return () => {
//     document.body.style.height="auto"
//     document.body.style.overflow="scroll"
//     document.body.style.overflowX="hidden"
//   };
// }, [])
  return (
    <div className='lo_Conatainer'>
      <div className='lo_card'>
        <div className='lo_cross' onClick={popDown}><svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="" d="M878.336 85.333l-366.336 366.315-366.336-366.315h-60.331v60.331l366.336 366.336-366.336 366.336v60.331h60.331l366.336-366.336 366.336 366.336h60.331v-60.331l-366.315-366.336 366.315-366.336v-60.331z"></path></svg>
        </div>
        <div className='lo_sliderDisplay'>
          <div className='lo_sliderButtonLeft' onClick={()=>{handleN(-1)}} ><AngleBracketLeft/></div>
          <div className='lo_sliderButtonRight'  onClick={()=>{handleN(1)}}><AngleBracketRight/></div>
          {/* <div id='first'></div>
          <div id='second'></div>
          <div id='third'></div> */}
          
          <div id='idSlider' className='lo_slider'>
            <div><img src="https://statics.olx.in/external/base/img/loginEntryPointPost.png" alt="Image" />
            <p>Help us become one of the safest places to buy and sell</p>
            </div>
            <div><img src="https://statics.olx.in/external/base/img/loginEntryPointFavorite.png" alt="Image2" />
            <p>Close deals from the comfort of your home.</p>
            </div>
            <div><img src={imageForCarousel}alt="Image2" />
            <p>Keep all your favourites in one place.</p>
            </div>
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
