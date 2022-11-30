import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './12-自定义Hook/04-封装localStorage'
import { UserContext, TokenContext } from './12-自定义Hook/context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// <React.StrictMode>
	<UserContext.Provider value={{ name: 'zzt', level: 99 }}>
		<TokenContext.Provider value={'ZeT1an'}>
			<App />
		</TokenContext.Provider>
	</UserContext.Provider>
	// </React.StrictMode>
)
