import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    // console.log("value added", Math.random());
    // console.log("clicked", Math.random());
    
    // counter = counter + 1;
    // setCounter(counter);
    
    // setCounter(counter + 1);
    // console.log("clicked", counter);


    // assignment (maximum possible value of counter is 20)
    if(counter < 20){
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    // setCounter(counter - 1);

    // assignment (counter must me non negative)
    if(counter !== 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
