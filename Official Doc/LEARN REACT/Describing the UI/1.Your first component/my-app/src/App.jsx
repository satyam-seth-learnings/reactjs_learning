// // Defining a component 
// // https://react.dev/learn/your-first-component#defining-a-component
// export default function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3Am.jpg"
//       alt="Katherine Johnson"
//     />
//   )
// }

// Using a component
// https://react.dev/learn/your-first-component#using-a-component
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

