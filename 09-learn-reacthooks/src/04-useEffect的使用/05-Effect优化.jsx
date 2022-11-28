import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
	const [count, setCount] = useState(0)
	const [msg, setMsg] = useState('Hello World')

	// 使用 useEffect 模拟 componentDidMount 和 componentWillUnmount 生命周期，传入一个空数组。
	useEffect(() => {
		console.log('订阅 redux 中的数据')
		return () => {
			console.log('取消订阅');
		}
	}, [])

	useEffect(() => {
		console.log('监听 eventBus 的 zzt 事件')
		return () => {
			console.log(`取消监听`);
		}
	}, [])

	useEffect(() => {
		console.log('发送网络请求，从服务器获取数据')
		return () => {
			console.log('会在组件被卸载时，');
		}
	}, [])

	// 使用 useEffect 模拟 componentDidUpdate，传入一个数组，里面存放了依赖的状态
	useEffect(()=> {
		console.log('count 更新了', count);
	}, [count])


	return (
		<div>
			<button onClick={e => setCount(count + 1)}>+1{count}</button>
			<button onClick={e => setMsg('你好啊！')}>修改msg{msg}</button>
		</div>
	)
})

export default App