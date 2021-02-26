import { useContext, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { PokemonContext } from '../../context/pokemon';

const Search = () => {
  const pokemonContext = useContext(PokemonContext);
  const { search, searchPokemon, clearSearch } = pokemonContext;
  const text = useRef('');

  useEffect(() => {
    if (search === null) {
      text.current.value = '';
    }

    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    if (text.current.value !== '') {
      searchPokemon(e.target.value);
    } else {
      clearSearch();
    }
  };

  return (
    <>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="search">
              <FaSearch />
            </label>
            <input type="text" name="search" ref={text} onChange={onChange} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
