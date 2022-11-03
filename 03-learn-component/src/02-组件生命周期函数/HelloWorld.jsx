import React, { Component } from 'react'

export class HelloWorld extends Component {
	// 1.构造方法
	constructor() {
		console.log('HelloWorld Construct');
		super()

		this.state = {
			msg: 'Hello World'
		}
	}

	changeText() {
		this.setState({ msg: '你好啊，李银河'})
	}

	// 2.执行 render 函数
	render() {
		console.log('Hello World render');
		const { msg } = this.state

		return (
			<div>
				<h2>{ msg }</h2>
				<p>{ msg } 是程序员的第一行代码</p>
				<button onClick={e => this.changeText()}>修改文本</button>
			</div>
		)
	}

	// 3.组件被挂在带 DOM
	componentDidMount() {
		console.log('Hello World componentDidMount');
	}

	// 4.组件 DOM 更新完成
	componentDidUpdate(prevProsps, prevState, snapShot) {
		console.log('HelloWorld componentDidUpdate:', prevProsps, prevState, snapShot);
	}

	// 5.组件从 DOM 中卸载
	componentWillUnmount() {
		console.log('HelloWorld componentWillUnmount');
	}

	// --------不常用的生命周期---------
	
	shouldComponentUpdate() {
		return true // 表示进行更新
	}

	getSnapshotBeforeUpdate() {
		console.log('getSnapshotBeforeUpdate');
		// 给 componentDidUpdate 中的 snapShot 参数传值。
		return {
			scrollPosition: 1000
		}
	}

}

export default HelloWorld