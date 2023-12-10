import React, { Component } from 'react';
import User from "./User";
import {Provider} from './Context';

export default class App extends Component {
  render() {
    return (
      // <Provider value={"GeekyShows"}>
      //   <User/>
      // </Provider>  
      <User/>
      )
    }
}