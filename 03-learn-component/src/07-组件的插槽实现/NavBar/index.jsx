import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export class NavBar extends Component {
	render() {
		const { children } = this.props
		console.log('children:', children);

		return (
			<div className='nav-bar'>
				<div className="left">{ children[0] }</div>
				<div className="center">{ children[1] }</div>
				<div className="right">{ children[2] }</div>
			</div>
		)
	}
}

// children 传多个元素，进行验证
NavBar.propTypes = {
	children: PropTypes.array
}
// children 传单个元素，进行验证
/* NavBar.propTypes = {
	children: PropTypes.element
} */

export default NavBar