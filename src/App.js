import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './containers/Home'
import Project from './containers/Project'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:projectName/:type" component={Project} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
