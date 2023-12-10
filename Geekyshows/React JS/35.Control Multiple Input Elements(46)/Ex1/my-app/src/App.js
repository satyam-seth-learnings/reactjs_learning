import React, { Component } from 'react'

export default class App extends Component {
  state={
    name:"Geekyshows",
    password:"helloworld"
  };

  handleName=e=>{
    this.setState({name:e.target.value});
  }

  handlePassword=e=>{
    this.setState({password:e.target.value});
  }

  render() {
    return (
      <div>
          <form>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={this.handleName} />
            </label>
            <br/>
            <br/>
            <label>
              Password:
              <input type="text" value={this.state.password} onChange={this.handlePassword} />
            </label>
          </form>
      </div>
    )
  }
}