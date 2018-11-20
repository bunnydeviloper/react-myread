import React, { Component } from 'react';
import Shelf from '../components/Shelf'
import FAB from '../components/FAB'

export default class Home extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf />
        </div>
        <FAB />
      </div>
    );
  }
}
