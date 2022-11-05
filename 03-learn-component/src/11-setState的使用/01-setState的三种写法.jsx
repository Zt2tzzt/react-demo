import React, { Component } from 'react'

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			msg: 'Hello World',
		}
	}

	render() {
		const { msg } = this.state

		return (
			<div>
				<h2>msg: { msg }</h2>
				<button onClick={ e => this.changeText() }>修改文本</button>
			</div>
		)
	}

	changeText() {
		// 1.setState 基本用法
		this.setState({ msg: '你好啊，李银河' })

		/**
		 * 2.setState 传入回调函数；
		 * 2点好处：
		 *  1.可在回调函数中编写新的 state 逻辑
		 *  2.当前的回调函数，会将之前的 state 和 props 传递过来
		 */
		this.setState((state, props) => {
			console.log('state2:', state); // 第二个被打印：'你好啊，李银河·
			return {
				msg: '你好吗？银河李'
			}
		}, () => {
			console.log('state2.1:', this.state); // 第三个被打印：'我很好，李银河'
		})

		/**
		 * 3.setState 在 React 的事件处理是中是异步调用的；
		 * 如果希望在数据更新（合并）之后，获取到对应的结果并执行一些逻辑代码，那么可以在 setState 中传入第二个参数
		 */
		this.setState({ msg: '我很好，李银河' }, () => {
			console.log('state3', this.state); // 第四个被打印：'我很好，李银河'
		})
		console.log('state4:', this.state) // 第一个打印：·Hello World·
	}

}

export default App