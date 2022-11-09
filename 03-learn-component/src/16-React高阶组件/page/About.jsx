import React, { PureComponent } from 'react'
import enhanceUserInfo from '../hoc/enhanced_props'

class About extends PureComponent {
	render() {
		return (
			<div>About: {this.props.name}</div>
		)
	}
}

export default enhanceUserInfo(About)