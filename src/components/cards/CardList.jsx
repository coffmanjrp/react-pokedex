import { useContext, useEffect } from 'react';
import { CardItem } from './';
import { Loading } from '../layouts';
import { CardContext } from '../../context/cards';

const CardList = () => {
  const cardContext = useContext(CardContext);
  const { pokemonData, isLoading, getPokemonData } = cardContext;

  useEffect(() => {
    getPokemonData();

    //eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="poke-container">
      {pokemonData.map((pokemon) => (
        <CardItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default CardList;
