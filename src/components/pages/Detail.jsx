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
  const { id, name, sprites } = pokemonIndividualData;
  const { names, genera } = pokemonSpeciesData;

  useEffect(() => {
    getPokemonIndividualData(match.params.id);
    getPokemonSpeciesData(match.params.id);

    // eslint-disable-next-line
  }, []);

  if (names === undefined || genera === undefined || sprites === undefined) {
    return <Loading />;
  }

  return (
    <>
      <Link to="/" className="btn">
        <i className="fa fa-chevron-left"></i> Back To Top
      </Link>
      <div>No.{id}</div>
      <div>{names[7].name}</div>
      <div>{genera[7].genus}</div>
      <img
        src={sprites.front_default}
        alt={names[7].name}
        style={{ maxWidth: '200px' }}
      />
    </>
  );
};

export default Detail;
