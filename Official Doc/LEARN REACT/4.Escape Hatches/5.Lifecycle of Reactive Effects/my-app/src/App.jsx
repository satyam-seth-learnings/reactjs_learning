// // How React verifies that your Effect can re-synchronize
// // https://react.dev/learn/lifecycle-of-reactive-effects#how-react-verifies-that-your-effect-can-re-synchronize

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId }) {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);
//   return <h1>Welcome to the {roomId} room!</h1>;
// }

// export default function App() {
//   const [roomId, setRoomId] = useState('general');
//   const [show, setShow] = useState(false);
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
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Close chat' : 'Open chat'}
//       </button>
//       {show && <hr />}
//       {show && <ChatRoom roomId={roomId} />}
//     </>
//   );
// }

// // Effects “react” to reactive values
// // https://react.dev/learn/lifecycle-of-reactive-effects#effects-react-to-reactive-values

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

// function ChatRoom({ roomId }) {
//   const [serverUrl, setServerUrl] = useState('https://localhost:1234');

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId, serverUrl]);

//   return (
//     <>
//       <label>
//         Server URL:{' '}
//         <input
//           value={serverUrl}
//           onChange={e => setServerUrl(e.target.value)}
//         />
//       </label>
//       <h1>Welcome to the {roomId} room!</h1>
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

// // What an Effect with empty dependencies means
// // https://react.dev/learn/lifecycle-of-reactive-effects#what-an-effect-with-empty-dependencies-means

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

// const serverUrl = 'https://localhost:1234';
// const roomId = 'general';

// function ChatRoom() {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, []);
//   return <h1>Welcome to the {roomId} room!</h1>;
// }

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Close chat' : 'Open chat'}
//       </button>
//       {show && <hr />}
//       {show && <ChatRoom />}
//     </>
//   );
// }

// React verifies that you specified every reactive value as a dependency
// https://react.dev/learn/lifecycle-of-reactive-effects#react-verifies-that-you-specified-every-reactive-value-as-a-dependency

import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) { // roomId is reactive
  const [serverUrl, setServerUrl] = useState('https://localhost:1234'); // serverUrl is reactive

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []); // <-- Something's wrong here!

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
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
