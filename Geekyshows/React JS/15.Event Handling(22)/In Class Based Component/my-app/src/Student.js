import React, { Component } from 'react';

// Class Component
class Student extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Rahul",
            roll:this.props.roll
        }
        // this.handleClick=this.handleClick.bind(this);
    }
    
    // handleClick(){
    //     console.log("Button Clicked",this);
    // }

    handleClick=()=>{
        console.log("Button Clicked",this);
    }

    render(){
        return (
            <div>
                <h1>Hello {this.state.name} Your Roll Number is {this.state.roll}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default Student;