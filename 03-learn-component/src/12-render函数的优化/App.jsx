import React, { PureComponent } from 'react'
import Home from './Home';
import Profile from './Profile';

export class App extends PureComponent {
	constructor() {
		super()
		this.state = {
			msg: 'Hello World',
			counter: 0
		}
	}

	/* shouldComponentUpdate(newProps, newState) {
		return this.state.msg !== newState.msg || this.state.counter !== newState.counter
	} */

	render() {
		console.log('App render');
		const { msg, counter } = this.state
		return (
			<div>
				<h2>App: { msg }-{ counter }</h2>
				<button onClick={ e => this.changetext() }>修改文本</button>
				<button onClick={ e => this.changeCouter() }>counter+1</button>
				<Home msg={ msg } />
				<Profile msg={ msg } />
			</div>
		)
	}

	changetext() {
		this.setState({ msg: 'Hello World' })
	}
	changeCouter() {
		this.setState({ counter: this.state.counter + 1})
	}
}

export default App