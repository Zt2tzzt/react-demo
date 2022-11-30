import React, { memo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function useLogLife(cname) {
	useEffect(() => {
		console.log(cname + '组件被创建');
		return () => {
			console.log(cname + '组件被销毁')
		}
	}, [cname])
}

const Home = memo(() => {
	useLogLife('home')
	return <h1>Home Page</h1>
})

const About = memo(() => {
	useLogLife('about')
	return <h1>About Page</h1>
})

const App = memo(() => {
	const [isShow, setIsShow] = useState(true)

	return (
		<div>
			<h1>App Root Component</h1>
			<button onClick={e => setIsShow(!isShow)}>切换</button>
			{isShow && <Home />}
			{isShow && <About />}
		</div>
	)
})

export default App