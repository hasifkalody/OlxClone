import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {NoOfVisits, PostedItemContext} from '../src/Helpers/Helpers'
import {FrmFldOprtn} from '../src/Helpers/Helpers'



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
import Ads from './Pages/Ads';
import Favourites from './Pages/Favourites';
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
          <NoOfVisits>
          <FrmFldOprtn>
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
              <Route path='/MyAds'>
                <Ads/>
              </Route>
              <Route path='/Favourites'>
                <Favourites/>
              </Route>
            </Routes>
          </Router>
          </FrmFldOprtn>
          </NoOfVisits>
        </PostedItemContext>
      </Contextuser.Provider>
      
    </div>
  );
}

export default App;
