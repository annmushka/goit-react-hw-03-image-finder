import '../styles.css';
import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-Button">
            <BsSearch />
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.query}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
