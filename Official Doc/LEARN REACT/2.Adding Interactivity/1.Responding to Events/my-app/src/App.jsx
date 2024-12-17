// // Adding event handlers
// // https://react.dev/learn/responding-to-events#adding-event-handlers

// export default function Button() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

// // Reading props in event handlers
// // https://react.dev/learn/responding-to-events#reading-props-in-event-handlers

// function AlertButton({ message, children }) {
//   return (
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <AlertButton message="Playing!">
//         Play Movie
//       </AlertButton>
//       <AlertButton message="Uploading!">
//         Upload Image
//       </AlertButton>
//     </div>
//   );
// }

// // Passing event handlers as props
// // https://react.dev/learn/responding-to-events#passing-event-handlers-as-props

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return (
//     <Button onClick={handlePlayClick}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton() {
//   return (
//     <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }

// // Naming event handler props
// // https://react.dev/learn/responding-to-events#naming-event-handler-props

// // function Button({ onSmash, children }) {
// //   return (
// //     <button onClick={onSmash}>
// //       {children}
// //     </button>
// //   );
// // }

// // export default function App() {
// //   return (
// //     <div>
// //       <Button onSmash={() => alert('Playing!')}>
// //         Play Movie
// //       </Button>
// //       <Button onSmash={() => alert('Uploading!')}>
// //         Upload Image
// //       </Button>
// //     </div>
// //   );
// // }

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert('Playing!')}
//       onUploadImage={() => alert('Uploading!')}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// // Event propagation
// // https://react.dev/learn/responding-to-events#event-propagation

// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <button onClick={() => alert('Playing!')}>
//         Play Movie
//       </button>
//       <button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </button>
//     </div>
//   );
// }

// // Stopping propagation 
// // https://react.dev/learn/responding-to-events#event-propagation

// function Button({ onClick, children }) {
//   return (
//     <button onClick={e => {
//       e.stopPropagation();
//       onClick();
//     }}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <Button onClick={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// Preventing default behavior 
// https://react.dev/learn/responding-to-events#preventing-default-behavior

// export default function Signup() {
//   return (
//     <form onSubmit={() => alert('Submitting!')}>
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}
