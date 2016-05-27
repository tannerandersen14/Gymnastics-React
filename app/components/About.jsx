import React from 'react';
import { Link, Router, Route, browserHistory } from 'react-router';

let About = React.createClass({
  render: function() {
    return (
      <div className="about-page">
        <h1>About</h1>
        <p>
          The About Page
        </p>
      </div>
    );
  }
});

export default About;