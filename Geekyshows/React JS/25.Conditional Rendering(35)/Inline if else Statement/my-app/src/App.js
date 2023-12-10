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

        return (
            <div>
                {isLoggedIn?<User clickData={this.clickLogout}/>:<Guest clickData={this.clickLogin}/>}
            </div>
        );
    }
}