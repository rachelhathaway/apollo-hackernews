import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={LinkForm} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
