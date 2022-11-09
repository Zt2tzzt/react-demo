import React, { PureComponent } from 'react'
import LogRenderTime from '../hoc/LogRenderTime';

export class Detai extends PureComponent {

	render() {
		return (
			<div>
				<h2>Detail Page</h2>
				<ul>
					<li>数据列表</li>
					<li>数据列表</li>
					<li>数据列表</li>
					<li>数据列表</li>
					<li>数据列表</li>
					<li>数据列表</li>
					<li>数据列表</li>
					<li>数据列表</li>
					<li>数据列表</li>
					<li>数据列表</li>
				</ul>
			</div>
		)
	}
}

export default LogRenderTime(Detai)