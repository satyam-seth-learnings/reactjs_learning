// // Step 1: Trigger a render 
// // https://react.dev/learn/render-and-commit#step-1-trigger-a-render

// export default function Image() {
//   return (
//     <img
//       src="https://i.imgur.com/ZF6s192.jpg"
//       alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
//     />
//   );
// }


// // Step 2: React renders your components
// // https://react.dev/learn/render-and-commit#step-2-react-renders-your-components
// export default function Gallery() {
//   return (
//     <section>
//       <h1>Inspiring Sculptures</h1>
//       <Image />
//       <Image />
//       <Image />
//     </section>
//   );
// }

// function Image() {
//   return (
//     <img
//       src="https://i.imgur.com/ZF6s192.jpg"
//       alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
//     />
//   );
// }


// Step 3: React commits changes to the DOM
// https://react.dev/learn/render-and-commit#step-3-react-commits-changes-to-the-dom

import { useState, useEffect } from 'react';
import Clock from './Clock.jsx';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  return (
    <Clock time={time.toLocaleTimeString()} />
  );
}

