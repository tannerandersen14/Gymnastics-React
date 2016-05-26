var React = require("react");
var ReactDOM = require("react-dom");
var Routes = require("react-router");
var Link = Routes.Link
var Router = Routes.Router;
var browserHistory = Routes.browserHistory;
var Route = Routes.Route;

var MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>The app has React Router</h1>
        <p>
          As far as the [Search Title] and [Total Results] that you'll see on the results page,
          those are static for now. We will make them dynamic in the third guide.
        </p>
      </div>
    );
  }
});

var About = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>About</h1>
        <p>
          The About Page
        </p>
      </div>
    );
  }
});

ReactDOM.render((
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path='/' component={Home}/>
            <Route path='/about' component={About}/>
        </Route>
    </Router>
), document.getElementById('root'))