import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where,arrayUnion } from 'firebase/firestore';
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


function Posts() {
  const NoOfVisitsObj = useContext(NoOfVisitsContext)
  const {CmngFrmFldOprtn,setCmngFrmFldOprtn,setLoginStatus,setfavLogin,update, setUpdate} = useContext(cntxtCmngFrmFldOprtn)
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
  
  const addToFav=(obj)=>{
    favfn(obj,LogedUser,setUpdate,setfavLogin,setLoginStatus,setCmngFrmFldOprtn)
  }


  useEffect(async () => {
    if (LogedUser.name) {console.log(CmngFrmFldOprtn)
      if (CmngFrmFldOprtn.status) {
        try {console.log("at try")
        await updateDoc(doc(db,"SellPostings",CmngFrmFldOprtn.item.id),{uidsFvrtdUsrs: arrayUnion(LogedUser.uid)})
          // await updateDoc(doc(db, "SellPostings", CmngFrmFldOprtn.item.id), { uidOfAddedUser: LogedUser.uid, AddedToFav: true })
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
      <div className="po_moreView">
        <div className="po_heading">
          <span>Based on your last search</span>
          <span>view more</span>
        </div>
        <div className="po_cards" >

          {AllSellPostings.map((x) =>
            <div className="po_card">
              <div className="po_cardInner"  onClick={() => { navToViewPost(x) }}>
                <div  className="ps_favorite" onClick={() => { addToFav(x) }}>
                {LogedUser.name?x.uidsFvrtdUsrs.filter((y)=>y==LogedUser.uid).length>0?<HeartActive/>:<Heart/>:<Heart/>}
                </div>
                <div className="image">
                  <img src={x.imageURL} alt="" />
                </div>
                <div className="po_content">
                  <p>&#x20B9; {x.Price}</p>
                  <span>2018 - 40000.0 km</span>
                  {/* <span className="kilometer">{x.Category}</span> */}
                  <p> {x.Name}</p>
                  <div  className="po_btm">
                   <p>Location</p>
                   <p>{x.date}</p>
                  </div>
                  
                  
                </div>
                
              </div>
            </div>
          )}

        </div>
      </div>
      <div className='po_rcmmndtnsCntnr'>
          <div className='po_rcmFrst'><span>Fresh recommendations</span></div>
          <div className='po_rcmmndtns'>
            

              {AllSellPostings.map((x) =>
                <div className="po_rcmmndtnscardscard po_card">
                  <div className="po_cardInner"  onClick={() => { navToViewPost(x) }}>
                    <div  className="ps_favorite" onClick={() => { addToFav(x) }}>
                    {LogedUser.name?x.uidsFvrtdUsrs.filter((y)=>y==LogedUser.uid).length>0?<HeartActive/>:<Heart/>:<Heart/>}
                    </div>
                    <div className="image">
                      <img src={x.imageURL} alt="" />
                    </div>
                    <div className="po_content">
                      <p>&#x20B9; {x.Price}</p>
                      <span>2018 - 40000.0 km</span>
                      {/* <span className="kilometer">{x.Category}</span> */}
                      <p> {x.Name}</p>
                      <div  className="po_btm">
                      <p>Location</p>
                      <p>{x.date}</p>
                      </div>
                      
                      
                    </div>
                    
                  </div>
                </div>
              )}

           
          </div>
      </div>
     
    </div>
  );
}

export default Posts;
