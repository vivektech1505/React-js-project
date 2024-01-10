import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {className : "heading"}, "Welcome to my React js Classes");

const vivek = ReactDOM.createRoot(document.getElementById("root"));

vivek.render(heading)