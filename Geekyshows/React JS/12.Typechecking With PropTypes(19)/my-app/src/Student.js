import React, { Component } from "react";
import PropTypes from "prop-types";

// Function Component
// const Student=props=>{
//     return (
//         <div>
//             <h1>Hello, {props.name}</h1>
//             <h2>Your Roll: {props.roll}</h2>
//         </div>
//     );
// }

// Class Component
class Student extends Component{
    render(){
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>Your Roll: {this.props.roll}</h2>
            </div>
        );
    }
}

Student.propTypes={
    // name:PropTypes.string
    name:PropTypes.string.isRequired,
    roll:PropTypes.number
}

Student.defaultProps={
    name:"Geekyshows"
}

export default Student;