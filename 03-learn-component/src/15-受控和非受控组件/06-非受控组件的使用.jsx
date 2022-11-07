import React, { PureComponent } from 'react'
import { createRef } from 'react'

export class App extends PureComponent {
	constructor() {
		super()
		this.state = {
			intro: '哈哈哈'
		}
		this.introRef = createRef()
	}

	componentDidMount() {
		this.introRef.current.addEventListener('input', e => {
			console.log('intro value:', e.currentTarget.value);
		})
	}

	render() {
		const { intro } = this.state
		return (
			<div>
				<form onSubmit={e => this.onSubmitChange(e)}>
					<label htmlFor="intro">
						<input
							type="text"
							id="intro"
							defaultValue={intro}
							ref={this.introRef}
						/>介绍
					</label>
					<button type='submit'>注册</button>
				</form>
			</div>
		)
	}

	onSubmitChange(e) {
		// 1.组织默认的行为
		e.preventDefault()
		// 2.获取到到所有表单数据，对数据进行组织。
		console.log('intro value:', this.introRef.current.value);
		// 3.发送 ajax 网络请求，将数据传递给服务器
	}
}

export default App
