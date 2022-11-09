import React, { PureComponent } from 'react'
import Cart from './page/Cart'

export class App extends PureComponent {
	render() {
		return (
			<div>
				App
				<button onClick={e => this.loginClick()}>登录</button>
				<Cart />
			</div>
		)
	}

	loginClick() {
		localStorage.setItem('token', 'zzt')
		this.forceUpdate()
	}
}

export default App