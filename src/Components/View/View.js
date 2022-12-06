import React, { useContext, useEffect } from 'react';
import {contextForPostedItem} from '../../Helpers/Helpers'
import {Contextuser} from '../../App'
import './View.css';

function View() {
  const {name,phone,email }= useContext(Contextuser)
  const obj= useContext(contextForPostedItem);
  const Postedobj=obj.PostedItem
  const {imageURL,date,Name,Price,Category
  }=Postedobj;
  useEffect(() => {
   
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
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
