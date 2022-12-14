import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Heart from '../../assets/Heart';
import HeartActive from '../../assets/HeartActive';
import { db } from '../../Firebase/Auth';
import './Post.css';
import { contextForPostedItem, NoOfVisitsContext } from '../../Helpers/Helpers'
import { Contextuser } from '../../App'
import {addToFav as favfn} from '../../Helpers/Helpers'
import {cntxtCmngFrmFldOprtn} from '../../Helpers/Helpers'


function Posts({setLoginStatus,setfavLogin}) {
  const NoOfVisitsObj = useContext(NoOfVisitsContext)
  const {CmngFrmFldOprtn,setCmngFrmFldOprtn} = useContext(cntxtCmngFrmFldOprtn)
  const arr = []
  const obj = useContext(contextForPostedItem)
  const [AllSellPostings, Set] = useState([])
  const nav = useNavigate()
  const navToViewPost = (item) => {
    obj.setPostedItem(item)
    nav('/ViewPosts')
  }
  const NoOfVisits = NoOfVisitsObj.NoOfVisits
  const LogedUser = useContext(Contextuser);
  const [update, setUpdate] = useState(0)
  
  const addToFav=(obj)=>{
    favfn(obj,LogedUser,update, setUpdate,setfavLogin,setLoginStatus,setCmngFrmFldOprtn)
  }


  useEffect(async () => {
    if (LogedUser.name) {console.log(CmngFrmFldOprtn)
      if (CmngFrmFldOprtn.status) {
        try {console.log("at try")
          await updateDoc(doc(db, "SellPostings", CmngFrmFldOprtn.item.id), { uidOfAddedUser: LogedUser.uid, AddedToFav: true })
          setCmngFrmFldOprtn({})
        }
        catch {
          alert("error")
        }
      }
    }
    console.log("above fetch")
    const docs = await getDocs(collection(db, "SellPostings"));
    docs.forEach(element => {
      arr.push(element.data())
    });
    Set(arr)
  }, [NoOfVisits,update,LogedUser])


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards" >

          {AllSellPostings.map((x) =>
            <div className="card">
              <div  className="ps_favorite" onClick={() => { addToFav(x) }}>
              {LogedUser.name?x.uidsFvrtdUsrs.filter((y)=>y==LogedUser.uid).length>0?<HeartActive/>:<Heart/>:<Heart/>}
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
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
