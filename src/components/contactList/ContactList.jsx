import PropTypes from 'prop-types';
import { ContactListItem } from 'components/contactListItem/ContactListItem';

export const ContactList = ({ contacts, onDeleteContact, namefilter }) => {
  const filtredPhonebook = contacts.filter(contact =>
    contact.name.toLowerCase().includes(namefilter.toLowerCase())
  );
  return (
    <div>
      <ul>
        {filtredPhonebook.map(({ id, name, number }) => (
          <li key={id}>
            <ContactListItem
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired))
    .isRequired,
  namefilter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
