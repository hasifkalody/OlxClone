import { createContext, useState } from "react";
const contextForPostedItem=createContext()
const NoOfVisitsContext=createContext()

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

export {FetchDate,PostedItemContext,contextForPostedItem,NoOfVisitsContext,NoOfVisits}