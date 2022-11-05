import React, { Component } from 'react'
import mitter from './utils/event-bus'

export class HomeBanner extends Component {
	onPrevClick() {
		console.log('上一个')
		mitter.emit('bannerPrev', { name: 'zzt', age: 18, height: 1.88 })
	}
	onNextClick() {
		console.log('下一个')
		mitter.emit('bannerNext', { nickname: 'kobe', level: 99 })
	}

	render() {
		return (
			<div>
				<h2>HomeBanner</h2>
				<button onClick={e => this.onPrevClick()}>上一个</button>
				<button onClick={e => this.onNextClick()}>下一个</button>
			</div>
		)
	}
}

export default HomeBanner
