import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GC_USER_ID } from './constants';
import Header from './components/Header';
import AuthForm from './components/Auth';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header userId={localStorage.getItem(GC_USER_ID)} />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={LinkForm} />
            <Route exact path="/login" component={AuthForm} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
