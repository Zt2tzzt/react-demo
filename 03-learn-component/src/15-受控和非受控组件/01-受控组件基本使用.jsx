import React, { PureComponent } from 'react'

export class App extends PureComponent {
	constructor() {
		super()
		this.state = {
			username: 'zzt'
		}
	}

	render() {
		const { username } = this.state
		return (
			<div>
				{/* 受控组件 */}
				<input type="text" value={ username } onInput={ e => this.onInputChange(e) } />
				{/* 非受控组件 */}
				<input type="text" />
				<h2>username: { username }</h2>
			</div>
		)
	}

	onInputChange(e) {
		console.log('input value:', e.target.value)
		this.setState({ username: e.target.value})
	}
}

export default App