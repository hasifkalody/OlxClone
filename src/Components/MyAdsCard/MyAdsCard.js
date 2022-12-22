import React, { useContext, useEffect, useState} from 'react'
import Heart from '../../assets/Heart'
import HeartActive from '../../assets/HeartActive'
import Eye from '../../assets/MyAdsPage/Eye'
import './MyAdsCard.css'
import {deleteDocument} from '../../Helpers/Helpers'
import {contextForPostedItem}from '../../Helpers/Helpers'
function MyAdsCard({Items,test}) {
    const {setdeleted} = useContext(contextForPostedItem)

    const [showDrpDwn, setshowDrpDwn] = useState("empty")
    const fn=()=>{console.log("at fn");console.log(showDrpDwn);
        if(showDrpDwn!="empty"){document.getElementById(showDrpDwn).style.display="none";console.log("body")}}
  return (
   <div className='AdCrd_body' onClick={fn}>
     {Items.map((x,ind)=>< div className='AdCrd_Container' >
        <div className='AdCrd_left'>
            <div><span>From:<b>Dec 20, 22</b></span></div>
            <div><span>To:<b>Jan 19, 23</b></span></div>
            
        </div>
        <div className='AdCrd_right' >
            <div  className='AdCrd_rghtFst'>
                <div className='AdCrd_image'>
                    <img src={x.imageURL} alt="Image Of The Item" />
                </div>
                <div className='AdCrd_2nd'>
                    <div>{x.Name}</div>
                    <div>2022 454151km</div>

                </div>
                <div className='AdCrd_3rd'>
                    <span>₹ 50,00,100</span>
                </div>
                <button id='AdCrd_button'> 
                    Active
                </button>
                <div className='AdCrd_4th'>
                    This ad is currently live
                </div>
            </div>
            <div className='AdCrd_5th' onClick={()=>{document.getElementById(ind).style.display="block";console.log("atbutton")
                   setshowDrpDwn(ind)
                   if (ind==showDrpDwn){setTimeout(() => {document.getElementById(ind).style.display="block"}, 1)}
                   }}>
                  
               <div id={ind}  className='AdCrd_5thdrpdwn ' >
                    <div><button id='AdCrd_5thdrpdwnBtn1'>Edit</button></div>
                    <div><button id='AdCrd_5thdrpdwnBtn2' onClick={()=>{
                        
                        let c=window.confirm("Are You Sure To Delete! \nOnce deleted, can't be restored")
                        if(c==true){deleteDocument(x.id,setdeleted)};}}>Remove</button></div>
                </div>
                   <div className='AdCrd_5thInner'>
                    <span></span>
                    <span></span>
                    <span></span>
                   </div>
            </div>
            <div  className='AdCrd_rghtScnd'>
                <div className='AdCrd_rghtScnddv'>
                <span><div><Eye/></div><div>Views 0</div></span>
                <span><div><HeartActive/></div><div>Likes 0</div></span>
                </div>
                {/* <button id='AdCrd_rghtScndBtn'></button> */}
            </div>
        </div>
      
    </div>)}
   </div>
  )
}

export default MyAdsCard
