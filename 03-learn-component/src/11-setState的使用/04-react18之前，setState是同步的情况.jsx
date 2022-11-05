import React, { Component } from 'react'

function Hello(props) {
	return <h2>{props.message}</h2>
}

export class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			message: 'Hello World'
		}
	}

	componentDidMount() {
		const btnEl = document.querySelector('.btn')
		// 在react18之前, setTimeout中setState操作, 是同步操作
		// 在react18之后, setTimeout中setState异步操作(批处理)
		btnEl.addEventListener('click', () => {
			this.setState({ message: '你好吗？银河李' })
      console.log('message:', this.state.message)
		})
	}

	render() {
		const { message } = this.state
		console.log('render被执行')

		return (
			<div>
				<h2>message: {message}</h2>
				<button onClick={e => this.changeText()}>修改文本1</button>
				<button className="btn">修改文本2</button>
				<Hello message={message} />
			</div>
		)
	}

	changeText() {
		setTimeout(() => {
			// 在react18之前, setTimeout中setState操作, 是同步操作
			// 在react18之后, setTimeout中setState异步操作(批处理)
			this.setState({ message: '你好啊, 李银河' })
			console.log('message:', this.state.message)
		}, 0)
	}
}

export default App
