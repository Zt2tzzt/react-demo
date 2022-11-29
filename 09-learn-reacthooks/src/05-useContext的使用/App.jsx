import React, { memo, useContext } from 'react'
import { ThemeContet, UserContext } from './content'

const App = memo(() => {
	// 使用 Context
	const user = useContext(UserContext)
	const theme = useContext(ThemeContet)

	return (
		<div>
			<h2>User：{user.name}-{user.level}</h2>
			<h2 style={{color: theme.color, fontSize: theme.size}}>Theme</h2>
		</div>
	)
})

export default App