import React, { Component } from 'react';

export const MyContext = React.createContext();

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      addBooks: books => {
        const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
        const wantToRead = books.filter(book => book.shelf === "wantToRead");
        const read = books.filter(book => book.shelf === "read");
        this.setState({ books, currentlyReading, wantToRead, read });
      },
      moveBook: (book, newShelf, allShelves) => {
        console.log('newShelf ', newShelf);
        console.log('allShelves ', allShelves);
        // first map through all the books in the current state
        const newBook = this.state.books.map(allBooks => {
          // if you find
        });
      }
    };
  }
  render() {
    return (
      <MyContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
