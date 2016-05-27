import React from 'react';
import { Link, Router, Route, browserHistory } from 'react-router';

let Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>Home</h1>
        <p>
          The Home Page
        </p>
      </div>
    );
  }
});

export default Home;