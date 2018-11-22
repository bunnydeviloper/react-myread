import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }
  handleChange = async e => {
    try {
      const query = e.target.value;
      const result = await search(query);
      this.setState({ query });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={"/"} className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              onChange={this.handleChange} value={this.state.query} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          </ol>
        </div>
      </div>
    );
  }
}
