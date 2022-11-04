import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
	constructor() {
		super()
		this.state = {
			titles: ['流行', '新歌', '精选'],
			tabIndex: 0
		}
	}

	handleTabClick(index) {
		this.setState({ tabIndex: index })
	}

	render() {
		const { titles, tabIndex } = this.state
		return (
			<div className='app'>
				<TabControl
					titles={ titles }
					handleTabClick={ index => this.handleTabClick(index) } />
				<h1>{ titles[tabIndex] }</h1>
			</div>
		)
	}
}

export default App