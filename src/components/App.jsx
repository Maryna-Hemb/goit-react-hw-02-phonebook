import { Component } from 'react';
// import { Formik, Field, Form } from 'formik';
// import { object, string, number, date, InferType } from 'yup';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout.styled';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />
        React homework template
      </Layout>
    );
  }
}
