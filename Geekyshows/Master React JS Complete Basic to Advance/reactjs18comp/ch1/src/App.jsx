import { LearnComponent } from "./components/LearnComponent";
import { LearnEvent } from "./components/LearnEvent";
import { LearnJSX } from "./components/LearnJsx";
import { LearnProps } from "./components/LearnProps";

function App() {  
  let roll = 101


  return (
    <>
      {/* <LearnComponent /> */}
      {/* <LearnJSX /> */}
      {/* <LearnProps name="Satyam Seth" roll={roll} /> */}
      <LearnEvent />
    </>
  )
}

export default App
