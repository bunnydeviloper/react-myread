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
      moveBook: (book, newShelf, allShelvesUpdated) => {
        // map through all the books in the current state, look for new changes
        const newBookList = this.state.books.map(eachBook => {
          const foundID = allShelvesUpdated[newShelf].find(bookID => bookID === eachBook.id);
          // if there's a book that has been moved, we update the shelf for that book
          if (foundID) {
            eachBook.shelf = newShelf;
          }
          return eachBook; // each book will be added to the newBookList array
        });
        this.state.addBooks(newBookList); // update old -> new book list
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
