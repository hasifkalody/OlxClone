import { collection, getDocs} from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Heart from '../../assets/Heart';
import { db } from '../../Firebase/Auth';
import './Post.css';
import {contextForPostedItem, NoOfVisitsContext} from '../../Helpers/Helpers'

function Posts() {
  const NoOfVisitsObj = useContext(NoOfVisitsContext)
  const arr=[]
  const obj = useContext(contextForPostedItem)
  const [AllSellPostings, Set] = useState([])
  const nav=useNavigate()
  const navToViewPost=(item)=>{
    obj.setPostedItem(item)
    nav('/ViewPosts')
  }
  const NoOfVisits=NoOfVisitsObj.NoOfVisits
  useEffect(async() => {
    const docs = await getDocs(collection(db, "SellPostings"));
    await docs.forEach(element => { 
      arr.push(element.data())
    });
    
  console.log("at Useeffect")
  await Set(arr)
  console.log(arr)
  console.log(NoOfVisits)
 },[NoOfVisits])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards" >
         
         {AllSellPostings.map((x)=>
          <div className="card" onClick={()=>{navToViewPost(x)}}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
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
