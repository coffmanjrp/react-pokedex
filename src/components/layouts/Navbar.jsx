const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <h1>{title}</h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'React Pokedex',
};

export default Navbar;
