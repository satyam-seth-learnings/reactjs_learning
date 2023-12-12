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
import { LearnConditionalRender } from "./components/LearnConditionalRender";
import { LearnMap } from "./components/LearnMap";
import { LearnInlineCSS } from "./components/LearnInlineCSS";
import { LearnExternalCSS1 } from "./components/LearnExternalCSS1";
import { LearnExternalCSS2 } from "./components/LearnExternalCSS2";
import { LearnCSSModule1 } from "./components/LearnCSSModule1";
import { LearnCSSModule2 } from "./components/LearnCSSModule2";
import { LearnUseOfImage } from "./components/LearnUseOfImage";
import { LearnForm } from "./components/LearnForm";
import { LearnUsingENV } from "./components/LearnUsingENV";

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
      {/* <LearnCustomHook /> */}
      {/* <LearnConditionalRender /> */}
      {/* <LearnMap /> */}
      {/* <LearnInlineCSS /> */}
      {/* <LearnExternalCSS1 />
      <LearnExternalCSS2 /> */}
      {/* <LearnCSSModule1 />
      <LearnCSSModule2 /> */}
      {/* <LearnUseOfImage /> */}
      {/* <LearnForm /> */}
      <LearnUsingENV />
    </>
  )
}

export default App
