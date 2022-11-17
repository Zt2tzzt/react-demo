import React, { PureComponent } from 'react'
import store from '../store'
import { subAction } from '../store/counter'

export class Profile extends PureComponent {
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
				<h2>Profile Counter: {counter}</h2>
				<button onClick={e => this.onBtnClick(1)}>-1</button>
				<button onClick={e => this.onBtnClick(5)}>-5</button>
				<button onClick={e => this.onBtnClick(8)}>-8</button>
			</div>
		)
	}

	onBtnClick(count) {
		store.dispatch(subAction(count))
	}
}

export default Profile