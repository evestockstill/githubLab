import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsernamePage from './user/UsernamePage';
// import UserRepo from './repos/UserRepo';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={UsernamePage} />
        {/* <Route path='/:repos' component={UserRepo} /> */}
      </Switch>
    </Router>
  );
}
