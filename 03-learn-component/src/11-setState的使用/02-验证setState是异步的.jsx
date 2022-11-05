import React, { Component } from 'react'

export class app extends Component {
	constructor() {
		super()
		this.state = {
			counter: 0
		}
	}
	render() {
		console.log('render 被执行了'); // 只打印了一次
		const { counter } = this.state
		return (
			<div>
				<h2>当前计数：{ counter }</h2>
				<button onClick={ e => this.increment() }>counter+1</button>
			</div>
		)
	}
	increment() {
		this.setState({ counter: this.state.counter + 1 })
		this.setState({ counter: this.state.counter + 1 })
		this.setState({ counter: this.state.counter + 1 })
		// 最终 this.state.counter 应为3，但实际为1
	}
}

export default app