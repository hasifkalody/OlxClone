import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {collection, getDocs,addDoc, doc, setDoc,deleteDoc  } from 'firebase/firestore/lite';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login';
import Create from './Pages/Create'

function App() {

  useEffect(() => {

  }, [])
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/Signup'>
            <Signup/>
          </Route>
          <Route path='/Login'>
            <Login/>
          </Route>
          <Route path='/Sell'>
            <Create/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
