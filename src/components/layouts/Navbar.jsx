import { CgPokemon } from 'react-icons/cg';
import { Pagination, Sidebar } from './';

const Navbar = ({ title }) => {
  return (
    <>
      <div className="navbar">
        <div className="flex-container flex-row">
          <h1>{title}</h1>
          <CgPokemon className="h1" />
        </div>
        <Pagination />
        <Sidebar />
      </div>
    </>
  );
};

Navbar.defaultProps = {
  title: 'React Pokedex',
};

export default Navbar;
