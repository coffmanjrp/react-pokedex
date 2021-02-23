import { useReducer } from 'react';
import axios from 'axios';
import { PokemonContext, pokemonReducer } from '.';
import {
  GET_POKEMON_DATA,
  GET_POKEMON_INDIVIDUAL_DATA,
  GET_POKEMON_SPECIES_DATA,
  SET_GENERATION,
  SEARCH_POKEMON,
  CLEAR_SEARCH,
  SET_LOADING,
  CLEAR_DATA,
} from '../types';

const PokemonState = ({ children }) => {
  const initialState = {
    pokemonData: [],
    pokemonIndividualData: [],
    pokemonSpeciesData: [],
    generation: 0,
    search: null,
    isLoading: false,
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  // Get Pokemon data
  const getPokemonData = async (generation) => {
    setLoading();

    const fetchData = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${generation[1]}&limit=${generation[2]}`
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
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  };

  // Get individual Pokemon data
  const getPokemonIndividualData = async (id) => {
    setLoading();

    const fetchData = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.data;

      dispatch({ type: GET_POKEMON_INDIVIDUAL_DATA, payload: data });
    };

    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  };

  // Get Pokemon species data
  const getPokemonSpeciesData = async (id) => {
    setLoading();

    const fetchData = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      const data = await res.data;

      dispatch({ type: GET_POKEMON_SPECIES_DATA, payload: data });
    };

    try {
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  };

  // Set pokemon generation
  const setGeneration = (generation) =>
    dispatch({ type: SET_GENERATION, payload: generation });

  // Search Pokemon
  const searchPokemon = (text) =>
    dispatch({ type: SEARCH_POKEMON, payload: text });

  // Clear search state
  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Clear states
  const clearData = () => dispatch({ type: CLEAR_DATA });

  return (
    <PokemonContext.Provider
      value={{
        pokemonData: state.pokemonData,
        pokemonIndividualData: state.pokemonIndividualData,
        pokemonSpeciesData: state.pokemonSpeciesData,
        generation: state.generation,
        isLoading: state.isLoading,
        search: state.search,
        getPokemonData,
        getPokemonIndividualData,
        getPokemonSpeciesData,
        setGeneration,
        searchPokemon,
        clearSearch,
        setLoading,
        clearData,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
