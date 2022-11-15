const store = require('./store')

const nameAction = { type: 'change_name', name: 'kobe' }
// 一但使用 store 派发 action，reducer 将会重新执行
store.dispatch(nameAction)

console.log(store.getState()); // { name: 'kobe', level: 99 }

const levelAction = { type: 'add_level', count: 10 }
store.dispatch(levelAction)

console.log(store.getState());