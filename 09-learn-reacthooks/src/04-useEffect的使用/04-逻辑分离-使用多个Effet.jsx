import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		// 1.DOM 操作，修改 document 的 title
		console.log('修改 title')
	})

	useEffect(() => {
		// 2.订阅（subscripe） redux 中状态的变化
		console.log('订阅 redux 中的状态变化')
		return () => {
			console.log('取消订阅');
		}
	})

	useEffect(() => {
		// 3.监听 eventBus 中的 zzt 事件
		console.log('监听 eventBus 中的 zzt 事件')
		return () => {
			console.log('取消监听');
		}
	})

	return (
		<div>
      <button onClick={e => setCount(count+1)}>+1({count})</button>
		</div>
	)
})

export default App