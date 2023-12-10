import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
          {/* <img src={process.env.PUBLIC_URL+"/pic.jpg"} alt="Mypic" width="300px" /> */}
          <img src={process.env.PUBLIC_URL+"/images/pic.png"} alt="Mypic" width="300px" />
      </div>
    )
  }
}