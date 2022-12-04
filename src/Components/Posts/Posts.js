import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import Heart from '../../assets/Heart';
import { db } from '../../Firebase/Auth';
import './Post.css';

function Posts() {
  const nav=useNavigate()
  const navToViewPost=()=>{
    nav('/ViewPosts')
  }
 useEffect(() => {
  const getSellPostings= async()=>{
    const q = query(collection(db, "users"), where("uid", "==", ));
    const querySnapshot = await getDocs(q);
    
  }
 
  getSellPostings()
 }, [])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
         
         <div className="card" onClick={navToViewPost}
          >
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
              <span>Tue May 04 2021</span>
            </div>
          </div>
         
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
