import { CardItem } from './';

const CardList = ({ pokemonData }) => {
  return (
    <div className="poke-container">
      {pokemonData.map((pokemon) => (
        <CardItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default CardList;
