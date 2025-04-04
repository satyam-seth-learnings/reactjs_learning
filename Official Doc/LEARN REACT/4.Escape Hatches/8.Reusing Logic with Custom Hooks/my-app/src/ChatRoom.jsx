// // Passing reactive values between Hooks 
// // https://react.dev/learn/reusing-logic-with-custom-hooks#passing-reactive-values-between-hooks

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';
// import { showNotification } from './notifications.js';

// export default function ChatRoom({ roomId }) {
//   const [serverUrl, setServerUrl] = useState('https://localhost:1234');

//   useEffect(() => {
//     const options = {
//       serverUrl: serverUrl,
//       roomId: roomId
//     };
//     const connection = createConnection(options);
//     connection.on('message', (msg) => {
//       showNotification('New message: ' + msg);
//     });
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId, serverUrl]);

//   return (
//     <>
//       <label>
//         Server URL:
//         <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
//       </label>
//       <h1>Welcome to the {roomId} room!</h1>
//     </>
//   );
// }

// Passing event handlers to custom Hooks 
// https://react.dev/learn/reusing-logic-with-custom-hooks#passing-event-handlers-to-custom-hooks

import { useState } from 'react';
import { useChatRoom } from './useChatRoom.js';
import { showNotification } from './notifications.js';

export default function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl,
    onReceiveMessage(msg) {
      showNotification('New message: ' + msg);
    }
  });

  return (
    <>
      <label>
        Server URL:
        <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
