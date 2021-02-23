import { Link } from 'react-router-dom';
import { typeColor } from '../../utils';

const ListItem = ({ pokemon }) => {
  const { id, name, types, sprites } = pokemon;
  const isShiny = false;

  return (
    <>
      <Link to={`pokemon/${id}`}>
        <div
          className="pokemon-list-item"
          style={{ backgroundColor: typeColor[types[0].type.name] }}
        >
          <div className="img-container">
            {!isShiny ? (
              <img src={sprites.front_default} alt={name} />
            ) : (
              <img src={sprites.front_shiny} alt={name} />
            )}
          </div>
          <div className="overview">
            <div className="number">No.{id}</div>
            <h3 className="name">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </h3>
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
      </Link>
    </>
  );
};

export default ListItem;
