import React, { PureComponent } from 'react'

export class Home extends PureComponent {

	/* shouldComponentUpdate(newProps, newState) {
		return this.props.msg !== newProps.msg
	} */

	render() {
		console.log('Home render');
		const { msg } = this.props
		return (
			<div>
				<h2>Home：{ msg }</h2>
			</div>
		)
	}
}

export default Home