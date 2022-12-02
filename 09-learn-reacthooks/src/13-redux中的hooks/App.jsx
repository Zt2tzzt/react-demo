import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addNumberAction, changeMsgAction, subNumberAction } from './store/features/counter'

// memo 高阶组件包裹起来的组件的特点：只有 props 发生改变时，才会重新渲染。
const Home = memo(props => {
	const { msg } = useSelector(state => ({
		msg: state.counter.msg
	}), shallowEqual)

	const dispatch = useDispatch()

	function changeMsgHandle() {
		dispatch(changeMsgAction('你好啊，师姐！'))
	}

	console.log('Home render') // 如果不传入 shallowEqual， 当 store 中的 count 改变时，会打印。意味着与组件不相关的状态改变，组件也重新渲染了。

	return (
		<div>
			<h2>Home: {msg}</h2>
			<button onClick={e => changeMsgHandle()}>修改 msg</button>
		</div>
	)
})

const App = memo((props) => {
	// 1.使用 useSelector 将 redux 中的 store 的数据映射到组件内
	const { count } = useSelector(state => ({
		count: state.counter.count
	}), shallowEqual)

	// 2.使用 dispatch 直接派发 action
	const dispatch = useDispatch()
	
	function changeNumberHandle(num, isAdd = true) {
		if (isAdd)
			dispatch(addNumberAction(num))
		else
			dispatch(subNumberAction(num))
	}

	console.log('App render'); // 如果不传入 shallowEqual， 当 store 中的 msg 改变时，会打印。意味着与组件不相关的状态改变，组件也重新渲染了。
	
	return (
		<div>
			<h2>当前计数：{count}</h2>
			<button onClick={e => changeNumberHandle(1)}>+1</button>
			<button onClick={e => changeNumberHandle(6)}>+6</button>
			<button onClick={e => changeNumberHandle(6, false)}>-6</button>
			<Home />
		</div>
	)
})

export default App