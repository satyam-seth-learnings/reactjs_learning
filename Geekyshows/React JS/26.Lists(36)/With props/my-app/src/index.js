import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Example-1,2,3
// ReactDOM.render(<App/>,document.getElementById("root"));

// Exapmle-4 
const arrValues=[10,20,30,40];

ReactDOM.render(<App numbers={arrValues}/>,document.getElementById("root"));