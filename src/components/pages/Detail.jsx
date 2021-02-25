import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../layouts';
import { PokemonContext } from '../../context/pokemon';

const Detail = ({ match }) => {
  const pokemonContext = useContext(PokemonContext);
  const {
    pokemonIndividualData,
    pokemonSpeciesData,
    isLoading,
    getPokemonIndividualData,
    getPokemonSpeciesData,
  } = pokemonContext;
  const {
    id,
    name,
    sprites,
    weight,
    height,
    stats,
    abilities,
  } = pokemonIndividualData;
  const { names, genera, flavor_text_entries, generation } = pokemonSpeciesData;
  const isShiny = false;

  useEffect(() => {
    getPokemonIndividualData(match.params.id);
    getPokemonSpeciesData(match.params.id);

    // eslint-disable-next-line
  }, []);

  if (
    isLoading ||
    names === undefined ||
    genera === undefined ||
    sprites === undefined ||
    stats === undefined
  ) {
    return <Loading />;
  }

  return (
    <>
      <Link to="/" className="btn">
        <i className="fa fa-chevron-left"></i> Back To Top
      </Link>
      <div className="flex-container" style={{ flexDirection: 'row' }}>
        <div>
          {!isShiny ? (
            <img
              src={sprites.front_default}
              alt={name}
              style={{ width: '200px' }}
            />
          ) : (
            <img
              src={sprites.front_shiny}
              alt={name}
              style={{ width: '200px' }}
            />
          )}
        </div>
        <div>
          <div>No.{id}</div>
          <h2>{name}</h2>
          <p>{genera[7].genus}</p>
          <p>{generation.name}</p>
          <p>Weight: {weight / 10}Kg</p>
          <p>Height: {height / 10}m</p>
        </div>
      </div>
      <div className="flex-container" style={{ flexDirection: 'row' }}>
        <div>
          <h4>Stats</h4>
          <ul>
            {stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Abilities</h4>
          <ul>
            {abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <p>{flavor_text_entries[0].flavor_text}</p>
    </>
  );
};

export default Detail;
