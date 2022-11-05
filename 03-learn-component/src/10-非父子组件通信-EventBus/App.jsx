import React, { Component } from 'react'
import Home from './Home'
import mitter from './utils/event-bus'

export class App extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			age: 0,
			height: 0
		}
	}

	componentDidMount() {
		mitter.on('bannerPrev', this.handleBannerPrevClick.bind(this))
		mitter.on('bannerNext', this.handleBannerNextClick.bind(this))
	}

	handleBannerPrevClick(event) {
		console.log('handleBannerPrevClick event:', event, 'this:', this)
	}
	handleBannerNextClick(event) {
		console.log('handleBannerNextClick event:', event, 'this:', this)
	}

	componentWillUnmount() {
		mitter.all.clear()
	}

	render() {
		const { name, age, height } = this.state

		return (
			<div>
				<h3>
					App Component: {name}-{age}-{height}-
				</h3>
				<Home />
			</div>
		)
	}
}

export default App
