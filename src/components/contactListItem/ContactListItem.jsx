import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <span>
        {name}: {number}
      </span>

      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
