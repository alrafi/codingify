import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import Register from './pages/FormPage/Register';
import RegisterSuccess from './pages/FormPage/RegisterSuccess';
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
import ListQuiz from './pages/ListQuiz';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/register" component={Register} />
          <Route path="/register-success" component={RegisterSuccess} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Home} />
          <Route path="/learn" component={Learn} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/quiz-list" component={ListQuiz} />
          <Route path="/quiz-dekomposisi" component={Dekomposisi} />
          <Route path="/quiz-abstraksi" component={Abstraksi} />
          <Route path="/quiz-algoritma" component={Algoritma} />
          <Route path="/quiz-pola" component={PengenalanPola} />
          <Route path="/learn-topics" component={ListTopic} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
