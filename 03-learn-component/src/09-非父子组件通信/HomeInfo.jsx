import React, { Component } from 'react'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context';

export class HomeInfo extends Component {
	render() {
		// 4.获取共享的数据，并使用
		console.log(this.context);
		return (
			<div>
				{/* this.context 是 ThemeContext */}
				<h2>HoemInfo: { this.context.color }</h2>
				{/* 如果要使用 UserContext 中的共享数据，那么需要使用 Context.consumer */}
				<UserContext.Consumer>
					{
						value => (
							<h2>Info User: { value.nickname }</h2>
						)
					}
				</UserContext.Consumer>
			</div>
		)
	}
}

// 3.设置要共享信息的组件的 contextType 为 ThemeContext
HomeInfo.contextType = ThemeContext

export default HomeInfo