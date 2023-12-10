import React, { Component } from 'react'

export default class App extends Component {
  state={
    // value:"Geekyshows"
    value:""
  }

  handleChange=(e)=>{
    // console.log("Change");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    // this.setState({value:e.target.value})
    // this.setState({value:e.target.value.toUpperCase()})
    this.setState({value:e.target.value.toUpperCase().substr(0,10)})
  }

  render() {
    return (
      <div>
          <form>
            <h2>Controlled by React</h2>
            {/* <input type="text" value="GeekyShows" /> */}
            {/* <input type="text" defaultValue="GeekyShows" /> */}
            
            {/* <input type="text" value={this.state.value} /> */}
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </form>
      </div>
    )
  }
}