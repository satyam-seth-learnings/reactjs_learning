// // Rendering data from arrays
// // https://react.dev/learn/rendering-lists#rendering-data-from-arrays

// const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist'
// ];

// export default function List() {
//   const listItems = people.map(person =>
//     <li>{person}</li>
//   );
//   return <ul>{listItems}</ul>;
// }

// // Filtering arrays of items 
// // https://react.dev/learn/rendering-lists#filtering-arrays-of-items

// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );
//   const listItems = chemists.map(person =>
//     <li>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }

// Keeping list items in order with key
// https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
