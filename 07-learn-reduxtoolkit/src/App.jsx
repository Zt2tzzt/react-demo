import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import About from './page/About'
import Home from './page/Home'
import Profile from './page/Profile'

export class App extends PureComponent {
  render() {
    const { counter } = this.props
    return (
      <div>
        <h2>App Counter: {counter}</h2>
        <div className="pages">
          <About />
          <Home />
          <Profile />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter
})

export default connect(mapStateToProps)(App)
