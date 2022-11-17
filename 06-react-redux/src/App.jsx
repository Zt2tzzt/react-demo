import React, { PureComponent } from 'react'
import Home from './page/Home'
import Profile from './page/Profile'
import './App.css'
import store from './store'
import About from './page/About'
import Category from './page/Category'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter.counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState().counter
      this.setState({ counter: state.counter })
    })
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>APP Counter: {counter}</h2>
        <div className="pages">
          <Home />
          <Profile />
          <About />
          <Category />
        </div>
      </div>
    )
  }
}

export default App