import React, { PureComponent } from 'react'

export class App extends PureComponent {
	constructor() {
		super()
		this.state = {
			isAgree: false,
			hobbies: [
				{ value: 'sing', text: '唱', isChecked: false },
				{ value: 'dance', text: '跳', isChecked: false },
				{ value: 'rap', text: 'rap', isChecked: false }
			]
		}
	}
	render() {
		const { isAgree, hobbies } = this.state
		return (
			<div>
				{/* checkbox 单选 */}
				<label htmlFor="agree">
					<input
						type="checkbox"
						id="agree"
						checked={isAgree}
						onChange={e => this.onAgreeChange(e)}
					/>
					同意协议
				</label>
				{/* checkbox 多选 */}
				<div>
					您的爱好：
					{hobbies.map((item, index) => (
						<label htmlFor={item.value} key={item.value}>
							<input
								type="checkbox"
								id={item.value}
								checked={item.isChecked}
								onChange={e => this.onHobbiesChange(e, index)}
							/>
							<span>{item.text}</span>
						</label>
					))}
				</div>
			</div>
		)
	}
	onAgreeChange(e) {
		// checkbox 单选，取 checked 属性
		this.setState({ isAgree: e.target.checked })
	}
	onHobbiesChange(e, index) {
		const hobbies = [...this.state.hobbies]
		hobbies[index].isChecked = e.target.checked
		this.setState({ hobbies })
	}
}

export default App
