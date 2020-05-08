import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import Register from './pages/FormPage/Register';
import Login from './pages/FormPage/Login';
import Home from './pages/Home';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
