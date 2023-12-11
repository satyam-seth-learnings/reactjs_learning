import { LearnComponent } from "./components/LearnComponent";
import { LearnEvent } from "./components/LearnEvent";
import { LearnJSX } from "./components/LearnJsx";
import { LearnProps } from "./components/LearnProps";
import {LearnLiftingStateUp} from "./components/LearnLiftingStateUp";
import { LearnState } from "./components/LearnState";

function App() {  
  let roll = 101
  const getData = (data) => {
    console.log(data);
  }

  return (
    <>
      {/* <LearnComponent /> */}
      {/* <LearnJSX /> */}
      {/* <LearnProps name="Satyam Seth" roll={roll} /> */}
      {/* <LearnEvent /> */}
      {/* <LearnLiftingStateUp myClick={getData} /> */}
      <LearnState />
    </>
  )
}

export default App
