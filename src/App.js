import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import Register from './pages/FormPage/Register';
import Login from './pages/FormPage/Login';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import Dekomposisi from './pages/Quiz/component/Dekomposisi';
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
          <Route path="/learn" component={Learn} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/quiz-dekomposisi" component={Dekomposisi} />
        </Switch>
      </Router>
    );
  }
}

export default App;
