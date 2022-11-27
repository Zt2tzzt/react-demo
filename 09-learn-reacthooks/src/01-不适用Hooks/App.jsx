import React from 'react'

function App() {
	let msg = 'Hello World'

	/**
	 * 函数式组件存在的最大缺陷：
	 * 	1.修改 msg 之后，组件不会被重新渲染。
	 * 	2.即使页面重新渲染，意味着函数会被重新执行，那么重新给 msg 赋值为“Hello World”
	 * 	3.类似于生命周期的回调函数，也是没有的。
	 */

	return (
		<div>
			<h2>内容：{msg}</h2>
			<button onClick={e => msg = '你好啊，李银河！'}>修改文本</button>
		</div>
	)
}

export default App