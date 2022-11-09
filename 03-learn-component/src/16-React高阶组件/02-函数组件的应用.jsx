import React, { PureComponent } from 'react'
import enhanceUserInfo from './hoc/enhanced_props';
import About from './page/About'

const Home = enhanceUserInfo((props) => (
	<h1>Home {props.name}-{props.level}-{props.banners}</h1>
))

const Profile = enhanceUserInfo(props => (
	<h1>Profile: {props.name}-{props.level}</h1>
))

export class App extends PureComponent {
	render() {
		return (
			<div>
				<Home banners={['轮播1', '轮播2']} />
				<Profile />
				<About />
			</div>
		)
	}
}

export default App