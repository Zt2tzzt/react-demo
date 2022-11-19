import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchHomeMultidateAction } from '../store/features/home'

export class Home extends PureComponent {
	componentDidMount() {
		this.props.fetchHomeMultidata()
	}

	render() {
		const { counter } = this.props
		return (
			<div>
				<h2>Home Counter: {counter}</h2>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	counter: state.counter.counter
})
const mapDispatchToProps = dispatch => ({
	fetchHomeMultidata() {
		dispatch(fetchHomeMultidateAction({name: 'zzt', age: 18}))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)