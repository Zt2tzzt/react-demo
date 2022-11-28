import React, { memo, useState, useEffect } from 'react'

const App = memo(() => {
	const [count, setCount] = useState(200)

	// document.title = count // 在函数中直接修改，这样写能达到效果，但是

	useEffect(() => {
		// 当前传入的回调函数，会在组件被渲染完成后，自动执行。
		// 可做操作：网络请求/DOM操作（修改标题）/事件监听。
		document.title = count
	})

	return (
		<div>
			<h2>当前计数：{count}</h2>
			<button onClick={e => setCount(count + 1)}>+1</button>
		</div>
	)
})

export default App