import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement(
    "h1",
    {
        id: "title 1",
    },
    "Namaste Everyone!"
);

const container = React.createElement(
    "h2",
    {
        id: "title"
    },
    "Namaste Everyone!2"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);       