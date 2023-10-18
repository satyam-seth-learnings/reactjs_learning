import { useState } from 'react';
import './App.css';

function App() {
  console.log('App rendered', Math.random());
  // const [value, setValue] = useState(1);
  const [value, setValue] = useState({value: 0});

  const clickMe = () => {
    // console.log('logged');
    // setValue(value + 1);
    // setValue(1);
    // setValue(3);
    // setValue(value + 1);
    setValue({value: 0});
  }

  return (
    <>
      {/* <h1>Main Value: {value}</h1> */}
      <h1>Main Value: {value.value}</h1>
      <button onClick={clickMe}>Click Me</button>
    </>
  );
}

export default App;
