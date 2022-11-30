import React, { memo, useState, useRef, useCallback } from 'react'

let obj = null

const App = memo(() => {
	const [count, setCount] = useState(0)

	// 验证 useRef 每次返回的是同一个对象。
	const nameRef = useRef()
	console.log('obj === nameRef', obj === nameRef); // 第一次点击按钮为 false，之后点击按钮为 true
	obj = nameRef

	// 通过 useRef 解决闭包陷阱
	const countRef = useRef()
	countRef.current = count
	const increment = useCallback(() => {
		setCount(countRef.current + 1)
	}, [])

	return (
		<div>
			<h2>Hello World：{count}</h2>
			<button onClick={e => setCount(count + 1)}>+1</button>
			<button onClick={increment}>+1</button>
		</div>
	)
})

export default App