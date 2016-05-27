import React from 'react';
import { Link, Router, Route, browserHistory } from 'react-router';

let MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <nav className="navbar navbar-inverse">
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
});

export default MainLayout;