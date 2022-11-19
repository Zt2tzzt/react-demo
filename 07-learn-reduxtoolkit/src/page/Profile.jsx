import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class Profile extends PureComponent {
	render() {
		const { counter, banners, recommends } = this.props
		return (
			<div>
				<h2>Page Counter: {counter}</h2>
				<div className="banner">
					<h2>轮播图展示</h2>
					<ul>
						{
							banners.map((item, index) => (
								<li key={index}>{item.title}</li>
							))
						}
					</ul>
				</div>
				<div className="recommend">
					<h2>推荐展示</h2>
					<ul>
						{
							recommends.map((item, index) => (
								<li key={index}>{item.title}</li>
							))
						}
					</ul>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	counter: state.counter.counter,
	banners: state.home.banners,
	recommends:state.home.recommends 
})

export default connect(mapStateToProps)(Profile)