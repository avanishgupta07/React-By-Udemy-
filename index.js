import React from "react";
import ReactDOM from "react-dom/client";
// // react.create is use before jsx but now in jsx automatically converterd into the ..............


// const heading = React.createElement(
//     "h1",
//     {
//         id: "title 1",
//         key: "h2",

//     },
//     "AVANISH KUAMR GUPTA"
// );

// jsx Start HERE !

const heading2 = (
    <h1 id="title" keys="h2">
        NAMASTE REACT
    </h1>
)
// same as below givne is witjout retrun all matter about the parethresis ...
// const Headercomponents21=()=>{
//     return
// (
//     <div>
//         <h1> Namaste React functuional componnets</h1>
//         <h2> This is a h2 tag </h2>
//     </div>
// )
//};

const Headercomponents2= ()=>(
    <div>
     <title/>
        <h1> Namaste React functuional componnets</h1>
        <h2> This is a h2 tag </h2>
    </div>
);
//console.log(heading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <Headercomponents2 />);         