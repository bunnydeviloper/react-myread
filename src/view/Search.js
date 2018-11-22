import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from '../components/Book';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      books: []
    };
  }
  handleChange = async e => {
    try {
      const query = e.target.value;
      this.setState({ query });

      // input validation: only search books if query input is not empty
      if (query.trim()) {
        const result = await search(query);
        if (result.error) {
          // if can't find any match, we set the books array to empty
          this.setState({ books: [] });
        } else {
          this.setState({ books: result });
        }
      } else {
        this.setState({ books: [] });
      }
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
            {this.state.books.length === 0 && (
              <h1 style={{textAlign: "Center"}}>No Results Found</h1>
            )}
            {this.state.books.length > 0 && this.state.books.map(book => {
              return (
                <Book key={book.id} {...book} moveBook={this.props.moveBook} />
              )})}
          </ol>
        </div>
      </div>
    );
  }
}
