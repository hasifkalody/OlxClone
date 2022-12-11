// import { collection, getDocs, query, where } from 'firebase/firestore';
import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../Firebase/Auth';
import {contextForPostedItem} from '../../Helpers/Helpers'
import {Contextuser} from '../../App'
import './View.css';

function View() {
  const [objpostedUser, setobjpostedUser] = useState({});
  const {name,email,phone}=objpostedUser
  const obj= useContext(contextForPostedItem);
  const LogedUser= useContext(Contextuser);
  const Postedobj=obj.PostedItem
  const {imageURL,date,Name,Price,Category,uid
  }=Postedobj;
  const arr=[]
  useEffect(async() => {
    const GetPostedUser= async ()=>{
      const q= query(collection(db,"users"),where("uid","==",uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(element => {
        arr.push(element.data())
      });
    }
    GetPostedUser()
    setobjpostedUser(arr[0])
    console.log(objpostedUser)
  }, [])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={imageURL}
          alt="Item To Sell"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {Price} </p>
          <span>{Name}</span>
          <p>{Category}</p>
          <span>{date}</span>
        </div>
        <div className="contactDetails">
          <p>{(LogedUser.uid==uid)?"You": name}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
