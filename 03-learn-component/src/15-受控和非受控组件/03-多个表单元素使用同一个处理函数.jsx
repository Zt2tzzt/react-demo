import React, { PureComponent } from 'react'

export class App extends PureComponent {
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
	}
	render() {
		const { username, password } = this.state
		return (
			<div>
				<form onSubmit={e => this.onSubmitClick(e)}>
					{/* 1.用户名 */}
					<label htmlFor="username">
						<input
							id="username"
							type="text"
							name="username"
							value={username}
							onInput={e => this.onInputChange(e)}
						/>
					</label>
					<label htmlFor="password">
						<input
							id="username"
							type="password"
							name="password"
							value={password}
							onChange={e => this.onInputChange(e)}
						/>
					</label>
					<button type="submit">注册</button>
				</form>
			</div>
		)
	}

	onSubmitClick(e) {
		// 1.组织默认的行为。
		e.preventDefault()
		// 2.获取到所有的表单数据，对数据进行组织。
		console.log('username:', this.state.username, 'password:', this.state.password)
		// 3.以网络请求 ajax 的方式，将数据传递给服务器。
	}
	onInputChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}
}

export default App
