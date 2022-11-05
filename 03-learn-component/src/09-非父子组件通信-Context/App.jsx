import React, { Component } from 'react'
import ThemeContext from './context/theme-context';
import UserContext from './context/user-context';
import Home from './Home';
import Profile from './Profile';

export class App extends Component {
	constructor() {
		super()
		this.state = {
			info: { name: 'kobe', age: 30 }
		}
	}
	render() {
		const { info } = this.state;

		return (
			<div>
				{/* 2.通过 ThemContext 中 Provider 中 value 属性为后代提供数据 */}
				<UserContext.Provider value={{ nickname: 'Kobe', address: 'LA' }}>
					<ThemeContext.Provider value={{ color: 'red', size: 30}}>
						<Home  {...info } />
					</ThemeContext.Provider>
				</UserContext.Provider>
				<Profile />
			</div>
		)
	}
}

export default App