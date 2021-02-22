import { useContext, useEffect } from 'react';
import { generations } from '../../utils';
import { PokemonContext } from '../../context/pokemon';

const Pagination = () => {
  const pokemonContext = useContext(PokemonContext);
  const { generation, getPokemonData, setGeneration } = pokemonContext;

  useEffect(() => {
    getPokemonData(generations[generation]);

    //eslint-disable-next-line
  }, [generation]);

  const handlePrev = () => {
    setGeneration(generation - 1);
  };

  const handleNext = () => {
    setGeneration(generation + 1);
  };

  let suffix;

  switch (generation) {
    case 0:
      suffix = 'st';
      break;
    case 1:
      suffix = 'nd';
      break;
    case 2:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
      break;
  }

  return (
    <>
      <div>
        {generation === 0 ? (
          ''
        ) : (
          <button name="prev" className="btn btn-link" onClick={handlePrev}>
            <i className="fa fa-chevron-left"></i>
          </button>
        )}
      </div>
      <div>
        <h2>
          {generations[generation][0]}
          {suffix} Generation
        </h2>
      </div>
      <div>
        {generation === 7 ? (
          ''
        ) : (
          <button name="next" className="btn btn-link" onClick={handleNext}>
            <i className="fa fa-chevron-right"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default Pagination;
