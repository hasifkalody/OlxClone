
import {query, getDocs, collection,where,doc, updateDoc,arrayUnion,arrayRemove, deleteDoc} from "firebase/firestore";
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
    const [deleted, setdeleted] = useState('')
    return(
        <contextForPostedItem.Provider value={{PostedItem, setPostedItem,deleted,setdeleted}}>
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




 const addToFav = async (obj,LogedUser,setUpdate,setfavLogin,setLoginStatus,setCmngFrmFldOprtn) => {
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
      setUpdate((state)=>state+1)
    }
    else{
      setfavLogin(3)
      setLoginStatus((state)=>!state);
      setCmngFrmFldOprtn({status:true,item:obj})
    }
   
  }

  const FrmFldOprtn=({children})=>{
    const [CmngFrmFldOprtn, setCmngFrmFldOprtn] = useState({})
    const [favLogin, setfavLogin] = useState(false)
    const [DontShowLogin, setLoginStatus] = useState(true)
    const [update, setUpdate] = useState(0)
    const [ShowDropDown, setShowDropDown] = useState(false)
    const [HmbrgrClickd, setHmbrgrClickd] = useState(false)


  return(
    <cntxtCmngFrmFldOprtn.Provider value={{CmngFrmFldOprtn,setCmngFrmFldOprtn,favLogin, setfavLogin,DontShowLogin, setLoginStatus,update, setUpdate,ShowDropDown, setShowDropDown,HmbrgrClickd, setHmbrgrClickd
    }}>
      {children}
    </cntxtCmngFrmFldOprtn.Provider>
  )

  }
  const FetchCateories= async (Category)=>{
    const q=query(collection(db,"SellPostings"),where("Category","in",Category))
    const data=await getDocs(q)
    const arr=[]
    data.forEach((x)=>{
      arr.push(x.data())
    })
    return arr
  }
const deleteDocument=async(id,f)=>{
 const deleted=await deleteDoc(doc(db,"SellPostings",id))
 console.log("deletion success")
 f()
//  setdeleted((p)=>p+1)
}
const handleHmbrgrClck=(HmbrgrClickd,setHmbrgrClickd)=>{
  setHmbrgrClickd((x)=>!x)
  document.getElementById('hbrgrMenu').classList.remove('HmrgrBottomtoTopAnim')
  if(HmbrgrClickd==true){
      document.getElementById('hbrgrMenu').classList.add('HmrgrBottomtoTopAnim')
      setTimeout(() => {
          document.getElementById('hbrgrMenu').classList.toggle('HmrgrShow')
        }, 180);
      }
      else{
        document.getElementById('hbrgrMenu').classList.toggle('HmrgrShow')  
        }
}
export {FetchDate,PostedItemContext,contextForPostedItem,NoOfVisitsContext,NoOfVisits,addToFav, FrmFldOprtn,cntxtCmngFrmFldOprtn,FetchCateories,deleteDocument,handleHmbrgrClck}