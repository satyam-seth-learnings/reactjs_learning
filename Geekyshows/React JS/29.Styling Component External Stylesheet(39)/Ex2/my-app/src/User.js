import React, { Component } from 'react'
import './User.css'

export default class User extends Component {
    render() {
        return <h2 className={this.props.rang}>Hello User</h2>
    }
}