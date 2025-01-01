// // State is tied to a position in the render tree 
// // https://react.dev/learn/preserving-and-resetting-state#state-is-tied-to-a-position-in-the-tree

// // import { useState } from 'react';

// // export default function App() {
// //   const counter = <Counter />;
// //   return (
// //     <div>
// //       {counter}
// //       {counter}
// //     </div>
// //   );
// // }

// // function Counter() {
// //   const [score, setScore] = useState(0);
// //   const [hover, setHover] = useState(false);

// //   let className = 'counter';
// //   if (hover) {
// //     className += ' hover';
// //   }

// //   return (
// //     <div
// //       className={className}
// //       onPointerEnter={() => setHover(true)}
// //       onPointerLeave={() => setHover(false)}
// //     >
// //       <h1>{score}</h1>
// //       <button onClick={() => setScore(score + 1)}>
// //         Add one
// //       </button>
// //     </div>
// //   );
// // }


// import { useState } from 'react';

// export default function App() {
//   const [showB, setShowB] = useState(true);
//   return (
//     <div>
//       <Counter />
//       {showB && <Counter />} 
//       <label>
//         <input
//           type="checkbox"
//           checked={showB}
//           onChange={e => {
//             setShowB(e.target.checked)
//           }}
//         />
//         Render the second counter
//       </label>
//     </div>
//   );
// }

// function Counter() {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }


// // Same component at the same position preserves state 
// // https://react.dev/learn/preserving-and-resetting-state#same-component-at-the-same-position-preserves-state

// import { useState } from 'react';

// export default function App() {
//   const [isFancy, setIsFancy] = useState(false);
//   return (
//     <div>
//       {isFancy ? (
//         <Counter isFancy={true} /> 
//       ) : (
//         <Counter isFancy={false} /> 
//       )}
//       <label>
//         <input
//           type="checkbox"
//           checked={isFancy}
//           onChange={e => {
//             setIsFancy(e.target.checked)
//           }}
//         />
//         Use fancy styling
//       </label>
//     </div>
//   );
// }

// function Counter({ isFancy }) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }
//   if (isFancy) {
//     className += ' fancy';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }


// // Different components at the same position reset state 
// // https://react.dev/learn/preserving-and-resetting-state#different-components-at-the-same-position-reset-state

// // import { useState } from 'react';

// // export default function App() {
// //   const [isPaused, setIsPaused] = useState(false);
// //   return (
// //     <div>
// //       {isPaused ? (
// //         <p>See you later!</p> 
// //       ) : (
// //         <Counter /> 
// //       )}
// //       <label>
// //         <input
// //           type="checkbox"
// //           checked={isPaused}
// //           onChange={e => {
// //             setIsPaused(e.target.checked)
// //           }}
// //         />
// //         Take a break
// //       </label>
// //     </div>
// //   );
// // }

// // function Counter() {
// //   const [score, setScore] = useState(0);
// //   const [hover, setHover] = useState(false);

// //   let className = 'counter';
// //   if (hover) {
// //     className += ' hover';
// //   }

// //   return (
// //     <div
// //       className={className}
// //       onPointerEnter={() => setHover(true)}
// //       onPointerLeave={() => setHover(false)}
// //     >
// //       <h1>{score}</h1>
// //       <button onClick={() => setScore(score + 1)}>
// //         Add one
// //       </button>
// //     </div>
// //   );
// // }

// import { useState } from 'react';

// export default function App() {
//   const [isFancy, setIsFancy] = useState(false);
//   return (
//     <div>
//       {isFancy ? (
//         <div>
//           <Counter isFancy={true} /> 
//         </div>
//       ) : (
//         <section>
//           <Counter isFancy={false} />
//         </section>
//       )}
//       <label>
//         <input
//           type="checkbox"
//           checked={isFancy}
//           onChange={e => {
//             setIsFancy(e.target.checked)
//           }}
//         />
//         Use fancy styling
//       </label>
//     </div>
//   );
// }

// function Counter({ isFancy }) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }
//   if (isFancy) {
//     className += ' fancy';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }


// // Resetting state at the same position 
// // https://react.dev/learn/preserving-and-resetting-state#resetting-state-at-the-same-position


// // // import { useState } from 'react';

// // // export default function Scoreboard() {
// // //   const [isPlayerA, setIsPlayerA] = useState(true);
// // //   return (
// // //     <div>
// // //       {isPlayerA ? (
// // //         <Counter person="Taylor" />
// // //       ) : (
// // //         <Counter person="Sarah" />
// // //       )}
// // //       <button onClick={() => {
// // //         setIsPlayerA(!isPlayerA);
// // //       }}>
// // //         Next player!
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // // function Counter({ person }) {
// // //   const [score, setScore] = useState(0);
// // //   const [hover, setHover] = useState(false);

// // //   let className = 'counter';
// // //   if (hover) {
// // //     className += ' hover';
// // //   }

// // //   return (
// // //     <div
// // //       className={className}
// // //       onPointerEnter={() => setHover(true)}
// // //       onPointerLeave={() => setHover(false)}
// // //     >
// // //       <h1>{person}'s score: {score}</h1>
// // //       <button onClick={() => setScore(score + 1)}>
// // //         Add one
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // // Option 1: Rendering a component in different positions 
// // import { useState } from 'react';

// // export default function Scoreboard() {
// //   const [isPlayerA, setIsPlayerA] = useState(true);
// //   return (
// //     <div>
// //       {isPlayerA &&
// //         <Counter person="Taylor" />
// //       }
// //       {!isPlayerA &&
// //         <Counter person="Sarah" />
// //       }
// //       <button onClick={() => {
// //         setIsPlayerA(!isPlayerA);
// //       }}>
// //         Next player!
// //       </button>
// //     </div>
// //   );
// // }

// // function Counter({ person }) {
// //   const [score, setScore] = useState(0);
// //   const [hover, setHover] = useState(false);

// //   let className = 'counter';
// //   if (hover) {
// //     className += ' hover';
// //   }

// //   return (
// //     <div
// //       className={className}
// //       onPointerEnter={() => setHover(true)}
// //       onPointerLeave={() => setHover(false)}
// //     >
// //       <h1>{person}'s score: {score}</h1>
// //       <button onClick={() => setScore(score + 1)}>
// //         Add one
// //       </button>
// //     </div>
// //   );
// // }

// // Option 2: Resetting state with a key 
// // https://react.dev/learn/preserving-and-resetting-state#option-2-resetting-state-with-a-key

// import { useState } from 'react';

// export default function Scoreboard() {
//   const [isPlayerA, setIsPlayerA] = useState(true);
//   return (
//     <div>
//       {isPlayerA ? (
//         <Counter key="Taylor" person="Taylor" />
//       ) : (
//         <Counter key="Sarah" person="Sarah" />
//       )}
//       <button onClick={() => {
//         setIsPlayerA(!isPlayerA);
//       }}>
//         Next player!
//       </button>
//     </div>
//   );
// }

// function Counter({ person }) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{person}'s score: {score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }


// Resetting a form with a key 
// https://react.dev/learn/preserving-and-resetting-state#resetting-a-form-with-a-key

// import { useState } from 'react';
// import Chat from './Chat';
// import ContactList from './ContactList';

// export default function Messenger() {
//   const [to, setTo] = useState(contacts[0]);
//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedContact={to}
//         onSelect={contact => setTo(contact)}
//       />
//       <Chat contact={to} />
//     </div>
//   )
// }

// const contacts = [
//   { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
//   { id: 1, name: 'Alice', email: 'alice@mail.com' },
//   { id: 2, name: 'Bob', email: 'bob@mail.com' }
// ];


import { useState } from 'react';
import Chat from './Chat';
import ContactList from './ContactList';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </div>
  )
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
