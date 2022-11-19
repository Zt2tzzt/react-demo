import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { addNumber } from '../store/features/counter'

export class About extends PureComponent {
	render() {
		const { counter } = this.props
		return (
			<div>
				<h2>About Counter: {counter}</h2>
				<button onClick={e => this.addNumber(5)}>+5</button>
			</div>
		)
	}

	addNumber(num) {
		this.props.addNumber(num)
	}
}

const mapStateToProps = state => ({
	counter: state.counter.counter
})
const mapDispatchToProps = dispatch => ({
	addNumber(num) {
		dispatch(addNumber(num))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(About)