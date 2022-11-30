import React, { memo } from 'react'
import { useLocalStorage } from './hooks'

const App = memo(() => {
	const [token, setToken] = useLocalStorage('token')
	function handleSetToken() {
		setToken('james')
	}

	const [avatarUrl, setAvatarUrl] = useLocalStorage('avatarUrl')
	function handleSetAvatar() {
		setAvatarUrl('http://www.zzt.com/cba.png')
	}

	return (
		<div className='app'>
			<h1>App Root Component：{token}</h1>
			<button onClick={handleSetToken}>设置 token</button>
			<h1>avatarUrl: {avatarUrl}</h1>
			<button onClick={handleSetAvatar}>设置新头像地址</button>
		</div>
	)
})

export default App