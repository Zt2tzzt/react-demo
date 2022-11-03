import React, { Component } from 'react'

export class MainProductList extends Component {
	// 如果组件中不写 constructor，还是会执行 super(props)
	render() {
		const { productList} = this.props

		return (
			<div>
				<h2>商品列表</h2>
				<ul>
					{
						productList.map(item => <li key={item.acm}>{ item.title }</li>)
					}
				</ul>
			</div>
		)
	}
}

export default MainProductList