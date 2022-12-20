import React, { useContext, useEffect, useState } from 'react'
import './Categories.css'
import { FetchCateories } from '../../Helpers/Helpers'
import Cars from '../../Pages/Cars'
import HeartIcon from '../../assets/HeartIcon'
import{addToFav as fav} from '../../Helpers/Helpers'
import { Contextuser } from '../../App'
import {cntxtCmngFrmFldOprtn} from '../../Helpers/Helpers'

function Categories({ Category}) {
    const [dDwnClkd, setdDwnClkd] = useState(true)
    const [dDwnClkd2, setdDwnClkd2] = useState(false)
    const hndlDrpDwn=()=>{
        setdDwnClkd((c)=>!c)
    }
    const hndlDrpDwn2=()=>{
        setdDwnClkd2((c)=>!c)
    }
    const [Cars, setCars] = useState([])
    const LogedUser = useContext(Contextuser)
    const {CmngFrmFldOprtn,setCmngFrmFldOprtn,setLoginStatus,setfavLogin,update, setUpdate} = useContext(cntxtCmngFrmFldOprtn)
    const favrt=(obj)=>{fav(obj,LogedUser,setUpdate,setfavLogin,setLoginStatus,setCmngFrmFldOprtn)}
    
    useEffect(async() => {
        const vv=await FetchCateories(Category)
    
        setCars(vv)
    }, [])
    return (
        <div className='ca_container'>
            <h3 >Used Cars In Kerala</h3>
            <div className='ca_main'>
                <div className='ca_left'>
                    <div className='ca_leftSelectors'>
                    <div className= {`ca_arrow ${dDwnClkd&&'ca_arrow2'}` }onClick={hndlDrpDwn}></div>
                        <h5>CATEGORIES</h5>
                        {dDwnClkd==false?<span>Cars</span>:""}
                       {dDwnClkd?<div>
                       <div className='ca_first'><div></div><span>All Categories</span></div>
                        <div className='ca_second'>
                            <span>Cars(47,151)</span>
                        </div>
                       
                        <p>In publishing and graphic des.</p>
                        
                       </div>:""}
                    </div>
                    
                    <div className='ca_leftSelectors'>
                    <div className= {`ca_arrow ${dDwnClkd2&&'ca_arrow2'}` }onClick={hndlDrpDwn2}></div>
                        <h5>LOCATIONS</h5>
                        {dDwnClkd2==false?<span>Kerala</span>:""}
                       {dDwnClkd2?<div className='ca_innerdiv'>
                       <div className='ca_first'><div></div><span>India</span></div>
                        <div className='ca_second'>
                            <span>Cars(47,151)</span>
                        </div>
                       
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        
                       </div>:""}
                    </div>
                    
                </div>
                <div className='ca_postings'>
                    <div className='ca_Cards'>
                       {Cars.map((x)=>
                        <div className='ca_card'>
                            <div className='ca_heartIcon' onClick={()=>{favrt(x)}}>
                            <HeartIcon/>
                            </div>
                        <div className='ca_image'>
                            <img src={x.imageURL} alt="Category Item" />
                        </div>
                        <p>₹  {x.Price}</p>
                        <p>200245-1541 Km</p>
                        <p>{x.Name}</p>
                        <p>Rohini sector</p>

                    </div>
                       )}

                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Categories
