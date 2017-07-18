import React, { Component } from 'react';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <LinkForm />
        <LinkList />
      </div>
    );
  }

}

export default App;
