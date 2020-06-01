import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './index.sass';

import Home from './pages/home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </React.StrictMode>
  </Router>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
