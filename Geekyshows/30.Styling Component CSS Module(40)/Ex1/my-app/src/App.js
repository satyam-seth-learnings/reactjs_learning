import React, { Component } from 'react'
import Styles from './App.module.css'
import User from './User'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className={Styles.txt}>Hello App</h1>
        <User/>
      </React.Fragment>
    )
  }
}
