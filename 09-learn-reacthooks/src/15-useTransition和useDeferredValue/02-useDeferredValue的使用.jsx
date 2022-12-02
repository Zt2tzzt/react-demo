import React, { memo, useDeferredValue, useState } from 'react'
import nameArr from './namesArray'

const App = memo(() => {
	const [names, setNames] = useState(nameArr)
	const deferredNames = useDeferredValue(names)


	function handleInputChange(event) {
		const keyword = event.target.value
		const filterNames = nameArr.filter(item => item.includes(keyword))
		setNames(filterNames)
	}
	return (
		<div>
			<input type="text" onInput={handleInputChange} />
			<h2>用户列表：</h2>
			<ul>
				{
					deferredNames.map((item, index) => <li key={index}>{item}</li>)
				}
			</ul>
		</div>
	)
})

export default App