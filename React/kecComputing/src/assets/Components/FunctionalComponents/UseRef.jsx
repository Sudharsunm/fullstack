import { useEffect, useRef, useState } from "react"

var UseRef=()=>{
    var [text,setText]=useState("")
    var prevText=useRef("");
    useEffect(()=>{
        prevText.current=text;
    },[text])
    return (
        <section>
            <h1>This is an example of useRef</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h2>My currrent Render is {text}</h2>
            <h3>MY previous Render is {prevText.current}</h3>
        </section>
    )
}
export default UseRef