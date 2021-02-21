import { useReducer } from 'react';
import axios from 'axios';
import { PokemonContext, pokemonReducer } from '.';
import {
  GET_POKEMON_DATA,
  GET_POKEMON_SPECIES_DATA,
  SEARCH_POKEMON,
  CLEAR_SEARCH,
  SET_LOADING,
  LOAD_ERROR,
} from '../types';

const PokemonState = ({ children }) => {
  const initialState = {
    pokemonData: [],
    pokemonSpeciesData: [],
    search: null,
    isLoading: false,
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

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

  // Get Pokemon species data
  const getPokemonSpeciesData = async () => {
    setLoading();

    const fetchData = async (offset, limit) => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species?offset=${offset}&limit=${limit}`
      );
      const data = await res.data;

      const dataResult = await Promise.all(
        data.results.map(async (result) => {
          const res = await axios.get(result.url);
          const data = await res.data;

          return data;
        })
      );

      dispatch({ type: GET_POKEMON_SPECIES_DATA, payload: dataResult });
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
    <PokemonContext.Provider
      value={{
        pokemonData: state.pokemonData,
        pokemonSpeciesData: state.pokemonSpeciesData,
        isLoading: state.isLoading,
        search: state.search,
        getPokemonData,
        getPokemonSpeciesData,
        searchPokemon,
        clearSearch,
        setLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
