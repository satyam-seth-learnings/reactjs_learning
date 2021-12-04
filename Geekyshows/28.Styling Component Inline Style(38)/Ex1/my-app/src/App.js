import React, { Component } from 'react'

export default class App extends Component {
    render() {
        // Example-1
        // const btnStyle={
        //     color:'blue',
        //     backgroundColor:'orange'
        // }
        // return (
        //     <div>
        //         <button style={btnStyle}>Button</button>
        //     </div>
        // )

        // Example-2
        // const txtc={
        //     color:"blue"
        // };
        // const txts={
        //     fontSize:"80px"
        // };
        // return <h1 style={{...txtc, ...txts}}>Hello App</h1>

        // Example-3
        const txtc={
            color:"blue"
        };

        return <h1 style={{...txtc, ...{fontSize:"200px"}}}>Hello App</h1>
    }
}
