import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, browserHistory } from 'react-router';

import MainLayout from './components/MainLayout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path='/' component={Home}/>
            <Route path='/about' component={About}/>
        </Route>
    </Router>
), document.getElementById('root'))