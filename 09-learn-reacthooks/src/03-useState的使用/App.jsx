import React, { memo } from 'react'
import { useState } from 'react'

const App = memo(() => {
	const [msg, setMsg] = useState('Hello World')

	function changeMsg() {
		setMsg('你好啊，李银河！')
	}

	return (
		<div>
			<h2>App: {msg}</h2>
			<button onClick={changeMsg}>修改文本</button>
		</div>
	)
})

export default App