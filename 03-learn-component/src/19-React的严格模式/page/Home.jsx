import React, { PureComponent } from 'react'

export class Home extends PureComponent {
	constructor(props) {
		super(props)
		console.log('Home Constructor');
	}
	componentDidMount() {
		console.log('Home componentDidMount');
	}
	render() {
		console.log('Home Render')
		return (
			<div>
				<h2>Home</h2>
			</div>
		)
	}
}

export default Home