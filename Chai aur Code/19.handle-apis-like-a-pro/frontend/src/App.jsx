import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  // const [products, error, loading] = customReactQuery('api/products');

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        // const response = await axios.get('/api/productsd');
        const response = await axios.get('/api/products');
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  if(error) {
    return <h1>Soothing went wrong</h1>;
  }

  if(loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Chai aur API in React</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App;

const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return [products, error, loading];
};