import React, { PureComponent } from 'react'
import Home from './page/Home'
import Profile from './page/Profile'
import './App.css'
import store from './store'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
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
        </div>
      </div>
    )
  }
}

export default App