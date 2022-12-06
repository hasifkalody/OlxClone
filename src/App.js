import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {PostedItemContext} from '../src/Helpers/Helpers'



/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login';
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'

// ----------------------to be moved to deperate file-----
import { auth, db} from "./Firebase/Auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import{onAuthStateChanged} from 'firebase/auth';
export const Contextuser=createContext()
// ----------------------to be moved to deperate file-----

function App() {
 
  const [LogedUser, setLogedUser] = useState({})
  useEffect(() => {
    onAuthStateChanged(auth,async (user) => {
      if (user) {
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setLogedUser(doc.data());
        });
        
        }
        else{
          setLogedUser({})
          console.log('User is signed out++++')}
      })

  }, [])
  return (
    <div>
      <Contextuser.Provider value={LogedUser}>
        <PostedItemContext>
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
              <Route path='/sell'>
                <Create/>
              </Route>
              <Route path='/ViewPosts'>
                <ViewPost/>
              </Route>
            </Routes>
          </Router>
        </PostedItemContext>
      </Contextuser.Provider>
      
    </div>
  );
}

export default App;
