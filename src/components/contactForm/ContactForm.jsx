import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};
export const ContactForm = ({ onAddNewContact }) => {
  const hendleSubmit = (values, { resetForm }) => {
    onAddNewContact({ ...values, id: nanoid() });
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
      <Form>
        <label>
          <p>Name</p>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label>
          <p> Number</p>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contacts</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddNewContact: PropTypes.func.isRequired,
};
