// // Context: an alternative to passing props
// // https://react.dev/learn/passing-data-deeply-with-context#context-an-alternative-to-passing-props

// // export default function Section({ children }) {
// //   return (
// //     <section className="section">
// //       {children}
// //     </section>
// //   );
// // }

// import { LevelContext } from './LevelContext.js';

// export default function Section({ level, children }) {
//   return (
//     <section className="section">
//       <LevelContext.Provider  value={level}>
//         {children}
//       </LevelContext.Provider>
//     </section>
//   );
// }


// // Using and providing context from the same component
// // https://react.dev/learn/passing-data-deeply-with-context#using-and-providing-context-from-the-same-component

// import { useContext } from 'react';
// import { LevelContext } from './LevelContext.js';

// export default function Section({ children }) {
//   const level = useContext(LevelContext);
//   return (
//     <section className="section">
//       <LevelContext.Provider value={level + 1}>
//         {children}
//       </LevelContext.Provider>
//     </section>
//   );
// }


// Context passes through intermediate components
// https://react.dev/learn/passing-data-deeply-with-context#context-passes-through-intermediate-components

import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section className={
      'section ' +
      (isFancy ? 'fancy' : '')
    }>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
