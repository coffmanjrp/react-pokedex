import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardList } from './components/cards';
import './assets/css/App.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
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
      setLoading(false);
    };

    try {
      fetchPokemonData(0, 151);
    } catch (error) {
      console.error(error);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex-container">
      <h1>React Pokedex</h1>
      {loading ? <h1>Loading...</h1> : <CardList pokemonData={pokemonData} />}
    </div>
  );
};

export default App;
