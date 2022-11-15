const store = require('./store')

// 获取 store 中的数据，得到一个对象
console.log(store.getState()); // { name: 'zzt', age: 18 }