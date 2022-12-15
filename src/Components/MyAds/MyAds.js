import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MyAds.css'
import NoPostings from '../NoPostings/NoPostings'
import HeartActive from '../../assets/HeartActive'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Contextuser } from '../../App';
import { db } from '../../Firebase/Auth'
import {contextForPostedItem,cntxtCmngFrmFldOprtn} from '../../Helpers/Helpers'

function MyAds() {
  const {update} = useContext(cntxtCmngFrmFldOprtn)
  const Logeduser = useContext(Contextuser)
  const [items, setitems] = useState([])
  const obj = useContext(contextForPostedItem);
  const nav=useNavigate()
  const navToViewPost = (item) => {
    obj.setPostedItem(item)
    nav('/ViewPosts')
}

useEffect(async() => {
  if (Logeduser.uid) {
    const q = query(collection(db, "SellPostings"), where("uid", "==", Logeduser.uid))
    const obj = await getDocs(q)
    const arr = []
    obj.forEach((x) => {
        arr.push(x.data())
    })
    setitems(arr)
}
}, [Logeduser, update])

  return (
    <div>
        <div className='mA_Ads'>
                <button onClick={() => { nav('/MyAds') }}>ADS</button>
                <button onClick={() => { nav('/Favourites') }}>FAVOURITES</button>
                {items.length>0? <div className='fav_first'>
                    <div className="cards" >
                        {items.map((x) =>
                            <div className="card">
                                <div className="ps_favorite">
                                    <HeartActive />
                                </div>
                                <div onClick={() => { navToViewPost(x) }}>
                                    <div className="image">
                                        <img src={x.imageURL} alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="rate">&#x20B9; {x.Price}</p>
                                        <span className="kilometer">{x.Category}</span>
                                        <p className="name"> {x.Name}</p>
                                    </div>
                                    <div className="date">
                                        <span>{x.date}</span>
                                    </div>
                                </div>
                            </div>

                        )}


                    </div>
                </div>:<NoPostings/>}
               
            </div>
    </div>
  )
}

export default MyAds
