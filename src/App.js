import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Componentes
import notFound from './views/notFound.js'
import Menu from './components/Menu'
import Home from './views/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path='/home' component={Home}></Route>
            <Route component={notFound}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
