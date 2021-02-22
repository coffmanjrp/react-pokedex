import { Link } from 'react-router-dom';
import { Pagination, Search } from './';

const Navbar = ({ title }) => {
  return (
    <>
      <div className="navbar">
        <h1>{title}</h1>
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
