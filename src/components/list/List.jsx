import { useContext, useEffect } from 'react';
import { ListItem } from './';
import { Loading } from '../layouts';
import { PokemonContext } from '../../context/pokemon';

const List = () => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemonData, search, isLoading, getPokemonData } = pokemonContext;

  useEffect(() => {
    getPokemonData();
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
            <ListItem key={pokemon.id} pokemon={pokemon} />
          ))}
    </div>
  );
};

export default List;
