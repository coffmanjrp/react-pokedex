import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchPokemonData = async (offset, limit) => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      const data = await res.data;

      const individualPokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          const data = await res.data;

          return data;
        })
      );

      setPokemonData(individualPokemonData);
      setOffset(1);
      setLimit(151);
      setLoading(false);
    };

    try {
      fetchPokemonData(offset, limit);
    } catch (error) {
      console.error(error);
    }

    // eslint-disable-next-line
  }, []);

  return <div>{loading ? <h1>Loading...</h1> : <h1>fetchPokemonData</h1>}</div>;
};

export default App;
