import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import Register from './pages/FormPage/Register';
import Login from './pages/FormPage/Login';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Quiz from './pages/Quiz';
import Dekomposisi from './pages/Quiz/component/Dekomposisi';
import Abstraksi from './pages/Quiz/component/Abstraksi';
import PengenalanPola from './pages/Quiz/component/PengenalanPola';
import Algoritma from './pages/Quiz/component/Algoritma';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListTopic from './pages/ListTopic';

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
          <Route path="/quiz-abstraksi" component={Abstraksi} />
          <Route path="/quiz-algoritma" component={Algoritma} />
          <Route path="/quiz-pola" component={PengenalanPola} />
          <Route path="/learn-topics" component={ListTopic} />
        </Switch>
      </Router>
    );
  }
}

export default App;
