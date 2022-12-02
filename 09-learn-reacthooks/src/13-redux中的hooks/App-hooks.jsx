import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumberAction, subNumberAction } from './store/features/counter'

const App = memo((props) => {
	// 1.使用 useSelector 将 redux 中的 store 的数据映射到组件内
	const { count } = useSelector(state => ({
		count: state.counter.count
	}))

	// 2.使用 dispatch 直接派发 action
	const dispatch = useDispatch()
	
	function changeNumberHandle(num, isAdd = true) {
		if (isAdd)
			dispatch(addNumberAction(num))
		else
			dispatch(subNumberAction(num))
	}
	
	return (
		<div>
			<h2>当前计数：{count}</h2>
			<button onClick={e => changeNumberHandle(1)}>+1</button>
			<button onClick={e => changeNumberHandle(6)}>+6</button>
			<button onClick={e => changeNumberHandle(6, false)}>-6</button>
		</div>
	)
})

export default App