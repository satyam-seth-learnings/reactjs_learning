// Exporting and importing a component
// import Gallery from './Gallery.jsx';

// Exporting and importing multiple components from the same file
import Gallery from './Gallery.jsx';
import { Profile } from './Gallery.jsx';

export default function App() {
  return (
    <Gallery />
  );
}
