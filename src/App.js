import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './view/Search'
import Home from './view/Home'
import { Switch, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/search"} component={Search} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
