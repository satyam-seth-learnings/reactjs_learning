// // When a regular variable isn’t enough
// // https://react.dev/learn/state-a-components-memory#when-a-regular-variable-isnt-enough

// // import { sculptureList } from './data.js';

// // export default function Gallery() {
// //   let index = 0;

// //   function handleClick() {
// //     index = index + 1;
// //   }

// //   let sculpture = sculptureList[index];
// //   return (
// //     <>
// //       <button onClick={handleClick}>
// //         Next
// //       </button>
// //       <h2>
// //         <i>{sculpture.name} </i> 
// //         by {sculpture.artist}
// //       </h2>
// //       <h3>  
// //         ({index + 1} of {sculptureList.length})
// //       </h3>
// //       <img 
// //         src={sculpture.url} 
// //         alt={sculpture.alt}
// //       />
// //       <p>
// //         {sculpture.description}
// //       </p>
// //     </>
// //   );
// // }

// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);

//   function handleClick() {
//     setIndex(index + 1);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }

// // Giving a component multiple state variables
// // https://react.dev/learn/state-a-components-memory#giving-a-component-multiple-state-variables

// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }


// State is isolated and private 
// https://react.dev/learn/state-a-components-memory#state-is-isolated-and-private

import Gallery from './Gallery.jsx';

export default function Page() {
  return (
    <div className="Page">
      <Gallery />
      <Gallery />
    </div>
  );
}

