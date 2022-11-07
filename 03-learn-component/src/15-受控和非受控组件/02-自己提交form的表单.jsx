import React, { PureComponent } from 'react'

export class App extends PureComponent {
	constructor() {
		super()
		this.state = {
			username: ''
		}
	}
	render() {
		const { username } = this.state
		return (
			<div>
				<form onSubmit={e => this.onSubmitClick(e)}>
					{/* 1.用户名 */}
					<label htmlFor="username">
						<input
							id="username"
							type="text"
							name="username"
							value={ username }
							onInput={e => this.onUsernameInput(e)}
						/>
					</label>
					<button type="submit">注册</button>
				</form>
			</div>
		)
	}

	onSubmitClick(e) {
		// 1.阻止默认的行为
		e.preventDefault()
		// 2.获取到所有的表单数据，对数据进行组织
		console.log('username:', this.state.username)
		// 3.使用 ajax 发送网络请求，将数据传送给服务器
		// ...
	}
	onUsernameInput(e) {
		this.setState({ username: e.target.value })
	}
}

export default App
