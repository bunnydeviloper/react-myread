import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './view/Search'
import Home from './view/Home'
import { Switch, Route } from 'react-router-dom'
import Provider, { MyContext } from './Provider'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
          <Switch>
            <Route exact path={"/"}
              render={() => (
                <MyContext.Consumer>
                  { context => <Home { ...context } />}
                </MyContext.Consumer>
              )} />
            <Route exact path={"/search"} component={Search} />
          </Switch>
        </Provider>
      </div>
    )
  }
}

export default BooksApp
