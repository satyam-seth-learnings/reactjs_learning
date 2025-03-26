// // Effects run whenever synchronization is needed
// // https://react.dev/learn/separating-events-from-effects#effects-run-whenever-synchronization-is-needed

// export function sendMessage(message) {
//   console.log('🔵 You sent: ' + message);
// }

// export function createConnection(serverUrl, roomId) {
//   // A real implementation would actually connect to the server
//   return {
//     connect() {
//       console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
//     },
//     disconnect() {
//       console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
//     }
//   };
// }

// // Extracting non-reactive logic out of Effects
// // https://react.dev/learn/separating-events-from-effects#extracting-non-reactive-logic-out-of-effects

export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  let connectedCallback;
  let timeout;
  return {
    connect() {
      timeout = setTimeout(() => {
        if (connectedCallback) {
          connectedCallback();
        }
      }, 100);
    },
    on(event, callback) {
      if (connectedCallback) {
        throw Error('Cannot add the handler twice.');
      }
      if (event !== 'connected') {
        throw Error('Only "connected" event is supported.');
      }
      connectedCallback = callback;
    },
    disconnect() {
      clearTimeout(timeout);
    }
  };
}