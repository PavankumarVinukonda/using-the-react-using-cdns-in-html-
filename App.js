// const heading = React.createElement("h1",{id:"head"},"hai abhi");

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:'child'},

[React.createElement("h1",{id:"head"},"hello abhi from react"),React.createElement("h1",{id:"head"},"hello abhi from react"),React.createElement("h1",{id:"head"},"hello abhi from react")]),
React.createElement("div",{id:'child1'},

[React.createElement("h1",{id:"head"},"hello abhi from react"),React.createElement("h1",{id:"head"},"hello abhi from react"),React.createElement("h1",{id:"head"},"hello abhi from react")])
])
    


const root = ReactDOM.createRoot(document.getElementById("root"));

    root?.render(parent)