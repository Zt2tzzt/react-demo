import React, { memo, useState } from 'react'
import { useEffect } from 'react'

const App = memo(() => {
	const [count, setCount] = useState(100)

	useEffect(() => {
		console.log('useEffect');
		if (count === 0) {
			setCount(Math.random() + 99)
		}
	})

	console.log('App render')

	return (
		<div>
			{/* 会出现闪烁的现象，由 0 闪烁切换为一个随机的数字 */}
			<h2>count: {count}</h2>
			<button onClick={e => setCount(0)}>设置为 0</button>
		</div>
	)
})

export default App