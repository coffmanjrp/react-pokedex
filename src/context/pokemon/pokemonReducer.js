import {
  GET_POKEMON_DATA,
  GET_POKEMON_INDIVIDUAL_DATA,
  GET_POKEMON_SPECIES_DATA,
  SET_GENERATION,
  SEARCH_POKEMON,
  CLEAR_SEARCH,
  SET_LOADING,
} from '../types';

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case GET_POKEMON_DATA:
      return {
        ...state,
        pokemonData: action.payload,
        isLoading: false,
      };
    case GET_POKEMON_INDIVIDUAL_DATA:
      return {
        ...state,
        pokemonIndividualData: action.payload,
        isLoading: false,
      };
    case GET_POKEMON_SPECIES_DATA:
      return {
        ...state,
        pokemonSpeciesData: action.payload,
        isLoading: false,
      };
    case SET_GENERATION:
      return {
        ...state,
        generation: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        search: state.pokemonData.filter((pokemon) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          const id = pokemon.id.toString();
          return pokemon.name.match(regex) || id.match(regex);
        }),
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: null,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
