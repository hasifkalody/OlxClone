
import {query, getDocs, collection,where,doc, updateDoc,arrayUnion,arrayRemove} from "firebase/firestore";
// import {getStorage, ref, uploadBytes, getDownloadURL,} from 'firebase/storage';
import { db } from '../Firebase/Auth'



import { createContext, useState } from "react";
const contextForPostedItem=createContext()
const NoOfVisitsContext=createContext()
const cntxtCmngFrmFldOprtn= createContext()

const FetchDate=Date=>{
    const Day=Date.getDate()
    const Month=Date.getMonth()+1
    const Year=Date.getFullYear()
    const Hour=Date.getHours()
    const Minute=Date.getMinutes()
    const Second=Date.getSeconds()
    return `${Day}/${Month}/${Year}/${Hour}:${Minute}:${Second}`
};

const PostedItemContext=({children})=>{
    const [PostedItem, setPostedItem] = useState({})
    return(
        <contextForPostedItem.Provider value={{PostedItem, setPostedItem}}>
        {children}
        </contextForPostedItem.Provider>
    )
   

}
const NoOfVisits=({children})=>{
    const [NoOfVisits, setNoOfVisits] = useState(1)
    return(
        <NoOfVisitsContext.Provider value={{NoOfVisits, setNoOfVisits}}>
        {children}
        </NoOfVisitsContext.Provider>
    )
   

}




 const addToFav = async (obj,LogedUser,update, setUpdate,setfavLogin,setLoginStatus,setCmngFrmFldOprtn) => {
  let favExists = []
    if(LogedUser.name){
      
      const colref = collection(db, "SellPostings")
      const q = query(colref, where("id", "==", obj.id), where("uidsFvrtdUsrs","array-contains", LogedUser.uid))
      const data = await getDocs(q)
      favExists=[]
      data.forEach((obj) => {
        favExists.push(obj.data())
      
      })
      if (favExists[0]) {
        
        console.log("already favouritd")
        await updateDoc(doc(db,"SellPostings",obj.id),{uidsFvrtdUsrs: arrayRemove(LogedUser.uid)})
        // document.getElementById(ind).firstChild.remove()
      }
      else {
       
        console.log("atelse")
        await updateDoc(doc(db,"SellPostings",obj.id),{uidsFvrtdUsrs: arrayUnion(LogedUser.uid)})
        // document.getElementById(obj.id).style.backgroundColor="black"
      }
      setUpdate(update+1)
    }
    else{
      setfavLogin(3)
      setLoginStatus((state)=>!state);
      setCmngFrmFldOprtn({status:true,item:obj})
    }
   
  }

  const FrmFldOprtn=({children})=>{
    const [CmngFrmFldOprtn, setCmngFrmFldOprtn] = useState({})
  return(
    <cntxtCmngFrmFldOprtn.Provider value={{CmngFrmFldOprtn,setCmngFrmFldOprtn}}>
      {children}
    </cntxtCmngFrmFldOprtn.Provider>
  )

  }

export {FetchDate,PostedItemContext,contextForPostedItem,NoOfVisitsContext,NoOfVisits,addToFav, FrmFldOprtn,cntxtCmngFrmFldOprtn}