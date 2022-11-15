const store = require('./store')
const { changeNameAction, changeNameAction } = require('./store/actionCreators')

const unSubscribe = store.subscribe(() => {
	console.log('监听到数据的变化：', store.getState());
})

store.dispatch(changeNameAction('kobe'))
store.dispatch(changeLevelAction(10))

unSubscribe() // 取消订阅