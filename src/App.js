import React, { Component } from 'react';
import Header from './components/Header';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <LinkForm />
        <LinkList />
      </div>
    );
  }

}

export default App;
