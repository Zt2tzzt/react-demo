import React from 'react'
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			msg: 'Hello React Scaffold'
		}
	}

	render() {
		const { msg } = this.state

		return (
			<div>
				<h2>{ msg }</h2>
				<HelloWorld />
			</div>
		)
	}
}

export default App