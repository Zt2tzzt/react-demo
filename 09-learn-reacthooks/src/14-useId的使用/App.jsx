import React, { memo } from 'react'
import { useId } from 'react'
import { useState } from 'react'

const App = memo(() => {
	const [count, setCount] = useState(0)

	const id = useId()
	console.log('id:', id) // 点击下方按钮，每次渲染的 id 都相同。

	return (
		<div>
			<button onClick={e => setCount(count + 1)}>count+1-{count}</button>
			<label htmlFor={id}>
				用户名：<input id={id} type="text" />
			</label>
		</div>
	)
})

export default App