import React, { Component } from 'react'

export default class App extends Component {
  state={
    value:"Hello there, this is some text in a text area"
  };

  handleChange=e=>{
    // this.setState({value:e.target.value});
    // this.setState({value:e.target.value.toUpperCase()});
    this.setState({value:e.target.value.substr(0,30)});
  }

  render() {
    return (
      <div>
          <form>
            <h2>Controlled by React</h2>
            {/* <textarea value={this.state.value} /> */}
            <textarea value={this.state.value} onChange={this.handleChange}/>
          </form>
      </div>
    )
  }
}