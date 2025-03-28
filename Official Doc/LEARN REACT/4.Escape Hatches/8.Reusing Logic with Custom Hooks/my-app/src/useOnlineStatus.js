// import { useState, useEffect } from 'react';

// export function useOnlineStatus() {
//     const [isOnline, setIsOnline] = useState(true);
//     useEffect(() => {
//         function handleOnline() {
//             setIsOnline(true);
//         }
//         function handleOffline() {
//             setIsOnline(false);
//         }
//         window.addEventListener('online', handleOnline);
//         window.addEventListener('offline', handleOffline);
//         return () => {
//             window.removeEventListener('online', handleOnline);
//             window.removeEventListener('offline', handleOffline);
//         };
//     }, []);
//     return isOnline;
// }

// Custom Hooks help you migrate to better patterns 
// https://react.dev/learn/reusing-logic-with-custom-hooks#when-to-use-custom-hooks

import { useSyncExternalStore } from 'react';

function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    };
}

export function useOnlineStatus() {
    return useSyncExternalStore(
        subscribe,
        () => navigator.onLine, // How to get the value on the client
        () => true // How to get the value on the server
    );
}

