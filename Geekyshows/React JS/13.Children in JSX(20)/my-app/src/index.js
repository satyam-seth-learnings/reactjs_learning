import React from "react";
import ReactDOM from "react-dom";
import Student from "./Student";

// Rendering Component
// ReactDOM.render(<Student/>,document.getElementById("root"));
// ReactDOM.render(<Student>I am Child</Student>,document.getElementById("root"));
ReactDOM.render(<Student>{100+2}</Student>,document.getElementById("root"));