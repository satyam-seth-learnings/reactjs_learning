import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);

    this.backRef=null;
    this.setBackRef=element=>{
      this.backRef=element;
    }
  }

  componentDidMount=()=>{
    if(this.backRef){
      this.backRef.focus();
    }
  }

  render() {
    return (
      <form>
        Name: <input type="text" />
        <br/>
        <br/>
        Passowrd: <input type="text" />
        <br/>
        <br/>
        Address: <input type="text" ref={this.setBackRef} />
      </form>
    )
  }
}