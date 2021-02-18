const CardItem = ({ pokemon }) => {
  const { id, name, types } = pokemon;

  return (
    <div className="pokemon-card">
      <div className="img-container">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
        />
      </div>
      <div className="overview">
        <div className="number">No.{id}</div>
        <h3 className="name">{name}</h3>
        <small className="type">
          {types.map((type, index) => (
            <span key={index}>{type.type.name}</span>
          ))}
        </small>
      </div>
    </div>
  );
};

export default CardItem;
