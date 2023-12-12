import { LearnComponent } from "./components/LearnComponent";
import { LearnEvent } from "./components/LearnEvent";
import { LearnJSX } from "./components/LearnJsx";
import { LearnProps } from "./components/LearnProps";
import {LearnLiftingStateUp} from "./components/LearnLiftingStateUp";
import { LearnState } from "./components/LearnState";
import { CounterApp } from "./components/CounterApp";
import { LearnUseEffect } from "./components/LearnUseEffect";
import { LearnUseMemo } from "./components/LearnUseMemo";
import { LearnUseCallback } from "./components/LearnUseCallback";
import { LearnCustomHook } from "./components/LearnCustomHook";

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
      {/* <LearnState /> */}
      {/* <CounterApp /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnUseMemo /> */}
      {/* <LearnUseCallback /> */}
      <LearnCustomHook />
      
    </>
  )
}

export default App
