import React from 'react';
import useCustomCoubnter from './custom';

function App(){
    const data=useCustomCoubnter();
    const data1=useCustomCoubnter();

    return (
        <React.Fragment>
            <h1>Count Up: {data.count}</h1>
            <button type="button" onClick={data.handleIncrement}>Increment</button>

            
            <h1>Count Up: {data1.count}</h1>
            <button type="button" onClick={data1.handleIncrement}>Increment</button>
        </React.Fragment>
    );
}

export default App;