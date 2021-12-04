import React, { Component } from 'react'

export default class App extends Component {
    render() {
        // Example-1
        // const arr=[10,20,30,40];
        // return (
        //     <ul>
        //        <li>{arr[0]*2}</li>
        //        <li>{arr[1]*2}</li>
        //        <li>{arr[2]*2}</li>
        //        <li>{arr[3]*2}</li>
        //     </ul>
        // )

        // Example-2
        // const arr=[10,20,30,40];
        // const newArr=arr.map((num)=>{
        //     console.log("Num = ", num);
        //     return <li>{num*2}</li>;
        // });
        // console.log("OldArray = ", arr);
        // console.log("NewArray = ", newArr);
        // return (
        //     <ul>
        //         {newArr}
        //     </ul>
        // );

        // Example-3
        // const arr=[10,20,30,40];
        // return (
        //     <ul>
        //         {arr.map(num=><li>{num}</li>)}
        //         {arr.map((num)=>{
        //             return <li>{num}</li>;
        //         })}
        //     </ul>
        // );

        // Example-4
        const arr=this.props.numbers;
        return (
            <ul>
                {arr.map(num=>(<li>{num}</li>))}
            </ul>
        );
    }
}