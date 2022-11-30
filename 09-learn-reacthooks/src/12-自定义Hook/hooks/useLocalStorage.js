import { useState, useEffect } from 'react';

function useLocalStorage(key) {
	// 1. 从 localStprage 中获取数据
	// useState 第一个参数，可以传入一个函数，该函数会被立即执行，返回值作为初始值。
	const [data, setData] = useState(() => {
		const item = localStorage.getItem(key)
		return item ? JSON.parse(item) : ''
	})

	// 2. 监听 data 改变，保存 data 最新值
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(data))
	}, [data, key])

	return [data, setData]
}

export default useLocalStorage