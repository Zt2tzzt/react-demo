import React, { PureComponent } from 'react'
import store from '../store'
import { subAction } from '../store/actionCreators'

export class Profile extends PureComponent {
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
				<h2>Profile Counter: {counter}</h2>
				<button onClick={e => this.onBtnClick(-1)}>-1</button>
				<button onClick={e => this.onBtnClick(-5)}>-5</button>
				<button onClick={e => this.onBtnClick(-8)}>-8</button>
			</div>
		)
	}

	onBtnClick(count) {
		store.dispatch(subAction(count))
	}
}

export default Profile