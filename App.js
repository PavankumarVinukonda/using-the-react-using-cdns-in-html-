// const heading = React.createElement("h1",{id:"head"},"hai abhi");
import React from 'react'
import ReactDOM from "react-dom/client";



// const parent = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:'child'},

// [React.createElement("h1",{id:"head"},"hello abhi from react"),React.createElement("h1",{id:"head"},"hello abhi from react"),React.createElement("h1",{id:"head"},"hello abhi from react")]),
// React.createElement("div",{id:'child1'},

// [React.createElement("h1",{id:"head"},"hello abhi from react"),React.createElement("h1",{id:"head"},"hello abhi from react"),React.createElement("h1",{id:"head"},"hello abhi from react")])
// ])
  

const jsxElement = <h1 id="heading" >hello abhi from react </h1>


const root = ReactDOM.createRoot(document.getElementById("root"));

    root?.render(jsxElement)