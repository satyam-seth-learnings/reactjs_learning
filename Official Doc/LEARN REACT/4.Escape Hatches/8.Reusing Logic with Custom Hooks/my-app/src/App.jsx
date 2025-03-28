// // // Custom Hooks: Sharing logic between components 
// // // https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components

// // import { useState, useEffect } from 'react';

// // export default function StatusBar() {
// //   const [isOnline, setIsOnline] = useState(true);
// //   useEffect(() => {
// //     function handleOnline() {
// //       setIsOnline(true);
// //     }
// //     function handleOffline() {
// //       setIsOnline(false);
// //     }
// //     window.addEventListener('online', handleOnline);
// //     window.addEventListener('offline', handleOffline);
// //     return () => {
// //       window.removeEventListener('online', handleOnline);
// //       window.removeEventListener('offline', handleOffline);
// //     };
// //   }, []);

// //   return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
// // }

// import { useState, useEffect } from 'react';

// export default function SaveButton() {
//   const [isOnline, setIsOnline] = useState(true);
//   useEffect(() => {
//     function handleOnline() {
//       setIsOnline(true);
//     }
//     function handleOffline() {
//       setIsOnline(false);
//     }
//     window.addEventListener('online', handleOnline);
//     window.addEventListener('offline', handleOffline);
//     return () => {
//       window.removeEventListener('online', handleOnline);
//       window.removeEventListener('offline', handleOffline);
//     };
//   }, []);

//   function handleSaveClick() {
//     console.log('✅ Progress saved');
//   }

//   return (
//     <button disabled={!isOnline} onClick={handleSaveClick}>
//       {isOnline ? 'Save progress' : 'Reconnecting...'}
//     </button>
//   );
// }


// // Extracting your own custom Hook from a component 
// // https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component

// import { useOnlineStatus } from './useOnlineStatus.js';

// function StatusBar() {
//   const isOnline = useOnlineStatus();
//   return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
// }

// function SaveButton() {
//   const isOnline = useOnlineStatus();

//   function handleSaveClick() {
//     console.log('✅ Progress saved');
//   }

//   return (
//     <button disabled={!isOnline} onClick={handleSaveClick}>
//       {isOnline ? 'Save progress' : 'Reconnecting...'}
//     </button>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <SaveButton />
//       <StatusBar />
//     </>
//   );
// }

// // Custom Hooks let you share stateful logic, not state itself 
// // https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-let-you-share-stateful-logic-not-state-itself

// // import { useState } from 'react';

// // export default function Form() {
// //   const [firstName, setFirstName] = useState('Mary');
// //   const [lastName, setLastName] = useState('Poppins');

// //   function handleFirstNameChange(e) {
// //     setFirstName(e.target.value);
// //   }

// //   function handleLastNameChange(e) {
// //     setLastName(e.target.value);
// //   }

// //   return (
// //     <>
// //       <label>
// //         First name:
// //         <input value={firstName} onChange={handleFirstNameChange} />
// //       </label>
// //       <label>
// //         Last name:
// //         <input value={lastName} onChange={handleLastNameChange} />
// //       </label>
// //       <p><b>Good morning, {firstName} {lastName}.</b></p>
// //     </>
// //   );
// // }

// import { useFormInput } from './useFormInput.js';

// export default function Form() {
//   const firstNameProps = useFormInput('Mary');
//   const lastNameProps = useFormInput('Poppins');

//   return (
//     <>
//       <label>
//         First name:
//         <input {...firstNameProps} />
//       </label>
//       <label>
//         Last name:
//         <input {...lastNameProps} />
//       </label>
//       <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
//     </>
//   );
// }


// // Passing reactive values between Hooks 
// // https://react.dev/learn/reusing-logic-with-custom-hooks#passing-reactive-values-between-hooks

// import { useState } from 'react';
// import ChatRoom from './ChatRoom.jsx';

// export default function App() {
//   const [roomId, setRoomId] = useState('general');
//   return (
//     <>
//       <label>
//         Choose the chat room:{' '}
//         <select
//           value={roomId}
//           onChange={e => setRoomId(e.target.value)}
//         >
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <hr />
//       <ChatRoom
//         roomId={roomId}
//       />
//     </>
//   );
// }


// // Passing event handlers to custom Hooks 
// // https://react.dev/learn/reusing-logic-with-custom-hooks#passing-event-handlers-to-custom-hooks

// import { useState } from 'react';
// import ChatRoom from './ChatRoom.jsx';

// export default function App() {
//   const [roomId, setRoomId] = useState('general');
//   return (
//     <>
//       <label>
//         Choose the chat room:{' '}
//         <select
//           value={roomId}
//           onChange={e => setRoomId(e.target.value)}
//         >
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <hr />
//       <ChatRoom
//         roomId={roomId}
//       />
//     </>
//   );
// }

// Custom Hooks help you migrate to better patterns 
// https://react.dev/learn/reusing-logic-with-custom-hooks#when-to-use-custom-hooks

// import { useOnlineStatus } from './useOnlineStatus.js';

// function StatusBar() {
//   const isOnline = useOnlineStatus();
//   return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
// }

// function SaveButton() {
//   const isOnline = useOnlineStatus();

//   function handleSaveClick() {
//     console.log('✅ Progress saved');
//   }

//   return (
//     <button disabled={!isOnline} onClick={handleSaveClick}>
//       {isOnline ? 'Save progress' : 'Reconnecting...'}
//     </button>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <SaveButton />
//       <StatusBar />
//     </>
//   );
// }

// There is more than one way to do it 
// https://react.dev/learn/reusing-logic-with-custom-hooks#there-is-more-than-one-way-to-do-it

// // import { useState, useEffect, useRef } from 'react';

// // function Welcome() {
// //   const ref = useRef(null);

// //   useEffect(() => {
// //     const duration = 1000;
// //     const node = ref.current;

// //     let startTime = performance.now();
// //     let frameId = null;

// //     function onFrame(now) {
// //       const timePassed = now - startTime;
// //       const progress = Math.min(timePassed / duration, 1);
// //       onProgress(progress);
// //       if (progress < 1) {
// //         // We still have more frames to paint
// //         frameId = requestAnimationFrame(onFrame);
// //       }
// //     }

// //     function onProgress(progress) {
// //       node.style.opacity = progress;
// //     }

// //     function start() {
// //       onProgress(0);
// //       startTime = performance.now();
// //       frameId = requestAnimationFrame(onFrame);
// //     }

// //     function stop() {
// //       cancelAnimationFrame(frameId);
// //       startTime = null;
// //       frameId = null;
// //     }

// //     start();
// //     return () => stop();
// //   }, []);

// //   return (
// //     <h1 className="welcome" ref={ref}>
// //       Welcome
// //     </h1>
// //   );
// // }

// // export default function App() {
// //   const [show, setShow] = useState(false);
// //   return (
// //     <>
// //       <button onClick={() => setShow(!show)}>
// //         {show ? 'Remove' : 'Show'}
// //       </button>
// //       <hr />
// //       {show && <Welcome />}
// //     </>
// //   );
// // }

// import { useState, useRef } from 'react';
// import { useFadeIn } from './useFadeIn.js';

// function Welcome() {
//   const ref = useRef(null);

//   useFadeIn(ref, 1000);

//   return (
//     <h1 className="welcome" ref={ref}>
//       Welcome
//     </h1>
//   );
// }

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Remove' : 'Show'}
//       </button>
//       <hr />
//       {show && <Welcome />}
//     </>
//   );
// }

import { useState } from 'react';
import './welcome.css';

function Welcome() {
  return (
    <h1 className="welcome">
      Welcome
    </h1>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      <hr />
      {show && <Welcome />}
    </>
  );
}
