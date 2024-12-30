import {useState} from "react";
const Gallery=()=>{
    var [count,setCount]=useState(0);
   

    return (<section>
        <h1>This is Gallery PAge</h1>
        <h2 style={{textAlign:"center"}}>Learning State Concept</h2>
        <h3>The State of my variable count is {count}</h3>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
    </section>)
}
export default Gallery