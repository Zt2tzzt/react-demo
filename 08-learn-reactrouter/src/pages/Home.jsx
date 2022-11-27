import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'
import withRouter from '../hoc/withRouter';

export class Home extends PureComponent {
	render() {
		return (
			<div>
				<h1>Home Page</h1>
				<div className="home-nav">
					<Link to='/home/recommend'>推荐</Link>
					<Link to='/home/ranking'>排行榜</Link>
					<button onClick={e => this.navigateTo('/home/songmenu')}>歌单</button>
				</div>

				{/* 占位组件 */}
				<Outlet />
			</div>
		)
	}

	navigateTo(path) {
		const { navigate } = this.props.router
		navigate(path)
	}
}

export default withRouter(Home)