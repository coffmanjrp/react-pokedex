import { GET_POKEMON_DATA, SET_LOADING, LOAD_ERROR } from '../types';

const cardReducer = (state, action) => {
  switch (action.type) {
    case GET_POKEMON_DATA:
      return {
        ...state,
        pokemonData: action.payload,
        isLoading: false,
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

export default cardReducer;
