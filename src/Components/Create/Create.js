import React, { Fragment, useState, } from 'react';
import './Create.css';
import {upload} from '../../Firebase/Auth'
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const nav=useNavigate()
  const [Name, setName] = useState()
  const [Category, setCategory] = useState();
  const [Price, setPrice] = useState();
  const [image, setImage] = useState();
  const [uid, setuid] = useState();
  const Handleupload=async()=>{
    await upload(image, Name, Category, Price,uid);
    nav('/')
  }
  return (
    <Fragment>

      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            onChange={(e) => { setName(e.target.value) }}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            onChange={(e) => { setCategory(e.target.value) }}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number" id="fname" name="Price"
            onChange={(e) => { setPrice(e.target.value) }} />
          <br />

          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}
          ></img>

          <br />
          <input type="file" onChange={(e) => {
            setImage(e.target.files[0]);


          }}
          />
          <br />
          <button onClick={Handleupload} className="uploadBtn">upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
