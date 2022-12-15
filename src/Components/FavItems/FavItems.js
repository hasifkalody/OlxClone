import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../Firebase/Auth';
import './FavItems.css';
import { Contextuser } from '../../App';
import { addToFav } from '../../Helpers/Helpers'
import { useNavigate } from 'react-router-dom';
import { cntxtCmngFrmFldOprtn } from '../../Helpers/Helpers'
import HeartActive from '../../assets/HeartActive'
import { addToFav as fav,contextForPostedItem } from '../../Helpers/Helpers'
import NoFavourites from '../../Components/NoFavourites/NoFavourites'

function FavItems() {
    const obj = useContext(contextForPostedItem)
    const { setCmngFrmFldOprtn, setfavLogin, setLoginStatus, update, setUpdate } = useContext(cntxtCmngFrmFldOprtn)
    const nav = useNavigate()
    const Logeduser = useContext(Contextuser)
    const [items, setitems] = useState([])
    const navToViewPost = (item) => {
        obj.setPostedItem(item)
        nav('/ViewPosts')
    }

    const addToFav = (obj) => {
        fav(obj, Logeduser, setUpdate, setfavLogin, setLoginStatus, setCmngFrmFldOprtn)
    }

    useEffect(async () => {
        if (Logeduser.uid) {
            const q = query(collection(db, "SellPostings"), where("uidsFvrtdUsrs", "array-contains", Logeduser.uid))
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
                <button onClick={() => { nav('/MyAds') }} >ADS</button>
                <button onClick={() => { nav('/Favourites') }}>FAVOURITES</button>
                {items.length>0? <div className='fav_first'>
                    <div className="cards" >
                        {items.map((x) =>
                            <div className="card">
                                <div className="ps_favorite" onClick={() => { addToFav(x) }}>
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
                </div>:<NoFavourites/>}
               
            </div>

        </div>

    )
}

export default FavItems
