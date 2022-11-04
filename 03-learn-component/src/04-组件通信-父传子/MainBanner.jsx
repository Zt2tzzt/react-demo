import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class MainBanner extends Component {
	// ES13 中进行参数赋默认值的另外一种写法。
	static propTypes = {
		banners: PropTypes.array,
		title: PropTypes.string
	}

	static defaultProps = {
		banners: [],
		title: '默认标题'
	}


	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { title, banners } = this.props

		return (
			<div className='banner'>
				<h2>封装一个轮播图：{ title }</h2>
				<ul>
					{
						banners.map(item => <li key={ item.acm }>{ item.title }</li>)
					}
				</ul>
			</div>
		)
	}
}

MainBanner.propTypes = {
	banners: PropTypes.array,
	title: PropTypes.string
}

MainBanner.defaultProps = {
	banners: [],
	title: '默认标题'
}

export default MainBanner