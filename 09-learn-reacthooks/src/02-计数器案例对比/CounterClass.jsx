import React, { PureComponent } from 'react'

export class CounterClass extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0
		}
	}

	render() {
		const { counter } = this.state

		return (
			<div>
				<h1>当前计数：{counter}</h1>
				<button onClick={e => this.increment()}>+1</button>
				<button onClick={e => this.decrement()}>-1</button>
			</div>
		)
	}

	increment() {
		this.setState({
			counter: this.state.counter + 1
		})
	}
	decrement() {
		this.setState({
			counter: this.state.counter - 1
		})
	}
}

export default CounterClass
