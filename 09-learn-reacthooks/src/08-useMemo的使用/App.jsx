import React, { memo, useState, useMemo, useCallback } from 'react'

function calcNumTotal(num) {
	let total = 0
	for (let i = 0; i <= num; i++) {
		total += i
	}
	return total
}

const HelloWorld = memo((props) => {
	console.log('HellowWorld 被渲染了');
	return <h2>Hello World</h2>
})

const App = memo(() => {
	const [count, setCount] = useState(0)

	/**
	 * 基本数据类型，不能体现 useMemo 的优化效果
	 */
	const res1 = useMemo(() => calcNumTotal(50)) // 1.不依赖任何值
	const res2 = useMemo(() => calcNumTotal(count), [count]) // 2.依赖 count

	/**
	 * 使用 useMemo 对传入子组件的引用类型做优化，
	 * 	不依赖任何状态，每次组件更新，info 引用地址不变；
	 * 	使子组件不会频繁渲染更新，
	 */
	const info = useMemo(() => ({ name: 'zzt', age: 18 }), [])
	// const info = { name: 'zzt', age: 18 }

	/**
	 * useMemo 与 useCallback 的对比。
	 */
	function fn() { }
	const fn1 = useMemo(() => fn, [])
	const fn2 = useCallback(fn, [])
	console.log('fn1 === fn2', fn1 === fn2); // true

	return (
		<div>
			<h2>计数结果1：{res1}</h2>
			<h2>计数结果2：{res2}</h2>
			<button onClick={e => setCount(count + 1)}>+1</button>
			<HelloWorld info={info} />
		</div>
	)
})

export default App