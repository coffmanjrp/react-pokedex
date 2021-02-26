import { Link } from 'react-router-dom';
import { CgPokemon } from 'react-icons/cg';
import { Pagination, Search } from './';

const Navbar = ({ title }) => {
  return (
    <>
      <div className="navbar">
        <div className="flex-container flex-row">
          <h1>{title}</h1>
          <CgPokemon className="h1" />
        </div>
        <Pagination />
        <ul>
          <li>
            <Search />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

Navbar.defaultProps = {
  title: 'React Pokedex',
};

export default Navbar;
