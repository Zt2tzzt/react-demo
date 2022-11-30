import { memo, useState, useLayoutEffect, useEffect } from 'react'

const App = memo(() => {
	const [count, setCount] = useState(0)

	useLayoutEffect(() => {
		console.log('useLayoutEffect') // 第二个打印
	})

	useEffect(() => {
		console.log('useEffect'); // 第三个打印
	})

	console.log('App render') // 第一个打印

	return (
		<div>
			<h2>count: {count}</h2>
			<button onClick={e => setCount(count + 1)}>+1</button>
		</div>
	)
})

export default App