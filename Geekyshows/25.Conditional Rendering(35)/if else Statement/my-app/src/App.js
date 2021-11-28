import React, { Component } from 'react';
import User from './User';
import Guest from './Guest';

export default class App extends Component {
    state={
        isLoggedIn:false
    };

    clickLogin=()=>{
        this.setState({isLoggedIn: true});
    };   

    clickLogout=()=>{
        this.setState({isLoggedIn: false});
    };

    render() {
        const isLoggedIn=this.state.isLoggedIn;
        
        // if(isLoggedIn){
        //     return <User clickData={this.clickLogout}/>;
        // } else{
        //     return <Guest clickData={this.clickLogin}/>;
        // }
        
        let consumer;
        if(isLoggedIn){
            consumer=<User clickData={this.clickLogout}/>;
        } else{
            consumer=<Guest clickData={this.clickLogin}/>;
        }
        return <div>{consumer}</div>;
    }
}