// // Step 1: Declare an Effect
// // https://react.dev/learn/synchronizing-with-effects#step-1-declare-an-effect

// // import { useState, useRef, useEffect } from 'react';

// // function VideoPlayer({ src, isPlaying }) {
// //   const ref = useRef(null);

// //   if (isPlaying) {
// //     ref.current.play();  // Calling these while rendering isn't allowed.
// //   } else {
// //     ref.current.pause(); // Also, this crashes.
// //   }

// //   return <video ref={ref} src={src} loop playsInline />;
// // }

// // export default function App() {
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   return (
// //     <>
// //       <button onClick={() => setIsPlaying(!isPlaying)}>
// //         {isPlaying ? 'Pause' : 'Play'}
// //       </button>
// //       <VideoPlayer
// //         isPlaying={isPlaying}
// //         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
// //       />
// //     </>
// //   );
// // }


// import { useState, useRef, useEffect } from 'react';

// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   });

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   return (
//     <>
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }


// // Step 2: Specify the Effect dependencies
// // https://react.dev/learn/synchronizing-with-effects#step-2-specify-the-effect-dependencies

// // // import { useState, useRef, useEffect } from 'react';

// // // function VideoPlayer({ src, isPlaying }) {
// // //   const ref = useRef(null);

// // //   useEffect(() => {
// // //     if (isPlaying) {
// // //       console.log('Calling video.play()');
// // //       ref.current.play();
// // //     } else {
// // //       console.log('Calling video.pause()');
// // //       ref.current.pause();
// // //     }
// // //   });

// // //   return <video ref={ref} src={src} loop playsInline />;
// // // }

// // // export default function App() {
// // //   const [isPlaying, setIsPlaying] = useState(false);
// // //   const [text, setText] = useState('');
// // //   return (
// // //     <>
// // //       <input value={text} onChange={e => setText(e.target.value)} />
// // //       <button onClick={() => setIsPlaying(!isPlaying)}>
// // //         {isPlaying ? 'Pause' : 'Play'}
// // //       </button>
// // //       <VideoPlayer
// // //         isPlaying={isPlaying}
// // //         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
// // //       />
// // //     </>
// // //   );
// // // }


// // import { useState, useRef, useEffect } from 'react';

// // function VideoPlayer({ src, isPlaying }) {
// //   const ref = useRef(null);

// //   useEffect(() => {
// //     if (isPlaying) {
// //       console.log('Calling video.play()');
// //       ref.current.play();
// //     } else {
// //       console.log('Calling video.pause()');
// //       ref.current.pause();
// //     }
// //   }, []); // This causes an error

// //   return <video ref={ref} src={src} loop playsInline />;
// // }

// // export default function App() {
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [text, setText] = useState('');
// //   return (
// //     <>
// //       <input value={text} onChange={e => setText(e.target.value)} />
// //       <button onClick={() => setIsPlaying(!isPlaying)}>
// //         {isPlaying ? 'Pause' : 'Play'}
// //       </button>
// //       <VideoPlayer
// //         isPlaying={isPlaying}
// //         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
// //       />
// //     </>
// //   );
// // }

// import { useState, useRef, useEffect } from 'react';

// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       console.log('Calling video.play()');
//       ref.current.play();
//     } else {
//       console.log('Calling video.pause()');
//       ref.current.pause();
//     }
//   }, [isPlaying]);

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [text, setText] = useState('');
//   return (
//     <>
//       <input value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }

// // Step 3: Add cleanup if needed 
// // https://react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed

// // import { useEffect } from 'react';
// // import { createConnection } from './Chat.jsx';

// // export default function ChatRoom() {
// //   useEffect(() => {
// //     const connection = createConnection();
// //     connection.connect();
// //   }, []);
// //   return <h1>Welcome to the chat!</h1>;
// // }

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.jsx';

// export default function ChatRoom() {
//   useEffect(() => {
//     const connection = createConnection();
//     connection.connect();
//     return () => connection.disconnect();
//   }, []);
//   return <h1>Welcome to the chat!</h1>;
// }

// Putting it all together
// https://react.dev/learn/synchronizing-with-effects#putting-it-all-together

import { useState, useEffect } from 'react';

function Playground() {
  const [text, setText] = useState('a');

  useEffect(() => {
    function onTimeout() {
      console.log('⏰ ' + text);
    }

    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log('🟡 Cancel "' + text + '" log');
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <>
      <label>
        What to log:{' '}
        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <h1>{text}</h1>
    </>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Unmount' : 'Mount'} the component
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
}
