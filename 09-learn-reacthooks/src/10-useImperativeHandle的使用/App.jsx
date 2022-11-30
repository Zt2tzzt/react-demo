import React, { forwardRef, memo, useRef, useImperativeHandle } from 'react'

const HelloWorld = memo(forwardRef((props, ref) => {
	const inputRef = useRef()

	// 子组件对父组件传入的 ref 进行处理
	useImperativeHandle(ref, () => ({
		focus() {
			console.log('foucs');
			inputRef.current.focus()
		},
		setValue(value) {
			inputRef.current.value = value
		}
	}))

	return(
		<div>
			<input type="text" ref={inputRef} />
		</div>
	)
}))

const App = memo(() => {
	const titleRef = useRef()
	const inputRef = useRef()

	function handleDOM() {
		inputRef.current.focus()
		inputRef.current.setValue('哈哈哈')
	}

	return (
		<div>
			<h2 ref={titleRef}>哈哈哈</h2>
			<HelloWorld ref={inputRef} />
			<button onClick={handleDOM}>DOM 操作</button>
		</div>
	)
})

export default App