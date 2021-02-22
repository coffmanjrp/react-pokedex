import { useContext, useEffect } from 'react';
import { generations } from '../../utils';
import { PokemonContext } from '../../context/pokemon';

const Pagination = () => {
  const pokemonContext = useContext(PokemonContext);
  const { isLoading, getPokemonData } = pokemonContext;

  useEffect(() => {
    getPokemonData(generations[0]);

    //eslint-disable-next-line
  }, []);

  const handlePrev = () => {
    console.log('prev');
  };

  const handleNext = () => {
    console.log('next');
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>
        <button name="prev" className="btn btn-link" onClick={handlePrev}>
          <i className="fa fa-chevron-left"></i>
        </button>
      </div>
      <div>
        <h2>1st Generation</h2>
      </div>
      <div>
        <button name="next" className="btn btn-link" onClick={handleNext}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
};

export default Pagination;
