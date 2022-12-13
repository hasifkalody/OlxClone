import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Heart from '../../assets/Heart';
import HeartActive from '../../assets/HeartActive';
import { db } from '../../Firebase/Auth';
import './Post.css';
import { contextForPostedItem, NoOfVisitsContext } from '../../Helpers/Helpers'
import { Contextuser } from '../../App'

function Posts({setLoginStatus,setfavLogin}) {
  const NoOfVisitsObj = useContext(NoOfVisitsContext)
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
  let favExists = []
  const [update, setUpdate] = useState(0)
  const addToFav = async (obj) => {
    if(LogedUser.name){
      // back
      const colref = collection(db, "SellPostings")
      const q = query(colref, where("uidOfAddedUser", "==", LogedUser.uid), where("id", "==", obj.id))
      const data = await getDocs(q)
      favExists=[]
      data.forEach((obj) => {
        favExists.push(obj.data())
      
      })
      if (favExists[0]) {
        
        console.log("already favouritd")
        await updateDoc(doc(db,"SellPostings",obj.id),{uidOfAddedUser:null,AddedToFav : false})
        // document.getElementById(ind).firstChild.remove()
      }
      else {
       
        console.log("atelse")
        await updateDoc(doc(db,"SellPostings",obj.id),{uidOfAddedUser:LogedUser.uid,AddedToFav : true})
        // document.getElementById(obj.id).style.backgroundColor="black"
      }
      setUpdate(update+1)
    }
    else{
      setfavLogin(3)
      setLoginStatus((state)=>!state)
    }
   
  }
  useEffect(async () => {
    const docs = await getDocs(collection(db, "SellPostings"));
    docs.forEach(element => {
      arr.push(element.data())
    });
    Set(arr)
  }, [NoOfVisits,update])
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
              {LogedUser.name?x.AddedToFav?<HeartActive/>:<Heart/>:<Heart/>}
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
