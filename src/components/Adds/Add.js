import PropTypes from 'prop-types';
import './Add.css';

function Add(props) {
  const {
    id,
    model,
    color,
    img,
    range,
    motor,
    acceleration,
    price,
    duration,
  } = props;

  return (
    <div className="add" id={id}>
      <img src={img} alt={model} />
      <h2>{model}</h2>
      <p>{color}</p>
      <p>{range}</p>
      <p>{motor}</p>
      <p>{acceleration}</p>
      <p>{price}</p>
      <p>{duration}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Add.propTypes = {
  id: PropTypes.number.isRequired,
  model: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  range: PropTypes.number.isRequired,
  motor: PropTypes.string.isRequired,
  acceleration: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Add;