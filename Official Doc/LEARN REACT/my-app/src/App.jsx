// // Familiar props 
// // https://react.dev/learn/passing-props-to-a-component#familiar-props

// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={100}
//       height={100}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <Avatar />
//   );
// }

// // Passing props to a component
// // https://react.dev/learn/passing-props-to-a-component#passing-props-to-a-component

// import { getImageUrl } from './utils.js';

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Avatar
//         size={100}
//         person={{ 
//           name: 'Katsuko Saruhashi', 
//           imageId: 'YfeOqp2'
//         }}
//       />
//       <Avatar
//         size={80}
//         person={{
//           name: 'Aklilu Lemma', 
//           imageId: 'OKS67lh'
//         }}
//       />
//       <Avatar
//         size={50}
//         person={{ 
//           name: 'Lin Lanying',
//           imageId: '1bX5QH6'
//         }}
//       />
//     </div>
//   );
// }

// Passing JSX as children 
// https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children

import Avatar from './Avatar.jsx';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
