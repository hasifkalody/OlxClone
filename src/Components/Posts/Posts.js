import { addDoc, collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Heart from '../../assets/Heart';
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
  const favExists = []
  const addToFav = async (obj) => {
    if(LogedUser.name){
      const colref = collection(db, "favourites")
      const q = query(colref, where("uidOfAddedUser", "==", LogedUser.uid), where("Name", "==", obj.Name))
      const data = await getDocs(q)
      data.forEach((obj) => {
        favExists.push(obj.data())
      })
      if (favExists[0]) {
  
      }
      else {
        console.log("atelse")
        obj.uidOfAddedUser = LogedUser.uid
        await addDoc(colref, obj)
      }
  
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
  }, [NoOfVisits])
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
              <div className="favorite" onClick={() => { addToFav(x) }}>
                <Heart></Heart>
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
