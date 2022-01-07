import React, { Component } from 'react'

export default class App extends Component {
  state={
    name:"Geekyshows",
    password:"helloworld"
  };

  handleChange=e=>{
    // console.log(e.target.name);
    // console.log([e.target.name]);
    // this.setState({[e.target.name]:e.target.value});

    const value=e.target.name==="password"?e.target.value.toUpperCase():e.target.value;
    this.setState({[e.target.name]:value})
  }

  render() {
    return (
      <div>
          <form>
            <label>
              Name:
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
            <br/>
            <br/>
            <label>
              Password:
              <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
            </label>
          </form>
      </div>
    )
  }
}