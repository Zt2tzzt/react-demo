import React, { PureComponent } from 'react'
import { createRef } from 'react'

export class App extends PureComponent {
	constructor() {
		super()
		this.titleRef = createRef()
		this.titleEl = null
	}
	
	render() {
		return (
			<div>
				<h2 ref="zzt">Hello World</h2>
				<h2 ref={ this.titleRef }>你好啊，李银河</h2>
				<h2 ref={ el => this.titleEl = el }>你好啊，师姐</h2>
				<button onClick={ e => this.getNativeDOM() }>获取DOM</button>
			</div>
		)
	}

	getNativeDOM() {
		// 方式一：在 React 元素上绑定一个 ref 字符串，已不推荐使用。
		console.log(this.refs.zzt);

		// 方式二：提前创建好 ref 对象,使用 createRef() API，将创建出来的对象绑定到元素（官方推荐的方式）
		console.log(this.titleRef.current)

		// 方式三：传入一个回调函数。在对应的元素被渲染之后，回调函数被执行，并且将元素传入
		console.log(this.titleEl);
	}
}

export default App