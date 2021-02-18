import { CardItem } from './';

const CardList = ({ pokemonData }) => {
  return (
    <>
      {pokemonData.map((pokemon) => {
        return <CardItem key={pokemon.id} pokemon={pokemon} />;
      })}
    </>
  );
};

export default CardList;
