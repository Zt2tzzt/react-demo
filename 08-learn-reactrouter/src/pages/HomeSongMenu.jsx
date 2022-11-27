import React, { PureComponent } from 'react'
import withRouter from '../hoc/withRouter'

export class HomeSongMenu extends PureComponent {
	constructor() {
		super()
		this.state = {
			songMenus: [
				{ id: 111, name: '华语流行' },
				{ id: 112, name: '古典音乐' },
				{ id: 113, name: '乡村民谣' },
			]
		}
	}
	render() {
		const { songMenus } = this.state
		return (
			<div>
				<h1>Home Song Menu</h1>
				<ul>
					{
						songMenus.map(item => (
							<li key={item.id} onClick={e => this.navigateToDetail(item.id)}>{item.name}</li>
						))
					}
				</ul>
			</div>
		)
	}

	navigateToDetail(id) {
		const { navigate } = this.props.router
		navigate('/detail/' + id)
	}
}

export default withRouter(HomeSongMenu)