import React, { Component } from 'react'

class Sonam extends Component {
    state={
        gunshots:0
    };

    handleGunshots=()=>{
        this.setState({gunshots:this.state.gunshots+1});
    };

    render() {
        return (
            <div>
                <h3 onMouseOver={this.handleGunshots}>Sonam Gunshots: {this.state.gunshots}</h3>
            </div>
        );
    }
}

export default Sonam;