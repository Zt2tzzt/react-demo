import React, { PureComponent } from 'react'
import { createRef } from 'react'

export class App extends PureComponent {
	constructor() {
		super()
		this.hwRef = createRef()
		this.hwEl = null
	}
	render() {
		return (
			<div>
				<HelloWorld ref={this.hwRef} />
				<HelloWorld ref={ el => this.hwEl = el } />
				<button onClick={ e => this.getComponent() }>获取组件实例</button>
			</div>
		)
	}

	getComponent() {
		console.log(this.hwRef.current);
		this.hwRef.current.test()
	}
}

export default App

export class HelloWorld extends PureComponent {
	test() {
		console.log('test------');
	}
	render() {
		return (
			<div>HelloWorld</div>
		)
	}
}
