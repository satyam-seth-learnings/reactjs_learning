// Exporting and importing a component
// function Profile() {
//     return (
//         <img
//         src="https://i.imgur.com/QIrZWGIs.jpg"
//         alt="Alan L. Hart"
//         />
//     );
// }

// export default function Gallery() {
//     return (
//         <section>
//         <h1>Amazing scientists</h1>
//         <Profile />
//         <Profile />
//         <Profile />
//         </section>
//     );
// }

// Exporting and importing multiple components from the same file
export function Profile() {
    return (
    <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
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