import { useContext, useEffect, useRef } from 'react';
import { CardContext } from '../../context/cards';

const Search = () => {
  const cardContext = useContext(CardContext);
  const { search, searchPokemon, clearSearch } = cardContext;
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
        <form className="form">
          <input
            type="text"
            placeholder="Search Pokemon..."
            ref={text}
            onChange={onChange}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
