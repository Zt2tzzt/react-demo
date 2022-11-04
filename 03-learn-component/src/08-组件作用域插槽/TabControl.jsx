import React, { Component } from 'react'
import './style.css' // 直接在 jsx 中引入样式文件，默认会当作全局样式。

export class TabControl extends Component {
	constructor(ptops) {
		super(ptops)
		this.state = {
			currentIndex: 0
		}
	}

	onItemClick(index) {
		// 自己保存最新的 index
		this.setState({ currentIndex: index })
		// 让父组件执行对应的函数
		this.props.handleTabClick(index)
	}

	render() {
		const { titles, itemType } = this.props
		const { currentIndex } = this.state;
		
		return (
			<div className='tab-control'>
				{
					titles.map((item, index) => (
						<div
							className={`item ${index === currentIndex ? 'active' : ''}`}
							key={ item }
							onClick={ () => this.onItemClick(index) }
						>
							{ itemType(item) }
							{/* <span className='text'>{ item }</span> */}
						</div>
					))
				}
			</div>
		)
	}
}

export default TabControl