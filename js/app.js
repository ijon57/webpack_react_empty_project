import React from 'react';  
import { render } from 'react-dom';  
import { Router, DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';

let App = React.createClass({  
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
});

render((  
  <Router>
    <Route path="/" component={App}>
      <Route path="/login" component={LoginHandler}/>
    </Route>
  </Router>
), document.getElementById('react'));

