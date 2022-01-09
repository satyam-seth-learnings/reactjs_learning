import React, { Component } from 'react';
import { MyContext } from './Context';

export default class Guest extends Component {
    static contextType=MyContext;

    componentDidMount=()=>{
        console.log(this.context);
    }

    render() {
        // console.log(this.context);
        // return (
        //     <div>
        //         <h3>Guest Component</h3>
        //         <h4> 
        //             Name: {this.context.data.name} Value: {this.context.data.value}
        //         </h4>
        //         <button onClick={this.context.handleClick}>Change Value</button>
        //     </div>
        // )

        const {name,value}=this.context.data;
        return (
            <div>
                <h3>Guest Component</h3>
                <h4> 
                    Name: {name} Value: {value}
                </h4>
                <button onClick={this.context.handleClick}>Change Value</button>
            </div>
        )
    }
}
