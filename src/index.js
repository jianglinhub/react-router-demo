import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect, Switch } from './react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './Profile'
import User from './User'
import Home from './Home'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-heading">
              <div className="navbar-brand">Webpack-Demo</div>
            </div>
            <div className="nav navbar-nav">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/user">User</Link></li>
            </div>
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route path="/home" exact={true} component={Home}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/user" component={User}></Route>
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
