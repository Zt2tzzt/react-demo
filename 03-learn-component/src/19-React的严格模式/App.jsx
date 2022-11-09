import React, { PureComponent, StrictMode } from 'react'
// import Home from './page/Home'
import Profile from './page/Profile'

export class App extends PureComponent {
	render() {
		return (
			<div>
				<StrictMode>
					{/* <Home /> */}
					<Profile />
				</StrictMode>
			</div>
		)
	}
}

export default App