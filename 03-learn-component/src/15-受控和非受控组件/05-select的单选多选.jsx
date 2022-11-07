import React, { PureComponent } from 'react'

export class App extends PureComponent {
	constructor() {
		super()
		this.state = {
			gender: '',
			fruit: ['orange']
		}
	}
	render() {
		const { fruit, gender } = this.state
		return (
			<div>
				{/* select 单选处理 */}
				<select value={gender} onChange={e => this.onGenderChange(e)}>
					<option value="male">男</option>
					<option value="female">女</option>
				</select>
				{/* select 多选处理 */}
				<select value={fruit} onChange={e => this.onFruitChange(e)} multiple>
					<option value="apple">苹果</option>
					<option value="banana">香蕉</option>
					<option value="orange">橘子</option>
				</select>
			</div>
		)
	}

	onGenderChange(e) {
		this.setState({ gender: e.target.value })
	}

	onFruitChange(e) {
		// Array.from(iterable, mapHandler)
		const fruit = Array.from(e.target.selectedOptions, item => item.value)
		this.setState({ fruit })
	} 
}

export default App