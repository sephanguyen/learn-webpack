import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import routes from './routes'
import Menu from './components/Menu/Menu'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Menu />
          {this.showContentMenus(routes)}
        </div>
      </HashRouter>
    )
  }

  showContentMenus = routes => {
    var result = null
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return <Switch>{result}</Switch>
  }
}

export default App
