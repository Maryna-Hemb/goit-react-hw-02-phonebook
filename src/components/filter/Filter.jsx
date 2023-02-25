import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input value={filter} onChange={onFilterChange} type="text"></input>
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
