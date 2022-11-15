const store = require('./store')

const unSubscribe = store.subscribe(() => {
	console.log('监听到数据的变化：', store.getState());
	/**
	 * 监听到数据的变化： { name: 'kobe', level: 99 }
	 * 监听到数据的变化： { name: 'kobe', level: 109 }
	 */
})

store.dispatch({ type: 'change_name', name: 'kobe' })
store.dispatch({ type: 'add_level', count: 10 })

unSubscribe() // 取消订阅