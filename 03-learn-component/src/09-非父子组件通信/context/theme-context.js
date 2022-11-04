import React from 'react'

// 1.创建一个 Context，命名为 ThemeContext，并提供 defaultvalue 默认值
const ThemeContext = React.createContext({ color: 'blue', size: 10 })
export default ThemeContext