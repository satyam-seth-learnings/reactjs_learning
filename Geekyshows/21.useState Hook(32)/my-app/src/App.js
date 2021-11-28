import React, {useState} from 'react';

function App(){
    // const nameStateVariable=useState("Rahul");
    const [name,setName]=useState("Rahul");
    const [roll,setRoll]=useState(101);
    
    // const name=nameStateVariable[0];
    // const setName=nameStateVariable[1];

    const handleClick=()=>{
        // nameStateVariable[1]("GeekyShows");
        setName("GeekyShows");
        setRoll(105);
    }

    return (
        <React.Fragment>
            {/* <h1>{nameStateVariable[0]}</h1> */}
            <h1>Name: {name}</h1>
            <h1>Roll: {roll}</h1>
            <button type="button" onClick={handleClick}>Change</button>
        </React.Fragment>
    );
}

export default App;