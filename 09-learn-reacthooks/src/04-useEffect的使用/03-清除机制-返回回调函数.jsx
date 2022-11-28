import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
	const [count, setCount] = useState(0)

	// 当前组件渲染完成（初次渲染或更新）后，要执行的副作用。
	useEffect(() => {
		console.log('监听 redux 中的数据变化， 监听 eventBus 中的 zzt 事件')

		// 返回值：回调函数 => 组件被重新渲染（更新）或被卸载的时候执行。
		return () => {
			console.log('取消监听 redux 中的数据变化，取消监听 eventBus 中的 zzt 事件');
		}
	})

	return (
		<div>
			<button onClick={e=> setCount(count + 1)}>+1{count}</button>
		</div>
	)
})

export default App