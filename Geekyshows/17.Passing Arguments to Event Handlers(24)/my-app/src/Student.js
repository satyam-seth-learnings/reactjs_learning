import React, { Component } from 'react';

class Student extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Rahul",
            roll:this.props.roll
        };
    }
    handleClick=()=>{
        // console.log("Button Clicked",this);

        // this.setState({name:'Jai', roll:"105"});

        // this.setState(function(state,props){
        //     // console.log(state);
        //     // console.log(state.name);
        //     // console.log(props);
        //     console.log(props.roll);
        // });

        this.setState((state,props)=>{
            console.log(state);
            console.log(props);
        });
    }
    render(){
        return (
            <div>
                <h1>Hello, {this.state.name} Your Roll Number is {this.state.roll}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default Student;