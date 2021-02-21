import { useContext, useEffect } from 'react';
import { ListItem } from './';
import { Loading } from '../layouts';
import { PokemonContext } from '../../context/pokemon';

const List = () => {
  const pokemonContext = useContext(PokemonContext);
  const {
    pokemonData,
    pokemonSpeciesData,
    search,
    isLoading,
    getPokemonData,
    getPokemonSpeciesData,
  } = pokemonContext;

  useEffect(() => {
    getPokemonData();
    getPokemonSpeciesData();

    //eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="list-container">
      {search !== null
        ? search.map((pokemon) => (
            <ListItem key={pokemon.id} pokemon={pokemon} />
          ))
        : pokemonData.map((pokemon) => (
            <ListItem
              key={pokemon.id}
              pokemon={pokemon}
              species={pokemonSpeciesData}
            />
          ))}
    </div>
  );
};

export default List;
