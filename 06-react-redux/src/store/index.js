// import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createStore, combineReducers } from 'redux'
import { log, thunk, applyMiddleware } from './middleware'
import counterReducer from './counter';
import homeReducer from './home';
// import thunk from 'redux-thunk';

// 将两个 reducer 合并在一起
const reducer = combineReducers({
	counter: counterReducer,
	home: homeReducer
})

// combineReducers 实现原理（了解）
/* function reducer(state = {}, action) {
	// 返回一个对象，store 的 state
	return {
		couter: counterReducer(state.counter, action),
		home: homeReducer(state.home, action),
	}
} */

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose; // 开发环境
// const composeEnhancers = compose; // 生产环境

// const enhancer = applyMiddleware(thunk)
// const store = createStore(reducer, composeEnhancers(enhancer))

const store = createStore(reducer)

applyMiddleware(store, log, thunk)

export default store