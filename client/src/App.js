import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
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
import AboutUsPage from './pages/AboutUsPage';
import { Dropdown } from 'react-bootstrap';
import ClothPage from './pages/ClothPage';
import ElectronicPage from './pages/ElectronicPage';
import FurniturePage from './pages/FurniturePage';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation(props) {
  //mb-3 remove nav spave between jumbotron
  return (
    <nav className="navbar navbar-expand-sm navbar-dark shadow row" style={{ backgroundColor: '#2F4F4F' }}>
      <Link className="navbar-brand col-auto" to="/">
        <span style={{ color: '#F93800' }}>AirLease</span>
      </Link>
      <NavLink className="nav-link col-auto" exact to="/posts/new">
        Create a Listing
      </NavLink>

      <Dropdown className="col-auto" size="sm">
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: '#F93800' }}>
          Categories
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/cloth">
              <div>Cloth</div>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/electronic">
              <div>Electronic</div>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/furniture">
              <div>Furniture</div>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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
              <Route path="/cart" component={Cart} />
              <Route path="/search" component={SearchResultsPage} />
              <Route path="/cloth" component={ClothPage} />
              <Route path="/electronic" component={ElectronicPage} />
              <Route path="/furniture" component={FurniturePage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
        <footer>
          <p>
            Focusing on the experience of thrifting since 2020 <br></br>An ecommerce site where you can thrift items and
            place your own items up for sale. <br></br>Sell and exchange furniture, clothes, electronics, and more!
            Schedule a local meet up (or ship) to exchange merchandise. <br></br>Option to donate unused/unwanted items.
          </p>
        </footer>
      </Router>
    );
  }
}

export default App;
