import { useReducer } from 'react';
import axios from 'axios';
import { CardContext, cardReducer } from './';
import { GET_POKEMON_DATA, SET_LOADING, LOAD_ERROR } from '../types';

const CardState = ({ children }) => {
  const initialState = {
    pokemonData: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(cardReducer, initialState);

  // Get Pokemon data
  const getPokemonData = async () => {
    setLoading();

    const fetchData = async (offset, limit) => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      const data = await res.data;

      const dataResult = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          const data = await res.data;

          return data;
        })
      );

      dispatch({ type: GET_POKEMON_DATA, payload: dataResult });
    };

    try {
      fetchData(0, 151);
    } catch (error) {
      throw new Error(error);
    }
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CardContext.Provider
      value={{
        pokemonData: state.pokemonData,
        isLoading: state.isLoading,
        getPokemonData,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardState;
