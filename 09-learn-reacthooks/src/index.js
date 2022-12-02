import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './15-useTransition和useDeferredValue/02-useDeferredValue的使用'
import store from './13-redux中的hooks/store'
import { UserContext, TokenContext } from './12-自定义Hook/context'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// <React.StrictMode>
	<UserContext.Provider value={{ name: 'zzt', level: 99 }}>
		<TokenContext.Provider value={'ZeT1an'}>
			<Provider store={store}>
				<App />
			</Provider>
		</TokenContext.Provider>
	</UserContext.Provider>
	// </React.StrictMode>
)
