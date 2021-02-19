import { typeColor } from '../../utils';

const CardItem = ({ pokemon }) => {
  const { id, name, types, sprites } = pokemon;

  return (
    <div
      className="pokemon-card"
      style={{ backgroundColor: typeColor[types[0].type.name] }}
    >
      <div className="img-container">
        <img src={sprites.front_default} alt={name} />
      </div>
      <div className="overview">
        <div className="number">No.{id}</div>
        <h3 className="name">{name}</h3>
        <small className="type">
          {types.map((type, index) => (
            <span
              key={index}
              style={{ backgroundColor: typeColor[type.type.name] }}
            >
              {type.type.name}
            </span>
          ))}
        </small>
      </div>
    </div>
  );
};

export default CardItem;
