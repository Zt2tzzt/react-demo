import React, { Component } from 'react'
import HelloWorld from './HelloWorld'

export class App extends Component {
	constructor() {
		super()
		this.state = {
			isShow: true
		}
	}


	render() {
		const { isShow } = this.state
		
		return (
			<div>
				<button>切换</button>
				{ isShow && <HelloWorld /> }
			</div>
		)
	}
}

export default App