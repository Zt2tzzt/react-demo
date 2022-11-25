import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom'

export class Profile extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isLogin: false
		}
	}

	render() {
		const { isLogin } = this.state
		return (
			<div>
				<h2>Login Page</h2>
				{!isLogin ? <button onClick={e => this.login()}>登录</button> : <Navigate to='/home' />}
			</div>
		)
	}

	login() {
		this.setState({ isLogin: true })
	}
}

export default Profile