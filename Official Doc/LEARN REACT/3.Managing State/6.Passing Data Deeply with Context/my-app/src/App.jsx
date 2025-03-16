// // Context: an alternative to passing props
// // https://react.dev/learn/passing-data-deeply-with-context#context-an-alternative-to-passing-props

// // // // // import Heading from './Heading.jsx';
// // // // // import Section from './Section.jsx';

// // // // // export default function Page() {
// // // // //   return (
// // // // //     <Section>
// // // // //       <Heading level={1}>Title</Heading>
// // // // //       <Heading level={2}>Heading</Heading>
// // // // //       <Heading level={3}>Sub-heading</Heading>
// // // // //       <Heading level={4}>Sub-sub-heading</Heading>
// // // // //       <Heading level={5}>Sub-sub-sub-heading</Heading>
// // // // //       <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
// // // // //     </Section>
// // // // //   );
// // // // // }


// // // // import Heading from './Heading.jsx';
// // // // import Section from './Section.jsx';

// // // // export default function Page() {
// // // //   return (
// // // //     <Section>
// // // //       <Heading level={1}>Title</Heading>
// // // //       <Section>
// // // //         <Heading level={2}>Heading</Heading>
// // // //         <Heading level={2}>Heading</Heading>
// // // //         <Heading level={2}>Heading</Heading>
// // // //         <Section>
// // // //           <Heading level={3}>Sub-heading</Heading>
// // // //           <Heading level={3}>Sub-heading</Heading>
// // // //           <Heading level={3}>Sub-heading</Heading>
// // // //           <Section>
// // // //             <Heading level={4}>Sub-sub-heading</Heading>
// // // //             <Heading level={4}>Sub-sub-heading</Heading>
// // // //             <Heading level={4}>Sub-sub-heading</Heading>
// // // //           </Section>
// // // //         </Section>
// // // //       </Section>
// // // //     </Section>
// // // //   );
// // // // }

// // // import Heading from './Heading.jsx';
// // // import Section from './Section.jsx';

// // // export default function Page() {
// // //   return (
// // //     <Section level={1}>
// // //       <Heading>Title</Heading>
// // //       <Section level={2}>
// // //         <Heading>Heading</Heading>
// // //         <Heading>Heading</Heading>
// // //         <Heading>Heading</Heading>
// // //         <Section level={3}>
// // //           <Heading>Sub-heading</Heading>
// // //           <Heading>Sub-heading</Heading>
// // //           <Heading>Sub-heading</Heading>
// // //           <Section level={4}>
// // //             <Heading>Sub-sub-heading</Heading>
// // //             <Heading>Sub-sub-heading</Heading>
// // //             <Heading>Sub-sub-heading</Heading>
// // //           </Section>
// // //         </Section>
// // //       </Section>
// // //     </Section>
// // //   );
// // // }

// import Heading from './Heading.jsx';
// import Section from './Section.jsx';

// export default function Page() {
//   return (
//     <Section>
//       <Heading>Title</Heading>
//       <Section>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Section>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Section>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//           </Section>
//         </Section>
//       </Section>
//     </Section>
//   );
// }


// Context passes through intermediate components
// https://react.dev/learn/passing-data-deeply-with-context#context-passes-through-intermediate-components

import Heading from './Heading.jsx';
import Section from './Section.jsx';

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures."
      />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"
      />
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"
      />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}
