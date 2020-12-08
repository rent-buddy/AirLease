import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import Login from './components/Login/AuthBotton';
import SearchBar from './components/SearchBar';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Listing from './components/Listing';
import sampleListingPicture from './components/logo.svg';
import RegistrationPage from './pages/RegistrationPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Cart from './pages/Cart';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3 row">
      <Link className="navbar-brand col-auto" to="/">
        AirLease
      </Link>
      <ul className="navbar-nav col-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Listing
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="col">
        <SearchBar />
      </div>
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} color="white" />
      </Link>
      <div className="col-auto">
        <Login />
      </div>
    </nav>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            <Switch>
              <Route path="/registration" component={RegistrationPage} />
              <PrivateRoute path="/posts/new" component={PostFormPage} />
              <Route path="/posts/:id" component={ShowPostPage} />
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/search" component={SearchResultsPage} />
              <Route path="/cart" component={Cart} />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
