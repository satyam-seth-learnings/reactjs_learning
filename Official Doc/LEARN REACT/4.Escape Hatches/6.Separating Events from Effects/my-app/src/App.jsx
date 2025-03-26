// // Effects run whenever synchronization is needed
// // https://react.dev/learn/separating-events-from-effects#effects-run-whenever-synchronization-is-needed

// import { useState, useEffect } from 'react';
// import { createConnection, sendMessage } from './chat.js';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId }) {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);

//   function handleSendClick() {
//     sendMessage(message);
//   }

//   return (
//     <>
//       <h1>Welcome to the {roomId} room!</h1>
//       <input value={message} onChange={e => setMessage(e.target.value)} />
//       <button onClick={handleSendClick}>Send</button>
//     </>
//   );
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

// // Extracting non-reactive logic out of Effects
// // https://react.dev/learn/separating-events-from-effects#extracting-non-reactive-logic-out-of-effects

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';
// import { showNotification } from './notifications.js';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId, theme }) {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.on('connected', () => {
//       showNotification('Connected!', theme);
//     });
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId, theme]);

//   return <h1>Welcome to the {roomId} room!</h1>
// }

// export default function App() {
//   const [roomId, setRoomId] = useState('general');
//   const [isDark, setIsDark] = useState(false);
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
//       <label>
//         <input
//           type="checkbox"
//           checked={isDark}
//           onChange={e => setIsDark(e.target.checked)}
//         />
//         Use dark theme
//       </label>
//       <hr />
//       <ChatRoom
//         roomId={roomId}
//         theme={isDark ? 'dark' : 'light'}
//       />
//     </>
//   );
// }

// Declaring an Effect Event
// https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event
import { useState, useEffect } from 'react';
import { experimental_useEffectEvent as useEffectEvent } from 'react';
import { createConnection } from './chat.js';
import { showNotification } from './notifications.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      onConnected();
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);
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
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}
