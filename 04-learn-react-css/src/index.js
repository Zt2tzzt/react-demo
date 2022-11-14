import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './02-普通的CSS写法/App';
// import App from './03-CSS-Module/App';
// import App from './04-less编写方式/App';
import App from './05-CSS-IN-JS/App'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ThemeProvider theme={{color: 'purple', size: '50px'}}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
