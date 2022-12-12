import React, { useEffect, useState } from 'react'
import  './LoginOptions.css'
import GoogleIcon from '../../assets/GoogleIcon.js'
import MobileIcon from '../../assets/MobileIcon'
import AngleBracketLeft from '../../assets/AngleBracketLeft'
import AngleBracketRight from '../../assets/AngleBracketRight'
import imageForCarousel from '../../Components/LoginOptions/imageForCarousel.png'
import {useNavigate} from 'react-router-dom'
function LoginOptions({setLoginStatus,favLogin,setfavLogin}) {
  
  const nav=useNavigate()
  const [slider, setslider] = useState("")
  const [indicator, setindicator] = useState("")
  const [ind, setind] = useState(0)
  const [NoOfTimesIntoUseEffect, setNoOfTimesIntoUseEffect] = useState(0)
  setTimeout(() => {
    setind(setind+1)
  }, 10);

  var nx=1;
  const slideTo=(n)=>{
    nx=n;
    for(let i=0;i<indicator.length;i++){indicator[i].style.backgroundColor=' rgba(0,47,52,.36)'}
    const f1=()=>{slider.style.left="0";indicator[0].style.backgroundColor='#23e5db'}
    const f2=()=>{slider.style.left="-100%";indicator[1].style.backgroundColor='#23e5db';}
    const f3=()=>{slider.style.left="-200%";indicator[2].style.backgroundColor='#23e5db'}
    n==1&&f1()
    n==2&&f2()
    n==3&&f3() 
  }

  const handleN=(x)=>{
    nx+=x;
    if (nx >3){nx=1};
    if (nx <1){nx=3}
    slideTo(nx)
  }
  const popDown=()=>{
    setLoginStatus((x)=>!x)
  }
useEffect(() => {
  setslider(document.getElementById("idSlider"))
  setindicator(document.getElementsByClassName('lo_button'))
  if (NoOfTimesIntoUseEffect==1){
    indicator[0].style.backgroundColor='#23e5db'
    if(favLogin!=false){
      slideTo(favLogin)
      setfavLogin(false)
    }
  }
  setNoOfTimesIntoUseEffect(1)
  document.body.style.height="100vh"
  document.body.style.overflow="hidden"
  return () => {
    document.body.style.height="auto"
    document.body.style.overflow="scroll"
    document.body.style.overflowX="hidden"
  };
}, [ind])
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
       
        <button className='lo_loginOpt'><MobileIcon/><p>Continue with Phone</p></button>
        <button className='lo_loginOpt'><GoogleIcon/><p>Continue with Google</p></button>
        <div className='lo_Bottom1'>
        <p>OR</p>
        <span onClick={()=>{nav('/login')}}><p>Login with Email</p></span>
        </div>
        <div className='lo_Bottom2'>
        <p>All your personal details are safe with us.</p>
        </div>
        <div className='lo_Bottom3'>
        <p>If you continue, you  are accepting <span>OLX Terms and Conditions and  Privacy Policy</span> </p> 
        </div>
      </div>
    </div>
  )
}

export default LoginOptions
