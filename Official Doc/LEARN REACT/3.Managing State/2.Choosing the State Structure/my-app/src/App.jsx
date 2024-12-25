// // Group related state 
// // https://react.dev/learn/choosing-the-state-structure#group-related-state

// import { useState } from 'react';

// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   )
// }


// // Avoid contradictions in state 
// // https://react.dev/learn/choosing-the-state-structure#avoid-contradictions-in-state

// // import { useState } from 'react';

// // export default function FeedbackForm() {
// //   const [text, setText] = useState('');
// //   const [isSending, setIsSending] = useState(false);
// //   const [isSent, setIsSent] = useState(false);

// //   async function handleSubmit(e) {
// //     e.preventDefault();
// //     setIsSending(true);
// //     await sendMessage(text);
// //     setIsSending(false);
// //     setIsSent(true);
// //   }

// //   if (isSent) {
// //     return <h1>Thanks for feedback!</h1>
// //   }

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <p>How was your stay at The Prancing Pony?</p>
// //       <textarea
// //         disabled={isSending}
// //         value={text}
// //         onChange={e => setText(e.target.value)}
// //       />
// //       <br />
// //       <button
// //         disabled={isSending}
// //         type="submit"
// //       >
// //         Send
// //       </button>
// //       {isSending && <p>Sending...</p>}
// //     </form>
// //   );
// // }

// // // Pretend to send a message.
// // function sendMessage(text) {
// //   return new Promise(resolve => {
// //     setTimeout(resolve, 2000);
// //   });
// // }

// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [text, setText] = useState('');
//   const [status, setStatus] = useState('typing');

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus('sending');
//     await sendMessage(text);
//     setStatus('sent');
//   }

//   const isSending = status === 'sending';
//   const isSent = status === 'sent';

//   if (isSent) {
//     return <h1>Thanks for feedback!</h1>
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>How was your stay at The Prancing Pony?</p>
//       <textarea
//         disabled={isSending}
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <br />
//       <button
//         disabled={isSending}
//         type="submit"
//       >
//         Send
//       </button>
//       {isSending && <p>Sending...</p>}
//     </form>
//   );
// }

// // Pretend to send a message.
// function sendMessage(text) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   });
// }


// // Avoid redundant state 
// // https://react.dev/learn/choosing-the-state-structure#avoid-redundant-state

// // import { useState } from 'react';

// // export default function Form() {
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [fullName, setFullName] = useState('');

// //   function handleFirstNameChange(e) {
// //     setFirstName(e.target.value);
// //     setFullName(e.target.value + ' ' + lastName);
// //   }

// //   function handleLastNameChange(e) {
// //     setLastName(e.target.value);
// //     setFullName(firstName + ' ' + e.target.value);
// //   }

// //   return (
// //     <>
// //       <h2>Let’s check you in</h2>
// //       <label>
// //         First name:{' '}
// //         <input
// //           value={firstName}
// //           onChange={handleFirstNameChange}
// //         />
// //       </label>
// //       <label>
// //         Last name:{' '}
// //         <input
// //           value={lastName}
// //           onChange={handleLastNameChange}
// //         />
// //       </label>
// //       <p>
// //         Your ticket will be issued to: <b>{fullName}</b>
// //       </p>
// //     </>
// //   );
// // }


// import { useState } from 'react';

// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const fullName = firstName + ' ' + lastName;

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   return (
//     <>
//       <h2>Let’s check you in</h2>
//       <label>
//         First name:{' '}
//         <input
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:{' '}
//         <input
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <p>
//         Your ticket will be issued to: <b>{fullName}</b>
//       </p>
//     </>
//   );
// }


// // Avoid duplication in state 
// // https://react.dev/learn/choosing-the-state-structure#avoid-duplication-in-state

// // import { useState } from 'react';

// // const initialItems = [
// //   { title: 'pretzels', id: 0 },
// //   { title: 'crispy seaweed', id: 1 },
// //   { title: 'granola bar', id: 2 },
// // ];

// // export default function Menu() {
// //   const [items, setItems] = useState(initialItems);
// //   const [selectedItem, setSelectedItem] = useState(
// //     items[0]
// //   );

// //   return (
// //     <>
// //       <h2>What's your travel snack?</h2>
// //       <ul>
// //         {items.map(item => (
// //           <li key={item.id}>
// //             {item.title}
// //             {' '}
// //             <button onClick={() => {
// //               setSelectedItem(item);
// //             }}>Choose</button>
// //           </li>
// //         ))}
// //       </ul>
// //       <p>You picked {selectedItem.title}.</p>
// //     </>
// //   );
// // }


// import { useState } from 'react';

// const initialItems = [
//   { title: 'pretzels', id: 0 },
//   { title: 'crispy seaweed', id: 1 },
//   { title: 'granola bar', id: 2 },
// ];

// export default function Menu() {
//   const [items, setItems] = useState(initialItems);
//   const [selectedId, setSelectedId] = useState(0);

//   const selectedItem = items.find(item =>
//     item.id === selectedId
//   );

//   function handleItemChange(id, e) {
//     setItems(items.map(item => {
//       if (item.id === id) {
//         return {
//           ...item,
//           title: e.target.value,
//         };
//       } else {
//         return item;
//       }
//     }));
//   }

//   return (
//     <>
//       <h2>What's your travel snack?</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             <input
//               value={item.title}
//               onChange={e => {
//                 handleItemChange(item.id, e)
//               }}
//             />
//             {' '}
//             <button onClick={() => {
//               setSelectedId(item.id);
//             }}>Choose</button>
//           </li>
//         ))}
//       </ul>
//       <p>You picked {selectedItem.title}.</p>
//     </>
//   );
// }


// Avoid deeply nested state 
// https://react.dev/learn/choosing-the-state-structure#avoid-deeply-nested-state

// // import { useState } from 'react';
// // import { initialTravelPlan } from './places.js';

// // function PlaceTree({ place }) {
// //   const childPlaces = place.childPlaces;
// //   return (
// //     <li>
// //       {place.title}
// //       {childPlaces.length > 0 && (
// //         <ol>
// //           {childPlaces.map(place => (
// //             <PlaceTree key={place.id} place={place} />
// //           ))}
// //         </ol>
// //       )}
// //     </li>
// //   );
// // }

// // export default function TravelPlan() {
// //   const [plan, setPlan] = useState(initialTravelPlan);
// //   const planets = plan.childPlaces;
// //   return (
// //     <>
// //       <h2>Places to visit</h2>
// //       <ol>
// //         {planets.map(place => (
// //           <PlaceTree key={place.id} place={place} />
// //         ))}
// //       </ol>
// //     </>
// //   );
// // }

// import { useState } from 'react';
// import { initialTravelPlan } from './places.js';

// function PlaceTree({ id, placesById }) {
//   const place = placesById[id];
//   const childIds = place.childIds;
//   return (
//     <li>
//       {place.title}
//       {childIds.length > 0 && (
//         <ol>
//           {childIds.map(childId => (
//             <PlaceTree
//               key={childId}
//               id={childId}
//               placesById={placesById}
//             />
//           ))}
//         </ol>
//       )}
//     </li>
//   );
// }

// export default function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);
//   const root = plan[0];
//   const planetIds = root.childIds;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planetIds.map(id => (
//           <PlaceTree
//             key={id}
//             id={id}
//             placesById={plan}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }

import { useState } from 'react';
import { initialTravelPlan } from './places.js';

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    // Create a new version of the parent place
    // that doesn't include this child ID.
    const nextParent = {
      ...parent,
      childIds: parent.childIds
        .filter(id => id !== childId)
    };
    // Update the root state object...
    setPlan({
      ...plan,
      // ...so that it has the updated parent.
      [parentId]: nextParent
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button onClick={() => {
        onComplete(parentId, id);
      }}>
        Complete
      </button>
      {childIds.length > 0 &&
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      }
    </li>
  );
}
