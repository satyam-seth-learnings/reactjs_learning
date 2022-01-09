import React, { Component } from 'react';
import User from './User';

export default class App extends Component {
  //   render() {
  //     return <User/>
  // }

  render() {
    return (
      <React.StrictMode>
        <User/>
      </React.StrictMode>
    )
  }
}
