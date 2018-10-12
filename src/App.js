import React from 'react';
import { Router } from "@reach/router"

import Home from './Home';

import Directory from './views/directory/Directory';
import Game from './views/game/Game';
import Leaderboard from './views/leaderboard/Leaderboard';
import Login from './views/login/Login';
import Results from './views/results/Results';
import Setup from './views/setup/Setup';
import Start from './views/start/Start';

class App extends React.Component {
  render() {
    return (
      <Router basepath={process.env.PUBLIC_URL} style={{ height: '100%' }}>
        <Home path="/" />
        <Directory path="/directory" />
        <Game path="/game" />
        <Leaderboard path="/leaderboard" />
        <Login path="/login" />
        <Results path="/results" />
        <Setup path="/setup" />
        <Start path="/start" />
      </Router>
    );
  }
}

export default App;
