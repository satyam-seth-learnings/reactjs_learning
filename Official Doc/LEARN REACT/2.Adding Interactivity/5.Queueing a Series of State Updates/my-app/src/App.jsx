// // React batches state updates 
// // https://react.dev/learn/queueing-a-series-of-state-updates#react-batches-state-updates

// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 1);
//         setNumber(number + 1);
//         setNumber(number + 1);
//       }}>+3</button>
//     </>
//   )
// }


// // Updating the same state multiple times before the next render 
// // https://react.dev/learn/queueing-a-series-of-state-updates#updating-the-same-state-multiple-times-before-the-next-render

// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(n => n + 1);
//         setNumber(n => n + 1);
//         setNumber(n => n + 1);
//       }}>+3</button>
//     </>
//   )
// }


// // What happens if you update state after replacing it 
// // https://react.dev/learn/queueing-a-series-of-state-updates#what-happens-if-you-update-state-after-replacing-it

// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setNumber(n => n + 1);
//       }}>Increase the number</button>
//     </>
//   )
// }


// What happens if you replace state after updating it 
// https://react.dev/learn/queueing-a-series-of-state-updates#what-happens-if-you-replace-state-after-updating-it

import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setNumber(n => n + 1);
        setNumber(42);
      }}>Increase the number</button>
    </>
  )
}
