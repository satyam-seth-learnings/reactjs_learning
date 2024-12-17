// // Passing strings with quotes 
// // https://react.dev/learn/javascript-in-jsx-with-curly-braces#passing-strings-with-quotes
// export default function Avatar() {
// //   return (
// //     <img
// //       className="avatar"
// //       src="https://i.imgur.com/7vQD0fPs.jpg"
// //       alt="Gregorio Y. Zara"
// //     />
// //   );
//     const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//     const description = 'Gregorio Y. Zara';
//     return (
//       <img
//         className="avatar"
//         src={avatar}
//         alt={description}
//       />
//     );
// }

// // Using curly braces: A window into the JavaScript world
// // https://react.dev/learn/javascript-in-jsx-with-curly-braces#using-curly-braces-a-window-into-the-javascript-world
// // export default function TodoList() {
// //   const name = 'Gregorio Y. Zara';
// //   return (
// //     <h1>{name}'s To Do List</h1>
// //   );
// // }

// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'long' }
//   ).format(date);
// }

// export default function TodoList() {
//   return (
//     <h1>To Do List for {formatDate(today)}</h1>
//   );
// }

// // Using “double curlies”: CSS and other objects in JSX 
// // https://react.dev/learn/javascript-in-jsx-with-curly-braces#using-double-curlies-css-and-other-objects-in-jsx
// export default function TodoList() {
//   return (
//     <ul style={{
//       backgroundColor: 'black',
//       color: 'pink'
//     }}>
//       <li>Improve the videophone</li>
//       <li>Prepare aeronautics lectures</li>
//       <li>Work on the alcohol-fuelled engine</li>
//     </ul>
//   );
// }

// More fun with JavaScript objects and curly braces 
// https://react.dev/learn/javascript-in-jsx-with-curly-braces#more-fun-with-javascript-objects-and-curly-braces
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
