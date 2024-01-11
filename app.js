import React from "react";
import ReactDOM from "react-dom/client"

// React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1",{id:"heading"}, "Namaste React By Fake Er. Vivek Kumar");

// JSX - is not HTML in side javascrit,
// its html like or Xml like syntax
// jsx is just a syntax
// JSX syntax is different and React syntax is difference

console.log(heading)

const jsxHeading = <h1 id="heading">Namste React using JSX </h1>
console.log(jsxHeading)

const vivek = ReactDOM.createRoot(document.getElementById("root"));

vivek.render(heading)