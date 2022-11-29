import React, { memo, useState, useCallback, useRef } from 'react'

const ZtButton = memo((props) => {
	console.log('zt button 被渲染');
	const { increment } = props
	return (
		<div>
			<h1>当前计数：{props.count}</h1>
			<button onClick={increment}>ZtButton +1</button>
		</div>
	)
})

const App = memo(() => {
	const [count, setCount] = useState(0)
	const [msg, setMsg] = useState('Hello Frog')

	/**
	 * 在 useCallback 中将 count 依赖移除掉，会产生“闭包陷阱”
	 * 使用 useRef hook，生成一个 countRef，将其中的 value 属性赋值为 count。
	 * 使得 useCallback 中使用的匿名函数的闭包引用 countRef
	 */
	const countRef = useRef()
	countRef.current = count
	const increment = useCallback(function() {
		setCount(countRef.current + 1)
	}, [])

	return (
		<div>
			<h1>计数：{count}</h1>
			<button onClick={increment}>+1</button>
			<ZtButton increment={increment} count={count} />
			<h1>文本：{msg}</h1>
			<button onClick={e => setMsg('你好啊，李银河！')}>修改文本</button>
		</div>
	)
})

export default App