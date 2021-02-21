import { typeColor } from '../../utils';

const ListItem = ({ pokemon, species }) => {
  const { id, name, types, sprites } = pokemon;
  const { genera } = species[id - 1];

  return (
    <div
      className="pokemon-list-item"
      style={{ backgroundColor: typeColor[types[0].type.name] }}
    >
      <div className="img-container">
        <img src={sprites.front_default} alt={name} />
      </div>
      <div className="overview">
        <div className="number">No.{id}</div>
        <h3 className="name">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
        <p className="species">{genera[7].genus}</p>
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

export default ListItem;
