import React from 'react';
import { Link } from 'react-router-dom';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange(e) {
    console.log('here');
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <div class="input-group">
        <input
          id="query"
          type="text"
          class="form-control"
          placeholder="Search for..."
          name="q"
          onChange={(e) => this.handleChange(e)}
        ></input>
        <span class="input-group-btn">
          <Link
            to={'/search' + '?q=' + this.state.value}
            className="btn btn-primary"
            style={{ backgroundColor: '#F93800' }}
          >
            Go
          </Link>
        </span>
      </div>
    );
  }
}

export default SearchBar;
