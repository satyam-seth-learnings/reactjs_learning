// // Dependencies should match the code
// // https://react.dev/learn/removing-effect-dependencies#dependencies-should-match-the-code

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId }) {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   // }, []); // <-- Fix the mistake here!
//   }, [roomId]);
//   return <h1>Welcome to the {roomId} room!</h1>;
// }

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
//       <ChatRoom roomId={roomId} />
//     </>
//   );
// }

// // To remove a dependency, prove that it’s not a dependency
// // https://react.dev/learn/removing-effect-dependencies#to-remove-a-dependency-prove-that-its-not-a-dependency

// import { useEffect } from 'react';
// import { createConnection } from './chat.js';

// const serverUrl = 'https://localhost:1234';
// const roomId = 'music';

// export default function ChatRoom() {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, []);
//   return <h1>Welcome to the {roomId} room!</h1>;
// }

// // Does some reactive value change unintentionally? 
// // https://react.dev/learn/removing-effect-dependencies#does-some-reactive-value-change-unintentionally

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId }) {
//   const [message, setMessage] = useState('');

//   // Temporarily disable the linter to demonstrate the problem
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const options = {
//     serverUrl: serverUrl,
//     roomId: roomId
//   };

//   useEffect(() => {
//     const connection = createConnection(options);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [options]);

//   return (
//     <>
//       <h1>Welcome to the {roomId} room!</h1>
//       <input value={message} onChange={e => setMessage(e.target.value)} />
//     </>
//   );
// }

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
//       <ChatRoom roomId={roomId} />
//     </>
//   );
// }

// Move dynamic objects and functions inside your Effect 
// https://react.dev/learn/removing-effect-dependencies#move-dynamic-objects-and-functions-inside-your-effect

import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={e => setMessage(e.target.value)} />
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}
