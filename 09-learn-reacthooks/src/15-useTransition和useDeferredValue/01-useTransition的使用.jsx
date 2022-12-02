import React, { memo, useState, useTransition } from 'react'
import namesArr from './namesArray';

const App = memo(() => {
	const [names, setShowNames] = useState(namesArr)
	const [pending, startTransition] = useTransition()

	function onInputChange(event) {
		// 将耗时操作延后，使得页面能够先进性刷新，用户的键入操作能够及时在页面上反馈。
		startTransition(() => {
			const keyword = event.target.value
			const filterShowNames = namesArr.filter(item => item.includes(keyword))
			setShowNames(filterShowNames)
		})
	}

	return (
		<div>
			<input type="text" onInput={onInputChange} />
			{/* 执行耗时操作时，告知用户 */}
			<h2>用户名列表：{pending && <span>Loading...</span>}</h2>
			<ul>
				{
					names.map((item, index) => <li key={index}>{item}</li>)
				}
			</ul>
		</div>
	)
})

export default App