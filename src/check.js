import { useEffect, useState } from "react";
export default function Timer() {
    const [count, setCount] = useState(1);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count+1);
      }, 1000);
      console.log("Hi!")
    },[count]);
  
    return <h1>I have rendered {count} times!</h1>;
  }