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
		this.setState(state => ({ counter: state.counter + 1 }))
		this.setState(state => ({ counter: state.counter + 1 }))
		this.setState(state => ({ counter: state.counter + 1 }))
		// 最终 this.state.counter 结果为3
	}
}

export default app