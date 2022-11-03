import React from 'react'

export class App extends React.Component {
	constructor() {
		super()
		this.state = {
			msg: 'App Component'
		}
	}

	render() {
		// const { msg } = this.state

		// 1. 返回 react 元素，jsx 代码会被编译成 React.createElement 函数，会返回一个 React 元素。
		/* return (
			<div>{ msg }</div>
		) */

		// 2. 返回组件或者 fragments
		/* return [
			<h1>h1 元素</h1>,
			<h2>h2 元素</h2>,
			<div>哈哈哈</div>
		] */

		// 3. 返回字符串
		return 'Hello world'
	}
}

export default App