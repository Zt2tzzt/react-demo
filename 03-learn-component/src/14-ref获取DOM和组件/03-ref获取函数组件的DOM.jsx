import React, { PureComponent } from 'react'
import { forwardRef } from 'react'
import { createRef } from 'react'

export class App extends PureComponent {
	constructor() {
		super()
		this.hwRef = createRef()
	}
	render() {
		return (
			<div>
				<HelloWorld ref={ this.hwRef } />
				<button onClick={ e => this.getComponent() }>获取组件实例</button>
			</div>
		)
	}

	getComponent() {
		console.log(this.hwRef.current);
	}
}

export default App

export const HelloWorld = forwardRef(function(props, ref) {
	return (
		<div>
			<h1 ref={ ref }>Hello World</h1>
			<p>呵呵呵</p>
		</div>
	)
})
