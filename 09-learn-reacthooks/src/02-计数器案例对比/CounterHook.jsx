import React, { memo } from 'react'
import { useState } from 'react'

const CounterHook = memo(() => {
	const [counter, setCounter] = useState(0)

	return (
		<div>
			<h1>当前计数：{counter}</h1>
			<button onClick={e => setCounter(counter + 1)}>+1</button>
			<button onClick={e => setCounter(counter - 1)}>-1</button>
		</div>
	)
})

export default CounterHook