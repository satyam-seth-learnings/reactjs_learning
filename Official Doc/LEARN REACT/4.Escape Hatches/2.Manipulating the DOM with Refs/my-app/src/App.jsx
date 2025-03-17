// // Example: Focusing a text input 
// // https://react.dev/learn/manipulating-the-dom-with-refs#example-focusing-a-text-input

// import { useRef } from 'react';

// export default function Form() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }

// // Example: Scrolling to an element
// // https://react.dev/learn/manipulating-the-dom-with-refs#example-scrolling-to-an-element

// import { useRef } from 'react';

// export default function CatFriends() {
//   const firstCatRef = useRef(null);
//   const secondCatRef = useRef(null);
//   const thirdCatRef = useRef(null);

//   function handleScrollToFirstCat() {
//     firstCatRef.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }

//   function handleScrollToSecondCat() {
//     secondCatRef.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }

//   function handleScrollToThirdCat() {
//     thirdCatRef.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }

//   return (
//     <>
//       <nav>
//         <button onClick={handleScrollToFirstCat}>
//           Neo
//         </button>
//         <button onClick={handleScrollToSecondCat}>
//           Millie
//         </button>
//         <button onClick={handleScrollToThirdCat}>
//           Bella
//         </button>
//       </nav>
//       <div>
//         <ul>
//           <li>
//             <img
//               src="https://placecats.com/neo/300/200"
//               alt="Neo"
//               ref={firstCatRef}
//             />
//           </li>
//           <li>
//             <img
//               src="https://placecats.com/millie/200/200"
//               alt="Millie"
//               ref={secondCatRef}
//             />
//           </li>
//           <li>
//             <img
//               src="https://placecats.com/bella/199/200"
//               alt="Bella"
//               ref={thirdCatRef}
//             />
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// // Accessing another component’s DOM nodes
// // https://react.dev/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes

// import { useRef } from 'react';

// function MyInput(props) {
//   return <input {...props} />;
// }

// export default function MyForm() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <MyInput ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }

// Best practices for DOM manipulation with refs 
// https://react.dev/learn/manipulating-the-dom-with-refs#best-practices-for-dom-manipulation-with-refs

import { useState, useRef } from 'react';

export default function Counter() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}>
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}>
        Remove from the DOM
      </button>
      {show && <p ref={ref}>Hello world</p>}
    </div>
  );
}
