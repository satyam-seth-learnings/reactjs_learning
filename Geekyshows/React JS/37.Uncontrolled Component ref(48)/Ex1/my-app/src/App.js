import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    // creating ref
    this.textInput=React.createRef();
  }

  componentDidMount=()=>{
    // console.log(this.textInput);
    // console.log(this.textInput.current);
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <form>
          Name: <input type="text" />
          <br/>
          <br/>
          Passowrd: <input type="text" ref={this.textInput} />
          <br/>
          <br/>
          Address: <input type="text" />
        </form>
      </div>
    )
  }
}