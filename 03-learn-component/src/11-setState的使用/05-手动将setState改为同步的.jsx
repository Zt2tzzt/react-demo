import React, { Component } from 'react'
import { flushSync } from 'react-dom'

function Hello(props) {
	return <h2>{props.message}</h2>
}

export class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			message: 'Hello World'
		}
	}

	render() {
		const { message } = this.state
		console.log('render被执行')

		return (
			<div>
				<h2>message: {message}</h2>
				<button onClick={e => this.changeText()}>修改文本1</button>
				<Hello message={message} />
			</div>
		)
	}

	changeText() {
		flushSync(() => {
			this.setState({ message: '你好啊, 李银河' })
		})
		console.log('message:', this.state.message)
	}
}

export default App