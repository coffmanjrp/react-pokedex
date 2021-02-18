const CardItem = ({ pokemon }) => {
  const { id, name, types } = pokemon;

  return (
    <>
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
        />
      </div>
      <div>
        <div>No.{id}</div>
        <h3>{name}</h3>
        <small>
          Type:
          {types.map((type, index) => (
            <span key={index}>{type.type.name}</span>
          ))}
        </small>
      </div>
    </>
  );
};

export default CardItem;
