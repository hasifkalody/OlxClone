import React, { Fragment, useState,  } from 'react';
import './Create.css';

const Create = () => {;
  const [Name, setName] = useState()
  const [Category, setCategory] = useState();
  const [Price, setPrice] = useState();
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  return (
    <Fragment>
      
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e)=>{setName(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={(e)=>{setCategory(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"
            onChange={(e)=>{setPrice(e.target.value)}} />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={imageURL}
          ></img>
          <form>
            <br />
            <input type="file"  onChange={(e)=>{
            setImage(e.target.files[0]);
            
            setImageURL(URL.createObjectURL(image))
            console.log(imageURL)}}
            />
            <br />
            <button className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
