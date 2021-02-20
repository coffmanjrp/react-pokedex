import { useContext, useEffect, useRef } from 'react';
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
          <input
            type="text"
            name="search"
            placeholder="&nbsp;&#xf002;"
            ref={text}
            onChange={onChange}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
