import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout.styled';

import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContactValues => {
    let isAdded = false;
    this.state.contacts.map(name => {
      if (name.name.toLowerCase() === newContactValues.name.toLowerCase()) {
        isAdded = true;
        return alert(`${newContactValues.name} is already in contacts`);
      }
    });

    if (isAdded) {
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContactValues],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onAddNewContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.changeFilter} />
        <ContactList
          contacts={contacts}
          namefilter={filter}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
