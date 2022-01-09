import React, { Component } from 'react'
import User from "./User";

export const MyContext=React.createContext();

export default class App extends Component {
  // state={
  //   name:'Rahul'
  // }
  state={
    name:'Rahul',
    value:10
  }

  render() {
    return (
      // <MyContext.Provider value={this.state.name}>
      //   <User/>
      // </MyContext.Provider>  
      <MyContext.Provider value={this.state}>
        <User/>
      </MyContext.Provider>  
      )
    }
}