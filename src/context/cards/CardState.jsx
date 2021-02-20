import { useReducer } from 'react';
import axios from 'axios';
import { CardContext, cardReducer } from './';
import {
  GET_POKEMON_DATA,
  SEARCH_POKEMON,
  CLEAR_SEARCH,
  SET_LOADING,
  LOAD_ERROR,
} from '../types';

const CardState = ({ children }) => {
  const initialState = {
    pokemonData: [],
    search: null,
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
        data.results.map(async (result) => {
          const res = await axios.get(result.url);
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

  // Search Pokemon
  const searchPokemon = (text) =>
    dispatch({ type: SEARCH_POKEMON, payload: text });

  // Clear search state
  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CardContext.Provider
      value={{
        pokemonData: state.pokemonData,
        isLoading: state.isLoading,
        search: state.search,
        getPokemonData,
        searchPokemon,
        clearSearch,
        setLoading,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardState;
